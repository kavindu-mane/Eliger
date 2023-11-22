import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Modal, Button, Rating, Textarea, Label } from "flowbite-react";
import { MdWhatsapp } from "react-icons/md";
import {
  GoogleMap,
  MarkerF,
  useJsApiLoader,
  DirectionsRenderer,
} from "@react-google-maps/api";
import { CgSpinnerTwoAlt } from "react-icons/cg";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import ErrorData from "../../../Data/ErrorData";

// create sweet alert object
const Alert = withReactContent(Swal);

// google map libraries
const libs = ["places"];

const MyBooking = ({ isOpenModal, setIsOpenModal, details }) => {
  const [addresses, setAddresses] = useState({});
  const [active, setActive] = useState(0); // 0 - details | 1 - feedback | 3 - track
  const [ratings, setRatings] = useState(1);
  const [directions, setDirections] = useState(null);
  const [distance, setDistance] = useState("");
  const [routeDetails, setRouteDetails] = useState({});
  const [driverRoute, setDriverRoute] = useState(null);
  const [center, setCenter] = useState();
  const feedbackRef = useRef();

  // load map api
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY,
    libraries: libs,
  });

  // add payhere java sdk
  const addLibrary = (urlOfTheLibrary) => {
    const script = document.createElement("script");
    script.src = urlOfTheLibrary;
    script.async = true;
    document.body.appendChild(script);
  };

  // custom allert function with sweet alert 2
  const setAlert = (icon, title, desc) => {
    return Alert.fire({
      icon: icon,
      title: title,
      text: desc,
    });
  };

  // create geocoder object
  const geocoder = useMemo(() => new window.google.maps.Geocoder(), []);
  // create direction service object
  const directionService = useMemo(
    () => new window.google.maps.DirectionsService(),
    []
  );

  // convert address from lat and long
  const getAddresFromLatLng = useCallback(
    (latlng) => {
      if (latlng) {
        const latLng = {
          lat: parseFloat(latlng?.split(",")[0]),
          lng: parseFloat(latlng?.split(",")[1]),
        };

        // get appropreate address using atitude and longitude using google maps api's geocoder api
        geocoder.geocode({ location: latLng }, (results, status) => {
          // if geocoder give success response, change pick address with responded address
          if (status === "OK" && results[0]) {
            setAddresses((addresses) => {
              return { ...addresses, [latlng]: results[0].formatted_address };
            });
          }
        });
      }
    },
    [geocoder]
  );

  // canclutate customer to destination route
  const calculateRoute = useCallback(
    async (origin, destination) => {
      const result = await directionService.route({
        origin: origin,
        destination: destination,
        avoidHighways: true,
        travelMode: window.google.maps.TravelMode.DRIVING,
      });

      setDirections(result);
      setDistance(result.routes[0].legs[0].distance.text);
      const start_ = result.routes[0].legs[0].start_location
        .toUrlValue()
        .split(",");
      const end_ = result.routes[0].legs[0].end_location
        .toUrlValue()
        .split(",");
      setRouteDetails({
        start: {
          lat: parseFloat(start_[0]),
          lng: parseFloat(start_[1]),
        },
        end: {
          lat: parseFloat(end_[0]),
          lng: parseFloat(end_[1]),
        },
      });
    },
    [directionService]
  );

  // canclutate driver to customer route
  const driverPathChanger = useCallback(
    async (destination) => {
      const formData = new FormData();
      formData.append("vehicle", details.Vehicle_Id);
      await axios
        .post("/get_vehicle_current_location", formData)
        .then(async (response) => {
          if (response?.data?.length !== 0 && response?.data !== 500) {
            const origin = {
              lat: parseFloat(response.data.Current_Lat),
              lng: parseFloat(response.data.Current_Long),
            };
            setCenter(origin);
            const result = await directionService.route({
              origin: origin,
              destination: destination,
              avoidHighways: true,
              travelMode: window.google.maps.TravelMode.DRIVING,
            });

            setDriverRoute(result);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    [directionService, details.Vehicle_Id]
  );

  // convert string to alt and long object
  const stringToLatLng = (text) => {
    return {
      lat: parseFloat(text?.split(",")[0]),
      lng: parseFloat(text?.split(",")[1]),
    };
  };

  useEffect(() => {
    // origin and destination address set
    setCenter({
      lat: parseFloat(details.Current_Lat),
      lng: parseFloat(details.Current_Long),
    });
    getAddresFromLatLng(details.Origin_Place);
    getAddresFromLatLng(details.Destination_Place);
  }, [
    details.Origin_Place,
    details.Destination_Place,
    getAddresFromLatLng,
    setCenter,
    details.Current_Lat,
    details.Current_Long,
  ]);

  // calculate route details
  useEffect(() => {
    if (active === 3 || (active === 0 && details?.Booking_Type === "book-now"))
      calculateRoute(
        stringToLatLng(details.Origin_Place),
        stringToLatLng(details.Destination_Place)
      );
  }, [calculateRoute, addresses, active, details]);

  // get driver and vehicle current location in book now
  useEffect(() => {
    let interval;
    if (active === 3) {
      interval = setInterval(() => {
        driverPathChanger(stringToLatLng(details.Origin_Place));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [active, driverPathChanger, details.Origin_Place]);

  // send feedback to database
  const addFeedback = () => {
    const formData = new FormData();
    formData.append("vehicle", details?.Vehicle_Id);
    formData.append("booking", details.Booking_Id);
    formData.append("customer", details.Customer_Id);
    formData.append("rating", ratings);
    formData.append("comment", feedbackRef.current.value);
    axios
      .post("/add_feedback", formData)
      .then((response) => {
        console.log(response);
        if (response.data === 200 && response.status === 200) {
          setAlert("success", "Success", "Feedback added successfully");
        } else {
          setAlert("error", "Error occured", ErrorData["500"]);
        }
        setIsOpenModal(false);
      })
      .catch((error) => {
        setAlert("error", "Error occured", ErrorData["500"]);
      });
  };

  //cancel and delete bookinh
  const cancelBooking = () => {
    const formData = new FormData();
    formData.append("booking", details.Booking_Id);
    formData.append("status", "canceled");
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, change it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        axios
          .post("/cancel_booking", formData)
          .then((response) => {
            if (response.data === 200 && response.status === 200) {
              setAlert("success", "Success", "Booking canceled successfully");
            } else {
              setAlert("error", "Error occured", ErrorData["500"]);
            }
            setIsOpenModal(false);
          })
          .catch((error) => {
            setAlert("error", "Error occured", ErrorData["500"]);
          });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        setAlert("error", "Cancelled", "Your imaginary data is safe.");
      }
    });
  };

  // pay online
  const makePayment = async () => {
    const formData = new FormData();
    formData.append(
      "amount",
      parseFloat(distance.split(" ")[0] * details.Price)
    );
    await axios
      .post("/online_payment", formData)
      .then((response) => {
        if (
          response?.data?.length !== 0 &&
          ![14, 500].includes(response?.data)
        ) {
          const result = response?.data;
          const payment_object = {
            sandbox: true,
            preapprove: true,
            merchant_id: result?.merchant_id,
            return_url: process.env.REACT_APP_PAYMENT_URL,
            cancel_url: process.env.REACT_APP_PAYMENT_URL,
            notify_url: process.env.REACT_APP_PAYMENT_URL,
            order_id: result?.order_id,
            items: "Book Now Booking",
            amount: result?.amount,
            currency: result?.currency,
            hash: result?.hash,
            first_name: "",
            last_name: "",
            email: "",
            phone: "",
            address: "",
            city: "",
            country: "Sri Lanka",
            delivery_address: "",
            delivery_city: "",
            delivery_country: "Sri Lanka",
          };

          window.payhere.startPayment(payment_object);

          window.payhere.onCompleted = function onCompleted(orderId) {
            const formData = new FormData();
            formData.append("booking", details.Booking_Id);
            formData.append("amount", result.amount);
            formData.append("isOnline", true);
            axios
              .post("/finish_booking", formData)
              .then((response) => {
                if (response.data === 200 && response.status === 200) {
                  setAlert(
                    "success",
                    "Success",
                    "Booking finished successfully"
                  );
                } else {
                  setAlert("error", "Error occured", ErrorData["500"]);
                }
                setIsOpenModal(false);
              })
              .catch((error) => {
                setAlert("error", "Error occured", ErrorData["500"]);
              });
          };

          window.payhere.onDismissed = function onDismissed() {
            setAlert("info", "Payment canceled", "Payment dismissed");
          };

          window.payhere.onError = function onError(error) {
            setAlert("error", "Error occured", ErrorData["500"]);
          };
        } else if (response?.data === 14) {
          setAlert("error", "Payment error", "Please login again.");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // return loading spinner while google map loading
  if (!isLoaded)
    return (
      <div className="flex h-screen w-screen flex-col items-center justify-center">
        <CgSpinnerTwoAlt className="h-20 w-20 animate-spin text-emerald-400" />
        <h1 className="mt-8 font-Poppins text-2xl font-medium italic">
          Map is loading..
        </h1>
      </div>
    );

  // map
  const mapBody = () => {
    return (
      <Modal.Body>
        <div className="h-[50vh] w-full">
          <GoogleMap
            center={center}
            zoom={15}
            mapContainerClassName="w-full h-full"
            options={{
              fullscreenControl: false,
              mapTypeControl: false,
              streetViewControl: false,
            }}
          >
            {directions && (
              <>
                <MarkerF
                  position={routeDetails.start}
                  label={{ text: "O", color: "white" }}
                />
                <MarkerF
                  position={routeDetails.end}
                  label={{ text: "D", color: "white" }}
                />
                {center && (
                  <MarkerF
                    position={center}
                    label={{ text: "V", color: "white" }}
                  />
                )}
              </>
            )}
            {directions && (
              <DirectionsRenderer
                directions={directions}
                options={{
                  preserveViewport: true,
                  markerOptions: {
                    visible: false,
                  },
                }}
              />
            )}

            {driverRoute && (
              <DirectionsRenderer
                directions={driverRoute}
                options={{
                  preserveViewport: true,
                  markerOptions: {
                    visible: false,
                  },
                }}
              />
            )}
          </GoogleMap>
        </div>
        {directions && (
          <div className="mt-2 flex flex-col justify-center gap-10 text-lg sm:flex-row">
            <p className="font-Poppins font-medium">Distance : {distance}</p>
            <p className="font-Poppins font-medium">
              Cost : Rs. {distance.split(" ")[0] * details?.Price}
            </p>
          </div>
        )}
      </Modal.Body>
    );
  };

  return (
    <Modal
      show={isOpenModal}
      onClose={() => setIsOpenModal(false)}
      size={"4xl"}
    >
      {/* call addLibrary function for add payhere js sdk */}
      {addLibrary("https://www.payhere.lk/lib/payhere.js")}

      <Modal.Header>
        {active === 0
          ? "Booking details"
          : active === 1
          ? "Rate our service"
          : active === 2
          ? "Payment"
          : "Tracking"}
      </Modal.Header>
      {/* details body */}
      {active === 0 && detailsBody(details, addresses)}
      {/* feedback body */}
      {active === 1 && feedbackBody(ratings, setRatings, feedbackRef)}
      {/* map body */}
      {active === 3 && mapBody()}
      <Modal.Footer className="flex justify-end">
        {/* track and pay buttons */}
        {details?.Booking_Status === "driving" &&
          details?.Booking_Type === "book-now" && (
            <>
              <Button
                className="h-10 w-full rounded-md bg-green-500 dark:bg-emerald-600"
                onClick={() => {
                  setActive(3);
                }}
              >
                Track Driver
              </Button>
              <Button
                className="h-10 w-full rounded-md bg-green-500 dark:bg-emerald-600"
                onClick={() => {
                  makePayment();
                }}
              >
                Pay online
              </Button>
            </>
          )}

        {/* give feedback */}
        {details?.Booking_Status === "finished" &&
          details?.Feedback_Id === null && (
            <>
              <Button
                className="h-10 w-full rounded-md bg-yellow-400 dark:bg-yellow-500"
                onClick={() => {
                  if (active === 0) setActive(1);
                  else addFeedback();
                }}
              >
                Give feedback
              </Button>
            </>
          )}
        {/* cancel booking */}
        {details?.Booking_Status === "pending" && (
          <>
            <Button
              className="h-10 w-full rounded-md bg-red-600 dark:bg-red-500"
              onClick={() => {
                cancelBooking();
              }}
            >
              Cancel Booking
            </Button>
          </>
        )}
        {/* close or back*/}
        {(details?.Booking_Status !== "approved" ||
          details?.Booking_Type === "rent-out") && (
          <>
            <Button
              className="h-10 w-full rounded-md bg-gray-400 dark:bg-gray-500"
              onClick={() => {
                if (active === 0) setIsOpenModal(false);
                else setActive(0);
              }}
            >
              {active === 0 ? "Close" : "Back"}
            </Button>
          </>
        )}
      </Modal.Footer>
    </Modal>
  );
};

const detailsBody = (details, addresses) => {
  return (
    <Modal.Body className="no-scrollbar">
      <div className="space-y-3">
        <p className="font-Poppins capitalize">
          Booking Type : {details?.Booking_Type.replace("-", " ")}
        </p>
        <p className="font-Poppins">Booking Time : {details?.Booking_Time}</p>
        <p className="font-Poppins capitalize">
          Booking Status : {details?.Booking_Status}
        </p>
        <p className="font-Poppins">
          Amount (Rs): {details?.Amount ?? "No payment"}
        </p>
        <p className="font-Poppins capitalize">
          Vehicle Type: {details.Vehicle_type}
        </p>
        <p className="font-Poppins">
          Vehicle Plate Number: {details.Vehicle_PlateNumber}
        </p>
        <p className="font-Poppins">
          Passenger Amount : {details.Passenger_amount}
        </p>
        {/* start and end date for rent out */}
        {details?.Booking_Type === "rent-out" && (
          <>
            <p className="font-Poppins">
              Start Date : {details.Journey_Starting_Date}
            </p>
            <p className="font-Poppins">
              End Date : {details.Journey_Ending_Date}
            </p>
          </>
        )}
        {/* address for book now */}
        {details?.Booking_Type === "book-now" && (
          <>
            <p className="font-Poppins">
              Origin : {addresses[details.Origin_Place]}
            </p>
            <p className="font-Poppins">
              Destination : {addresses[details.Destination_Place]}
            </p>
          </>
        )}
        <p className="flex items-center font-Poppins">
          Driver :{" "}
          {details?.Driver_firstname
            ? `${details?.Driver_firstname} ${details?.Driver_lastname}`
            : "Without Driver"}
          {details?.Driver_Tel && (
            <a
              href={"https://wa.me/" + details?.Driver_Tel}
              className="ms-3 flex items-center rounded-lg bg-emerald-500 px-3 py-1 text-white"
              target="_blank"
              rel="noreferrer"
            >
              <MdWhatsapp className="me-1 text-lg" /> Chat
            </a>
          )}
        </p>
        <p className="flex items-center font-Poppins">
          Vehicle Owner :{" "}
          {`${details?.Owner_firstname} ${details?.Owner_lastname}`}
          {details?.Owner_Tel && (
            <a
              href={"https://wa.me/" + details?.Owner_Tel}
              className="ms-3 flex items-center rounded-lg bg-emerald-500 px-3 py-1 text-white"
              target="_blank"
              rel="noreferrer"
            >
              <MdWhatsapp className="me-1 text-lg" /> Chat
            </a>
          )}
        </p>
        {/* vehicle rent-out location */}
        {details?.Booking_Type === "rent-out" && (
          <GoogleMap
            center={{
              lat: parseFloat(details?.Current_Lat),
              lng: parseFloat(details?.Current_Long),
            }}
            zoom={9}
            mapContainerClassName="w-full h-[40vh]"
            options={{
              fullscreenControl: false,
              mapTypeControl: false,
              streetViewControl: false,
            }}
          >
            <MarkerF
              position={{
                lat: parseFloat(details?.Current_Lat),
                lng: parseFloat(details?.Current_Long),
              }}
            />

            <div className="absolute start-2 top-2 max-w-[15rem] space-y-1 rounded-md bg-white p-2 px-4 font-Poppins text-sm font-semibold dark:bg-slate-800">
              <a
                href={
                  "https://www.google.com/maps/search/?api=1&query=" +
                  details?.Current_Lat +
                  "%2C" +
                  details?.Current_Long
                }
                className="flex items-center rounded-lg px-3 py-1 text-white"
                target="_blank"
                rel="noreferrer"
              >
                Open in Google Map
              </a>
            </div>
          </GoogleMap>
        )}
      </div>
    </Modal.Body>
  );
};

const feedbackBody = (ratings, setRatings, feedbackRef) => {
  return (
    <Modal.Body>
      <div className="mb-2 block">
        <Label
          htmlFor="stars"
          value="Ratings"
          className="after:ml-0.5 after:text-red-500 after:content-['*']"
        />
      </div>
      <Rating id="stars" size={"md"}>
        <Rating.Star className="cursor-pointer" onClick={() => setRatings(1)} />
        <Rating.Star
          filled={ratings >= 2}
          className="cursor-pointer"
          onClick={() => setRatings(2)}
        />
        <Rating.Star
          filled={ratings >= 3}
          className="cursor-pointer"
          onClick={() => setRatings(3)}
        />
        <Rating.Star
          filled={ratings >= 4}
          className="cursor-pointer"
          onClick={() => setRatings(4)}
        />
        <Rating.Star
          filled={ratings === 5}
          className="cursor-pointer"
          onClick={() => setRatings(5)}
        />
        <p className="ms-3 text-sm">{ratings} Star ratring</p>
      </Rating>
      <div className="mb-2 mt-5 block">
        <Label
          htmlFor="comment"
          value="Your message"
          className="after:ml-0.5 after:text-red-500 after:content-['*']"
        />
      </div>
      <Textarea
        id="comment"
        className="inputs dark:bg-gray-800/50"
        placeholder="Leave a comment..."
        ref={feedbackRef}
        required
        rows={5}
        maxLength={300}
      />
    </Modal.Body>
  );
};

export default MyBooking;
