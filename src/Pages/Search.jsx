import React, { lazy, useCallback, useState } from "react";
import {
  GoogleMap,
  DirectionsRenderer,
  MarkerF,
  useJsApiLoader,
} from "@react-google-maps/api";
import { CgSpinnerTwoAlt } from "react-icons/cg";
import axios from "axios";
import { Button, Card } from "flowbite-react";
import ErrorData from "../Data/ErrorData";
import {
  MarkerClusterer,
  SuperClusterAlgorithm,
} from "@googlemaps/markerclusterer";
const Header = lazy(() => import("../Components/Common/Header"));
const Footer = lazy(() => import("../Components/Common/Footer"));
const FindVehicles = lazy(() => import("../Components/Common/FindVehicles"));

// google map libraries
const libs = ["places"];
let currentCluster = null;

const Search = () => {
  // load map api
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY,
    libraries: libs,
  });

  const [directions, setDirections] = useState(null);
  const [durations, setDurations] = useState("");
  const [distance, setDistance] = useState("");
  const [routeDetails, setRouteDetails] = useState({});
  const [vehicleLocations, setVehicleLocations] = useState([]);
  const [map, setMap] = useState(null);
  const [errorCode, setErrorCode] = useState(null);
  // colombo location
  const [center, setCenter] = useState({ lat: 6.927, lng: 80.001 });

  // markers adding function with callback
  const showLocations = useCallback(
    (map, vehicles) => addMarkers(map, vehicles),
    []
  );

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

  // create direction service object
  const directionService = new window.google.maps.DirectionsService();

  // find vehicle with form submission
  const findVehicles = (formData) => {
    // clear current clustered markers
    if (currentCluster) currentCluster.clearMarkers();
    // clear book now details
    setVehicleLocations((prevArr) => []);
    setDurations("");
    setDirections(null);
    // check booking method and after call appropriate method
    if (formData["booking-type"] === "Book Now") {
      calculateRoute(
        formData["pick-up"],
        formData["destination"],
        formData["vehicle-category"]
      );
    } else if (formData["booking-type"] === "Rentout") {
      getVehiclesByDistrict(
        formData["from-date"],
        formData["to-date"],
        formData["vehicle-category"],
        formData["district"],
        formData["driver"]
      );
    }
  };

  /*
   *  book now feature functions area : start
   */

  // canclutate route
  const calculateRoute = async (origin, destination, type) => {
    if (origin === "" || destination === "") return;
    const result = await directionService.route({
      origin: origin,
      destination: destination,
      travelMode: window.google.maps.TravelMode.DRIVING,
    });

    setDirections(result);
    setDistance(result.routes[0].legs[0].distance.text);
    setDurations(result.routes[0].legs[0].duration.text);
    const start_ = result.routes[0].legs[0].start_location
      .toUrlValue()
      .split(",");
    const end_ = result.routes[0].legs[0].end_location.toUrlValue().split(",");
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
    // get nearest vehicles
    getNearestVehicles(parseFloat(start_[0]), parseFloat(start_[1]), type);
  };

  // get nearest 10 vehicles from backend
  const getNearestVehicles = async (lat, long, type) => {
    setErrorCode(null);
    const formData = new FormData();
    formData.append("lat", lat);
    formData.append("long", long);
    formData.append("type", type);
    await axios
      .post("/get_nearest", formData)
      .then((response) => {
        if (response.status === 200) {
          if (response.data !== 45) {
            getNearestVehiclesDistance(lat, long, response.data);
          } else {
            setErrorCode(response.data);
          }
        } else {
          console.log(response.data, response.status);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getNearestVehiclesDistance = (lat, long, data) => {
    data.forEach(async (element, key) => {
      const result = await directionService.route({
        destination: {
          lat: lat,
          lng: long,
        },
        origin: {
          lat: parseFloat(element.Current_Lat),
          lng: parseFloat(element.Current_Long),
        },
        travelMode: window.google.maps.TravelMode.DRIVING,
      });
      element.mapDetails = result?.routes[0]?.legs[0];
      setVehicleLocations((prevArr) => [...prevArr, element]);
    });
  };

  /*
   *  book now feature functions area : end
   */

  /*
   *  brent out feature functions area : start
   */

  // get nearest 10 vehicles from backend
  const getVehiclesByDistrict = async (start, end, type, district, driver) => {
    setErrorCode(null);
    const formData = new FormData();
    formData.append("start", start);
    formData.append("end", end);
    formData.append("type", type);
    formData.append("district", district);
    formData.append("driver", driver);
    await axios
      .post("/get_vehicle_by_district", formData)
      .then((response) => {
        if (response.status === 200) {
          if (response.data !== 45 && response.data !== 47) {
            console.log(response.data);
            showLocations(map, response.data);
            setCenter({
              lat: parseFloat(response.data[0].Current_Lat),
              lng: parseFloat(response.data[0].Current_Long),
            });
          } else {
            setErrorCode(response.data);
          }
        } else {
          console.log(response.data, response.status);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  /*
   *  brent out feature functions area : end
   */

  return (
    <React.Fragment>
      <div className="flex min-h-screen w-screen flex-col items-center justify-between bg-slate-200 dark:bg-slate-900 xl:h-screen xl:overflow-hidden">
        {/* header */}
        <Header />
        {/* container */}
        <div className="flex w-full flex-col-reverse py-10 xl:flex-row xl:overflow-hidden">
          {/* search and results */}
          <div className="flex w-full flex-col items-center xl:w-1/2 xl:overflow-y-scroll">
            <FindVehicles isEmbed={true} findVehicles={findVehicles} />
            {/* vehicle section */}
            <div className="flex w-full flex-col items-center gap-y-5 px-3">
              {vehicleLocations &&
                vehicleLocations?.map((locations, key) => {
                  return (
                    <Card key={key} className="w-full max-w-2xl">
                      <div className="flex w-full flex-col justify-between sm:flex-row ">
                        <div className="">
                          <p className="mb-2 capitalize">
                            <span className="font-bold">Vehicle type : </span>
                            {locations.Vehicle_type}
                          </p>
                          <p className="mb-2">
                            <span className="font-bold">Vehicle number : </span>
                            {locations.Vehicle_PlateNumber}
                          </p>
                          <p className="mb-2">
                            <span className="font-bold">Price : </span>
                            Rs. {locations.Price} (per km)
                          </p>
                          <p className="mb-2">
                            <span className="font-bold">Distance : </span>
                            <span className="text-emerald-600 dark:text-emerald-400">
                              {locations.mapDetails.distance.text}
                            </span>
                          </p>
                          <p className="mb-2">
                            <span className="font-bold">
                              Approximate time :{" "}
                            </span>
                            <span className="text-emerald-600 dark:text-emerald-400">
                              {locations.mapDetails.duration.text}
                            </span>
                          </p>
                        </div>
                        <Button className="w-fit self-end bg-cyan-500 px-3 sm:self-center">
                          Book vehicle
                        </Button>
                      </div>
                    </Card>
                  );
                })}
              {(errorCode === 45 || errorCode === 47) && (
                <p className="text-center">{ErrorData[errorCode]}</p>
              )}
            </div>
          </div>
          <div className="h-[50vh] w-full px-5 xl:h-auto xl:w-1/2">
            {/* map */}
            <GoogleMap
              id="map"
              onLoad={(event) => setMap(event)}
              center={center}
              zoom={9}
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
                </>
              )}
              {directions && (
                <div className="absolute start-2 top-2 max-w-[12rem] space-y-1 rounded-md bg-white p-2 px-4 font-Poppins text-sm font-semibold dark:bg-slate-800">
                  <p className="">Distance : {distance}</p>
                  <p className="">Time : {durations}</p>
                </div>
              )}
              {directions && (
                <DirectionsRenderer
                  directions={directions}
                  options={{
                    markerOptions: {
                      visible: false,
                    },
                  }}
                />
              )}
            </GoogleMap>
          </div>
        </div>
        {/* footer */}
        <Footer />
      </div>
    </React.Fragment>
  );
};

// add rent out location markers and clustering it
function addMarkers(map, vehicles) {
  const infoWindow = new window.google.maps.InfoWindow();
  const markers = vehicles.map((vehicle) => {
    const lat = parseFloat(vehicle.Current_Lat);
    const lng = parseFloat(vehicle.Current_Long);
    const marker = new window.google.maps.Marker({ position: { lat, lng } });
    marker.addListener("click", () => {
      infoWindow.setPosition({ lat, lng });
      infoWindow.setContent(`
          <div class="flex w-full flex-col text-slate-800 font-medium min-w-[20rem] text-sm">
            <p class="mb-2 capitalize">
              <span class="font-bold">Vehicle type : </span>
              ${vehicle.Vehicle_type}
            </p>
            <p class="mb-2">
              <span class="font-bold">Vehicle number : </span>
              ${vehicle.Vehicle_PlateNumber}
            </p>
            <p class="mb-2">
              <span class="font-bold">Price : </span>
              <span class="text-emerald-600">
                Rs. ${vehicle.Price} (per day)
              </span>
            </p>
            <p class="mb-4">
              <span class="font-bold">Passengers : </span>
              <span class="text-emerald-600">
                ${vehicle.Passenger_amount}
              </span>
            </p>
            <button class="w-full bg-cyan-700 px-3 rounded-sm py-2 text-white">
              Book vehicle
            </button>
          </div>
      `);
      infoWindow.open(map);
    });
    return marker;
  });

  currentCluster = new MarkerClusterer({
    map,
    markers,
    algorithm: new SuperClusterAlgorithm({ radius: 300 }),
  });
}

export default Search;
