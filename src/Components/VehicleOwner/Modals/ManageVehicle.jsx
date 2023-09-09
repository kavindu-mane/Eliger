import React from "react";
import { Modal, Button } from "flowbite-react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

// create sweet alert object
const Alert = withReactContent(Swal);

const ManageVehicle = ({ isOpenModal, setIsOpenModal, details }) => {
  // custom alert function with sweet alert 2
  const setAlert = (icon, title, desc) => {
    return Alert.fire({
      icon: icon,
      title: title,
      text: desc,
    });
  };

  // change account status
  const changeAccountStatus = (status) => {
    const formData = new FormData();
    formData.append("status", status);
    formData.append("email", details.Email);
    Swal.fire({
      title: "Are you sure?",
      text: "Account status change affect to all user actions of this user",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, change it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axios
          .post("/disable_user", formData)
          .then((response) => {
            if (response.status === 200 && response.data === 200)
              setAlert(
                "success",
                "Successfully changed",
                "Successfully change the account status."
              );
            else {
              setAlert(
                "error",
                "Changes failed",
                "Account status change failed.try again."
              );
            }
            setIsOpenModal(false);
          })
          .catch((error) => {
            setAlert(
              "error",
              "Changes failed",
              "Account status change failed.try again."
            );
            setIsOpenModal(false);
          });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        setAlert("error", "Cancelled", "Account status didn't change.");
      }
    });
  };

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
            Driver :{" "}
            {details?.Driver_Id ? (
              details?.Driver_firstname + " " + details?.Driver_lastname
            ) : (
              <span>Without Driver</span>
            )}
          </p>
          <p className="font-Poppins">
            Plate Number : {details?.Vehicle_PlateNumber}
          </p>
          <p className="font-Poppins capitalize">
            Vehicle Type : {details?.Vehicle_type}
          </p>
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
          <p className="font-Poppins capitalize">
            Booking Type : {details?.Booking_Type}
          </p>
          <p className="font-Poppins capitalize">
            Availability : {details?.Availability}
          </p>
          <p className="font-Poppins capitalize">
            Price : Rs. {details?.Price}
          </p>
          <p className="font-Poppins capitalize">
            Passenger Amount : {details?.Passenger_amount}
          </p>
          {details?.Booking_Type === "rent-out" && (
            <p className="font-Poppins capitalize">
              Rent-Out Location : {details?.Current_Location}
            </p>
          )}
        </div>
      </Modal.Body>
      <Modal.Footer className="flex justify-end">
        <Button
          className={`h-9 rounded-md ${
            details?.Account_Status !== "disabled"
              ? "bg-red-500 dark:bg-red-400"
              : "bg-green-500 dark:bg-emerald-600"
          }`}
          onClick={() => {
            changeAccountStatus(
              details?.Account_Status === "disabled" ? "verified" : "disabled"
            );
          }}
        >
          {details?.Account_Status === "disabled" ? "Activate" : "Disabled"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ManageVehicle;
