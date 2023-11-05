import React, { useState, useCallback, useEffect, useRef } from "react";
import { Button, TextInput, Select, Modal } from "flowbite-react";
import { CgSpinnerTwoAlt } from "react-icons/cg";
import { MdOutlineError } from "react-icons/md";
import ErrorData from "../../../Data/ErrorData";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import districtArray from "../../../Data/DistrictArray";
import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";

// create sweet alert object
const Alert = withReactContent(Swal);

// custom alert function with sweet alert 2
const setAlert = (icon, title, desc) => {
  return Alert.fire({
    icon: icon,
    title: title,
    text: desc,
  });
};

// google map libraries
const libs = ["places"];

const ManageVehicle = ({ isOpenModal, setIsOpenModal, details }) => {
  const [errorCode, setErrorCode] = useState(null);
  const [drivers, setDrivers] = useState(null);
  const [rentLocation, setRentLocation] = useState(null);
  const [driver, setDriver] = useState(details?.Driver_Id);
  const editRef = useRef();

  // load map api
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY,
    libraries: libs,
  });

  // error messages
  const errorContainer = (errCode) => {
    return (
      <p className="flex items-center gap-x-1 font-Poppins text-sm font-semibold text-red-500">
        <MdOutlineError /> {ErrorData[errCode]}
      </p>
    );
  };

  // submit edits
  const onHandleSubmitEdits = (e) => {
    const formData = new FormData(e);
    formData.append("vehicle-id", details?.Vehicle_Id);
    if (details?.Booking_Type === "rent-out") {
      formData.append(
        "lat",
        rentLocation?.split(",")[0] ?? details?.Current_Lat
      );
      formData.append(
        "long",
        rentLocation?.split(",")[1] ?? details?.Current_Long
      );
    }
    Swal.fire({
      title: "Are you sure?",
      text: "Vehicle data update affect to all next bookings.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, change it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axios
          .post("/update_vehicle", formData)
          .then((response) => {
            if (response.status === 200) {
              if (response.data === 200) {
                setAlert(
                  "success",
                  "Successfully changed",
                  "Successfully updated the vehicle."
                );
              } else if (response.data === 500) {
                setAlert(
                  "error",
                  "Update failed",
                  "Vehicle details update failed.try again."
                );
              }
              setErrorCode(response.data);
            } else {
              setAlert(
                "error",
                "Update failed",
                "Vehicle details update failed.try again."
              );
            }
            setIsOpenModal(false);
          })
          .catch((error) => {
            setAlert(
              "error",
              "Update failed",
              "Vehicle details update failed.try again."
            );
            setIsOpenModal(false);
          });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        setAlert("error", "Cancelled", "Vehicle details didn't change.");
      }
    });
  };

  // load driver data function
  const fetch = useCallback(async () => {
    setDrivers(null);
    await axios
      .post("/load_available_drivers")
      .then((response) => {
        if (response?.data?.length !== 0 && response?.data !== 500) {
          setDrivers(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // load data function run in component mount
  useEffect(() => {
    fetch();
  }, [fetch]);

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
      <Modal.Header>Manage Vehicle</Modal.Header>
      <Modal.Body className="no-scrollbar">
        <div className="space-y-3">
          <p className="font-Poppins">
            Plate Number : {details?.Vehicle_PlateNumber}
          </p>
          <p className="font-Poppins capitalize">
            Vehicle Type : {details?.Vehicle_type}
          </p>
          <p className="font-Poppins capitalize">
            Booking Type : {details?.Booking_Type}
          </p>
          <p className="font-Poppins capitalize">
            Passenger Amount : {details?.Passenger_amount}
          </p>
          {/* document status */}
          <p className="font-Poppins capitalize">
            Document Status :{" "}
            <span
              className={
                details?.Status === "rejected"
                  ? "text-red-500"
                  : details?.Status === "verified"
                  ? "text-green-500"
                  : "text-orange-400"
              }
            >
              {details?.Status}
            </span>
          </p>
          {/* availability check */}
          {details?.Booking_Type === "book-now" ||
            (details?.Status !== "verified" && (
              <p className="font-Poppins capitalize">
                Availability :{" "}
                <span
                  className={
                    details?.Availability === "available"
                      ? "text-green-500"
                      : "text-orange-400"
                  }
                >
                  {details?.Availability}
                </span>
              </p>
            ))}
          {/* form with edit fields */}
          <form ref={editRef} className="space-y-1">
            {details?.Booking_Type === "rent-out" &&
              details?.Status === "verified" && (
                <div className="flex items-center font-Poppins">
                  Availability :{" "}
                  <Select
                    id="availability"
                    name="availability"
                    required
                    className="inputs ms-2"
                    defaultValue={details.Availability}
                  >
                    <option value={"available"}>Available</option>
                    <option value={"not available"}>Not Available</option>
                  </Select>
                </div>
              )}
            {/* driver */}
            <div className="flex items-center font-Poppins">
              Driver :
              <Select
                id="assign-driver"
                name="assign-driver"
                required
                className="inputs ms-2"
                value={driver ?? -99}
                onChange={(e) => setDriver(e.target.value)}
              >
                {drivers &&
                  drivers?.map((data, i) => {
                    return (
                      <option value={data?.Driver_Id} key={i}>
                        {data?.Driver_firstname} {data?.Driver_lastname}
                      </option>
                    );
                  })}

                {details?.Driver_Id && (
                  <option value={details?.Driver_Id}>
                    {details?.Driver_firstname} {details?.Driver_lastname}
                  </option>
                )}
                {details?.Booking_Type === "rent-out" && (
                  <option value={-99}>Without driver</option>
                )}
              </Select>
            </div>
            {/* driver error text */}
            {errorCode === 30 && errorContainer(errorCode)}
            {/* price */}
            <div className="flex items-center font-Poppins capitalize">
              Price per {details?.Booking_Type === "rent-out" ? "Day " : "Km "}
              (LKR) :
              <div className="ms-2 w-max">
                <TextInput
                  id="price"
                  name="price"
                  defaultValue={details?.Price}
                  required
                  type="number"
                  min={0}
                  step={0.01}
                  className="inputs"
                />
                {/* error text */}
                {[29, 35].includes(errorCode) && errorContainer(errorCode)}
              </div>
            </div>
            {/* district */}
            {details?.Booking_Type === "rent-out" && (
              <div className="flex items-center font-Poppins capitalize">
                District :
                <Select
                  id="district"
                  name="district"
                  required
                  className="inputs ms-2"
                  defaultValue={details?.District}
                >
                  {districtArray.map((district, i) => {
                    return (
                      <option key={i} value={district}>
                        {district}
                      </option>
                    );
                  })}
                </Select>
                {/* error text */}
                {errorCode === 36 && errorContainer(errorCode)}
              </div>
            )}
            {/* map - rent-out location */}
            {details?.Booking_Type === "rent-out" && (
              <div className="mb-8 h-[50vh] w-full">
                <p className="flex items-center font-Poppins capitalize">
                  Rent-Out Location
                </p>
                <GoogleMap
                  center={{
                    lat: parseFloat(details?.Current_Lat),
                    lng: parseFloat(details?.Current_Long),
                  }}
                  zoom={12}
                  mapContainerClassName="w-full h-full rounded-md"
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
                    draggable={true}
                    onDragEnd={(event) =>
                      setRentLocation(event?.latLng?.toUrlValue())
                    }
                  />
                </GoogleMap>
                {/* error text */}
                {errorCode === 46 && errorContainer(errorCode)}
              </div>
            )}
          </form>
        </div>
      </Modal.Body>
      <Modal.Footer className="flex justify-end">
        <Button
          className={"h-9 rounded-md bg-gray-500 dark:bg-gray-500"}
          onClick={() => {
            setIsOpenModal(false);
          }}
        >
          Close
        </Button>
        <Button
          className={"h-9 rounded-md bg-green-500 dark:bg-emerald-600"}
          onClick={() => {
            onHandleSubmitEdits(editRef.current);
          }}
        >
          Save Changers
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ManageVehicle;
