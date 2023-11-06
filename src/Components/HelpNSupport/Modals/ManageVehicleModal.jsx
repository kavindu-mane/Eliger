import React from "react";
import { Button, Modal } from "flowbite-react";
import { CgSpinnerTwoAlt } from "react-icons/cg";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";

// create sweet alert object
const Alert = withReactContent(Swal);

// google map libraries
const libs = ["places"];

const ManageVehicleModal = ({ isOpenModal, setIsOpenModal, details }) => {
  // load map api
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY,
    libraries: libs,
  });

  // custom alert function with sweet alert 2
  const setAlert = (icon, title, desc) => {
    return Alert.fire({
      icon: icon,
      title: title,
      text: desc,
    });
  };

  // change vehicle status
  const changeVehicleStatus = async (status) => {
    const formData = new FormData();
    formData.append("status", status);
    formData.append("id", details.Vehicle_Id);
    formData.append("type", "vehicle");
    await axios
      .post("/document_validate", formData)
      .then((response) => {
        if (response.status === 200 && response.data === 200) {
          setAlert(
            "success",
            "Successfully Changed",
            "Successfully changed the Vehicle Status."
          );
          setIsOpenModal(false);
        } else {
          setAlert(
            "error",
            "Changes Failed",
            "Change in Vehicle Status Failed.Try Again."
          );
        }
      })
      .catch((error) => {
        setAlert(
          "error",
          "Changes Failed",
          "Change in Vehicle Status Failed.Try Again."
        );
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
            Owner : {details?.Owner}
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
          <p className="font-Poppins capitalize">
            Price per {details?.Booking_Type === "rent-out" ? "Day " : "Km "}
            (LKR) :{details?.Price}
          </p>
          {/* status */}
          <p className="font-Poppins capitalize">
            Status :{" "}
            <span
              className={
                ["rejected", "disabled"].includes(details?.Status)
                  ? "text-red-500"
                  : details?.Status === "verified"
                  ? "text-green-500"
                  : "text-orange-400"
              }
            >
              {details?.Status}
            </span>
          </p>
          {details?.Booking_Type === "rent-out" && (
            <p className="font-Poppins capitalize">
              District : {details?.District}
            </p>
          )}

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
                />
              </GoogleMap>
            </div>
          )}
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

        {["verified", "disabled"].includes(details?.Status) && (
          <Button
            className={`h-9 rounded-md ${
              details?.Status !== "disabled"
                ? "bg-red-500 dark:bg-red-400"
                : "bg-green-500 dark:bg-emerald-600"
            }`}
            onClick={() => {
              changeVehicleStatus(
                details?.Status === "disabled" ? "verified" : "disabled"
              );
            }}
          >
            {details?.Status === "disabled" ? "Activate" : "Disabled"}
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
};

export default ManageVehicleModal;
