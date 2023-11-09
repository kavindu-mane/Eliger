import React, { useState, useCallback, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { CgSpinnerTwoAlt } from "react-icons/cg";
import { useJsApiLoader } from "@react-google-maps/api";
import ErrorData from "../../Data/ErrorData";

// create sweet alert object
const Alert = withReactContent(Swal);

// google map libraries
const libs = ["places"];

const BookiengRequest = ({ loadedData }) => {
  const [bookNowtableData, setBookNowTableData] = useState(null);
  const [rentOuttableData, setRentOutTableData] = useState(null);
  const [addresses, setAddresses] = useState({});

  // load map api
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY,
    libraries: libs,
  });

  // custom allert function with sweet alert 2
  const setAlert = (icon, title, desc) => {
    return Alert.fire({
      icon: icon,
      title: title,
      text: desc,
    });
  };

  // convert address from lat and long
  const getAddresFromLatLng = useCallback((latlng) => {
    const geocoder = new window.google.maps.Geocoder();
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
  }, []);

  // load book now function
  const loadBookNowBookings = useCallback(async () => {
    setBookNowTableData(null);
    await axios
      .post("/load_driver_booknow_bookings")
      .then((response) => {
        if (response.data.length !== 0) {
          setBookNowTableData(response.data);
        }
      })
      .catch((error) => {
        setAlert("error", "Error occured", ErrorData["500"]);
      });
  }, []);

  // load rent out function
  const loadRentOutBookings = useCallback(async () => {
    setRentOutTableData(null);
    await axios
      .post("/load_driver_rentout_bookings")
      .then((response) => {
        if (response.data.length !== 0) {
          setRentOutTableData(response.data);
        }
      })
      .catch((error) => {
        setAlert("error", "Error occured", ErrorData["500"]);
      });
  }, []);

  useEffect(() => {
    bookNowtableData?.forEach((data) => {
      getAddresFromLatLng(data?.Origin_Place);
      getAddresFromLatLng(data?.Destination_Place);
    });
  }, [bookNowtableData, getAddresFromLatLng]);

  // load data function run in component mount
  useEffect(() => {
    if (loadedData?.Booking_Type === "book-now") loadBookNowBookings();
  }, [loadBookNowBookings, loadedData?.Booking_Type]);

  useEffect(() => {
    if (loadedData?.Booking_Type === "rent-out") loadRentOutBookings();
  }, [loadRentOutBookings, loadedData?.Booking_Type]);

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
    <div className="flex h-full w-full flex-col">
      {loadedData?.Vehicle_PlateNumber !== null && (
        <div className="mb-10 flex flex-col justify-between gap-y-5 sm:mb-5 sm:flex-row">
          {/* current vehicle */}
          <p className="flex items-center text-center capitalize italic">
            My Vehicle : {loadedData?.Vehicle_PlateNumber} (
            {loadedData?.Vehicle_type})
          </p>
          {/* driver availabilty */}
          <p className="flex items-center text-center capitalize italic">
            Vehicle Availabilty : {loadedData?.Availability}
          </p>
        </div>
      )}

      {/* announcement */}
      <div className="flex flex-col">
        {loadedData?.Vehicle_PlateNumber === null && (
          <p className="mx-3 mb-2 rounded-md bg-yellow-300 p-2 italic text-black">
            No vehicle assign.
          </p>
        )}
        {loadedData?.Status !== "verified" && (
          <p className="mx-3 mb-2 rounded-md bg-yellow-300 p-2 italic text-black">
            Licence not verified.
          </p>
        )}
        {loadedData?.Booking_Type === "book-now" && (
          <p className="mx-3 mb-2 rounded-md bg-yellow-300 p-2 italic text-black">
            Use Android app to manage orders.
          </p>
        )}
        {/* changers required */}
        <p className="mx-3 mb-2 rounded-md bg-yellow-300 p-2 italic text-black">
          Bank details not submited.
        </p>
      </div>

      {/* book now bookings */}
      {loadedData?.Booking_Type === "book-now" && (
        <div className="w-full px-3 py-5">
          <div className="pb-5 text-center text-xl font-medium md:text-2xl">
            Book Now Booking Request
          </div>
          <div className="hidden rounded-t-md bg-gray-400 px-4 py-2 ring-[0.5px] ring-gray-400 dark:bg-gray-700 dark:ring-gray-600 md:flex">
            <div className="w-full text-center">
              <span className="">Pick up</span>
            </div>
            <div className="w-full text-center">
              <span className="">Destination</span>
            </div>
          </div>
          {bookNowtableData === null && (
            <p className="mt-4 w-full text-center text-sm font-medium italic">
              No Data Found
            </p>
          )}
          {bookNowtableData !== null &&
            bookNowtableData?.map((data, i) => {
              return (
                <div
                  key={i}
                  className="text-md group my-2 flex flex-col justify-center space-y-2 rounded-sm bg-white ring-1 ring-gray-400 hover:bg-gray-200 dark:bg-slate-950 dark:ring-gray-600 dark:hover:bg-gray-800 md:my-0 md:flex-row md:items-center md:justify-between md:space-y-0"
                >
                  <p className="flex w-full truncate bg-slate-100 px-4 py-3 group-hover:bg-gray-200 dark:bg-slate-900 group-hover:dark:bg-gray-800">
                    <span className="block md:hidden">Pick up :&ensp;</span>
                    {addresses[data?.Origin_Place]}
                  </p>
                  <p className="flex w-full truncate px-4 py-2 capitalize">
                    <span className="block md:hidden">Destination :&ensp;</span>
                    {addresses[data?.Destination_Place]}
                  </p>
                </div>
              );
            })}
        </div>
      )}

      {/* rent out bookings */}
      {loadedData?.Booking_Type === "rent-out" && (
        <div className="w-full px-3 py-5">
          <div className="pb-5 text-center text-xl font-medium md:text-2xl">
            Assigned Rent Out Bookings
          </div>
          <div className="hidden rounded-t-md bg-gray-400 px-4 py-2 ring-[0.5px] ring-gray-400 dark:bg-gray-700 dark:ring-gray-600 md:flex">
            <div className="w-full text-center">
              <span className="">Start Date</span>
            </div>
            <div className="w-full text-center">
              <span className="">End Date</span>
            </div>
          </div>
          {rentOuttableData === null && (
            <p className="mt-4 w-full text-center text-sm font-medium italic">
              No Data Found
            </p>
          )}
          {rentOuttableData !== null &&
            rentOuttableData?.map((data, i) => {
              return (
                <div
                  key={i}
                  className="text-md group my-2 flex flex-col justify-center space-y-2 rounded-sm bg-white ring-1 ring-gray-400 hover:bg-gray-200 dark:bg-slate-950 dark:ring-gray-600 dark:hover:bg-gray-800 md:my-0 md:flex-row md:items-center md:justify-between md:space-y-0"
                >
                  <p className="flex w-full truncate bg-slate-100 px-4 py-3 group-hover:bg-gray-200 dark:bg-slate-900 group-hover:dark:bg-gray-800">
                    <span className="block md:hidden">Start Date :&ensp;</span>
                    {data?.Journey_Starting_Date}
                  </p>
                  <p className="flex w-full truncate px-4 py-2 capitalize">
                    <span className="block md:hidden">End Date :&ensp;</span>
                    {data?.Journey_Ending_Date}
                  </p>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};
export default BookiengRequest;
