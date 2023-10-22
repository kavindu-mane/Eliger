import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Modal, Button } from "flowbite-react";
import { MdWhatsapp } from "react-icons/md";
import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";
import { CgSpinnerTwoAlt } from "react-icons/cg";
// import axios from "axios";
// import Swal from "sweetalert2";
// import withReactContent from "sweetalert2-react-content";

// create sweet alert object
// const Alert = withReactContent(Swal);

// google map libraries
const libs = ["places"];

const MyBooking = ({ isOpenModal, setIsOpenModal, details }) => {
  const [addresses, setAddresses] = useState({});
  // custom allert function with sweet alert 2
  //   const setAlert = (icon, title, desc) => {
  //     return Alert.fire({
  //       icon: icon,
  //       title: title,
  //       text: desc,
  //     });
  //   };

  // load map api
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY,
    libraries: libs,
  });

  // create geocoder object
  const geocoder = useMemo(() => new window.google.maps.Geocoder(), []);

  const getAddresFromLatLng = useCallback(
    (latlng) => {
      const latLng = {
        lat: parseFloat(latlng.split(",")[0]),
        lng: parseFloat(latlng.split(",")[1]),
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
    },
    [geocoder]
  );

  useEffect(() => {
    // origin
    getAddresFromLatLng(details.Origin_Place);
    getAddresFromLatLng(details.Destination_Place);
  }, [details.Origin_Place, details.Destination_Place, getAddresFromLatLng]);

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

  return (
    <Modal
      show={isOpenModal}
      onClose={() => setIsOpenModal(false)}
      size={"4xl"}
    >
      <Modal.Header>Booking details</Modal.Header>
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
            Amount : {details?.Amount ?? "No payment"}
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
      <Modal.Footer className="flex justify-end">
        {/* track and pay buttons */}
        {details?.Booking_Status === "approved" &&
          details?.Booking_Type === "book-now" && (
            <>
              <Button
                className="h-10 w-full rounded-md bg-green-500 dark:bg-emerald-600"
                //   onClick={() => {}}
              >
                Track Driver
              </Button>
              <Button
                className="h-10 w-full rounded-md bg-green-500 dark:bg-emerald-600"
                //   onClick={() => {}}
              >
                Pay
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
                  // setIsOpenModal(false);
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
                setIsOpenModal(false);
              }}
            >
              Cancel Booking
            </Button>
          </>
        )}
        {/* close */}
        {(details?.Booking_Status !== "approved" ||
          details?.Booking_Type === "rent-out") && (
          <>
            <Button
              className="h-10 w-full rounded-md bg-gray-400 dark:bg-gray-500"
              onClick={() => {
                setIsOpenModal(false);
              }}
            >
              Close
            </Button>
          </>
        )}
      </Modal.Footer>
    </Modal>
  );
};

export default MyBooking;
