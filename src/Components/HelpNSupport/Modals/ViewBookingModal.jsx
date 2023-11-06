import React from "react";
import { Modal, Button } from "flowbite-react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import ErrorData from "../../../Data/ErrorData";

// create sweet alert object
const Alert = withReactContent(Swal);

const ViewBookingModal = ({ isOpenModal, setIsOpenModal, details }) => {
  // custom allert function with sweet alert 2
  const setAlert = (icon, title, desc) => {
    return Alert.fire({
      icon: icon,
      title: title,
      text: desc,
    });
  };

  //cancel booking
  const changeBookingStatus = () => {
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
          .post("/manage_booking_status", formData)
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

  return (
    <Modal
      show={isOpenModal}
      onClose={() => setIsOpenModal(false)}
      size={"4xl"}
    >
      <Modal.Header>Booking details</Modal.Header>
      {detailsBody(details)}
      <Modal.Footer className="flex justify-end">
        {/* cancel booking */}
        <Button
          className="h-10 w-full rounded-md bg-red-600 dark:bg-red-500"
          onClick={() => {
            changeBookingStatus();
          }}
        >
          Cancel Booking
        </Button>

        {/* close*/}
        <Button
          className="h-10 w-full rounded-md bg-gray-400 dark:bg-gray-500"
          onClick={() => {
            setIsOpenModal(false);
          }}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

const detailsBody = (details) => {
  return (
    <Modal.Body className="no-scrollbar">
      <div className="space-y-3">
        <p className="font-Poppins capitalize">
          Booking Type : {details?.Booking_Type}
        </p>
        <p className="font-Poppins">Booking Time : {details?.Booking_Time}</p>
        <p className="font-Poppins capitalize">
          Booking Status : {details?.Booking_Status}
        </p>
        <p className="font-Poppins capitalize">
          Vehicle Type: {details.Vehicle_type}
        </p>
        <p className="font-Poppins">
          Vehicle Plate Number: {details.Vehicle_PlateNumber}
        </p>
        {/* start and end date for rent out */}
        {details?.Booking_Type === "rent-out" && (
          <p className="font-Poppins">
            Start Date : {details.Journey_Starting_Date}
          </p>
        )}
        {details?.Booking_Type === "rent-out" && (
          <p className="font-Poppins">
            End Date : {details.Journey_Ending_Date}
          </p>
        )}
        <p className="flex items-center font-Poppins">
          Driver : {details?.Driver ? details?.Driver : "Without Driver"}
        </p>
        <p className="flex items-center font-Poppins">
          Customer : {details?.Customer}
        </p>
      </div>
    </Modal.Body>
  );
};

export default ViewBookingModal;
