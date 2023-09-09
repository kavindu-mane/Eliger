import React from "react";
import { Modal, Button } from "flowbite-react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

// create sweet alert object
const Alert = withReactContent(Swal);

const ManageDriver = ({ isOpenModal, setIsOpenModal, details }) => {
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
                "Successfully Removed",
                "Successfully change the Account Status."
              );
            else {
              setAlert(
                "error",
                "Changes Failed",
                "Account Status change Failed.Try Again."
              );
            }
            setIsOpenModal(false);
          })
          .catch((error) => {
            setAlert(
              "error",
              "Changes Failed",
              "Account Status change Failed.Try Again."
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
      <Modal.Header>View my Driver</Modal.Header>
      <Modal.Body className="no-scrollbar">
        <div className="space-y-3">
          <p className="font-Poppins">
            Driver Name :{" "}
            {`${details?.Driver_firstname} ${details?.Driver_lastname}`}
          </p>
          <p className="font-Poppins">Phone : {details?.Driver_Tel}</p>
          <p className="font-Poppins">Email : {details?.Email}</p>
          <p className="font-Poppins">
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
          <p className="font-Poppins">
            Account Status :{" "}
            <span
              className={
                details?.Account_Status === "disabled"
                  ? "text-red-500"
                  : details?.Account_Status === "verified"
                  ? "text-green-500"
                  : "text-orange-400"
              }
            >
              {details?.Account_Status}
            </span>
          </p>
          <p className="font-Poppins">Address : {details?.Driver_address}</p>
          <p className="font-Poppins">
            Owner Name :{" "}
            {`${details?.Owner_firstname} ${details?.Owner_lastname}`}
          </p>
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

export default ManageDriver;
