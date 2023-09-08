import React, { useState } from "react";
import { Modal, Button } from "flowbite-react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

// create sweet alert object
const Alert = withReactContent(Swal);

const ManageDriverAccount = ({ isOpenModal, setIsOpenModal, details }) => {
  const [licenceZoom, setLicenceZoom] = useState(1);
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
      <Modal.Header>Manage Driver</Modal.Header>
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
          {/* licence */}
          <p className="font-Poppins">Licence :</p>
          <div className="relative">
            {/* image div */}
            <div className="overflow-auto">
              <img
                className={"pointer-events-none h-fit w-fit"}
                src={`${process.env.REACT_APP_BASE_URL}/uploads/${details?.Licence_File}`}
                alt="licence file"
                style={{ transform: `scale(${licenceZoom})` }}
              />
            </div>
            {/* zoom div */}
            <div className="absolute bottom-2 end-2 flex h-fit w-fit flex-col space-y-1 rounded-md bg-slate-900 text-white ring-1 ring-gray-400">
              <button
                className="h-fit px-3 font-Poppins text-lg font-bold"
                onClick={() => setLicenceZoom((prev) => prev + 0.1)}
              >
                +
              </button>
              <button
                disabled={licenceZoom === 1}
                className="h-fit rounded-b-md px-3 font-Poppins text-lg font-bold disabled:bg-gray-800"
                onClick={() => setLicenceZoom((prev) => prev - 0.1)}
              >
                -
              </button>
            </div>
          </div>
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

export default ManageDriverAccount;
