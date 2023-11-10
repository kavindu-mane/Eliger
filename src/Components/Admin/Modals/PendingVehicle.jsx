import React, { useState } from "react";
import { Modal, Button } from "flowbite-react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

// create sweet alert object
const Alert = withReactContent(Swal);

const PendingVehicle = ({ isOpenModal, setIsOpenModal, details }) => {
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
        if (response.status === 200 && response.data === 200)
          setAlert(
            "success",
            "Successfully Changed",
            "Successfully Changed the Vehicle Status."
          );
        else {
          setAlert(
            "error",
            "Changes Failed",
            "Vehicle status change is failed.Try Again."
          );
        }
      })
      .catch((error) => {
        setAlert(
          "error",
          "Changes Failed",
          "Vehicle status change is failed.Try Again."
        );
      });
  };

  const [ownershipZoom, setOwnershipZoom] = useState(1);
  const [insuranceZoom, setInsuranceZoom] = useState(1);
  return (
    <Modal
      show={isOpenModal}
      onClose={() => setIsOpenModal(false)}
      size={"4xl"}
    >
      <Modal.Header>Pending Vehicle Registration</Modal.Header>
      <Modal.Body className="no-scrollbar">
        <div className="space-y-3">
          <p className="font-Poppins">
            Owner Name :{" "}
            {`${details?.Owner_firstname} ${details?.Owner_lastname}`}
          </p>
          <p className="font-Poppins">Vehicle Type : {details?.Vehicle_type}</p>
          <p className="font-Poppins">Booking Type : {details?.Booking_Type}</p>
          <p className="font-Poppins">
            Plate No : {details?.Vehicle_PlateNumber}
          </p>
          <p className="font-Poppins">
            No. Of Passengers : {details?.Passenger_amount}
          </p>
          <p className="font-Poppins">Price : {details?.Price}</p>
          <p className="font-Poppins">Availability : {details?.Availability}</p>
          {/* Ownership Doc */}
          <p className="font-Poppins">Ownership Doc :</p>
          <div className="relative">
            {/* image div */}
            <div className="overflow-auto">
              <img
                className={"pointer-events-none h-fit w-full origin-top-left"}
                src={`${process.env.REACT_APP_BASE_URL}/uploads/${details?.Ownership_Doc}`}
                alt="Ownership-Doc"
                style={{ transform: `scale(${ownershipZoom})` }}
              />
            </div>
            {/* zoom div */}
            <div className="absolute bottom-2 end-2 flex h-fit w-fit flex-col space-y-1 rounded-md bg-slate-900 text-white ring-1 ring-gray-400">
              <button
                className="h-fit px-3 font-Poppins text-lg font-bold"
                onClick={() => setOwnershipZoom((prev) => prev + 0.1)}
              >
                +
              </button>
              <button
                disabled={ownershipZoom === 1}
                className="h-fit rounded-b-md px-3 font-Poppins text-lg font-bold disabled:bg-gray-800"
                onClick={() => setOwnershipZoom((prev) => prev - 0.1)}
              >
                -
              </button>
            </div>
          </div>

          {/* Insurance Doc */}
          <p className="font-Poppins">Insurance Doc :</p>
          <div className="relative">
            {/* image div */}
            <div className="overflow-auto">
              <img
                className={"pointer-events-none h-fit w-full origin-top-left"}
                src={`${process.env.REACT_APP_BASE_URL}/uploads/${details?.Insurance}`}
                alt="Insurance-Doc"
                style={{ transform: `scale(${insuranceZoom})` }}
              />
            </div>
            {/* zoom div */}
            <div className="absolute bottom-2 end-2 flex h-fit w-fit flex-col space-y-1 rounded-md bg-slate-900 text-white ring-1 ring-gray-400">
              <button
                className="h-fit px-3 font-Poppins text-lg font-bold"
                onClick={() => setInsuranceZoom((prev) => prev + 0.1)}
              >
                +
              </button>
              <button
                disabled={insuranceZoom === 1}
                className="h-fit rounded-b-md px-3 font-Poppins text-lg font-bold disabled:bg-gray-800"
                onClick={() => setInsuranceZoom((prev) => prev - 0.1)}
              >
                -
              </button>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer className="flex justify-end">
        <Button
          className="h-9 rounded-md bg-green-500 dark:bg-emerald-600"
          onClick={() => {
            changeVehicleStatus("verified");
            setIsOpenModal(false);
          }}
        >
          Approve
        </Button>
        <Button
          className="h-9 rounded-md bg-red-400 dark:bg-red-400"
          onClick={() => {
            changeVehicleStatus("rejected");
            setIsOpenModal(false);
          }}
        >
          Reject
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PendingVehicle;
