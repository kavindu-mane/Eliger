import React from "react";
import { Modal, Button } from "flowbite-react";
import { MdWhatsapp } from "react-icons/md";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import ErrorData from "../../../Data/ErrorData";

// create sweet alert object
const Alert = withReactContent(Swal);

const MyBooking = ({ isOpenModal, setIsOpenModal, details }) => {
  // custom allert function with sweet alert 2
  const setAlert = (icon, title, desc) => {
    return Alert.fire({
      icon: icon,
      title: title,
      text: desc,
    });
  };

  //cancel and delete bookinh
  const approveAndReject = (status) => {
    const formData = new FormData();
    formData.append("booking", details.Booking_Id);
    formData.append("status", status);
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
          .post("/cancel_booking", formData)
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
        {/* approve and reject booking */}
        {details?.Booking_Status === "pending" && (
          <>
            <Button
              className="h-10 w-full rounded-md bg-red-600 dark:bg-red-500"
              onClick={() => {
                approveAndReject("rejected");
              }}
            >
              Reject Booking
            </Button>
            <Button
              className="h-10 w-full rounded-md bg-emerald-600 dark:bg-emerald-500"
              onClick={() => {
                approveAndReject("approved");
              }}
            >
              Approve Booking
            </Button>
          </>
        )}
        {/* cancel booking and start journey*/}
        {details?.Booking_Status === "approved" && (
          <>
            <Button
              className="h-10 w-full rounded-md bg-red-600 dark:bg-red-500"
              onClick={() => {
                // approveAndReject("rejected");
              }}
            >
              Cancel Booking
            </Button>
            <Button
              className="h-10 w-full rounded-md bg-emerald-600 dark:bg-emerald-500"
              onClick={() => {
                // approveAndReject("approved");
                window.print();
              }}
            >
              Start Journey
            </Button>
          </>
        )}
        {/* end journey */}
        {details?.Booking_Status === "driving" && (
          <Button
            className="h-10 w-full rounded-md bg-emerald-600 dark:bg-emerald-500"
            onClick={() => {
              // approveAndReject("rejected");
            }}
          >
            End Journey
          </Button>
        )}
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
        {/* start and end date for rent out */}
        <p className="font-Poppins">
          Start Date : {details.Journey_Starting_Date}
        </p>
        <p className="font-Poppins">End Date : {details.Journey_Ending_Date}</p>

        <p className="flex items-center font-Poppins">
          Driver :{" "}
          {details?.Driver_firstname
            ? `${details?.Driver_firstname} ${details?.Driver_lastname}`
            : "Without Driver"}
        </p>
        <p className="flex items-center font-Poppins">
          Customer :{" "}
          {`${details?.Customer_firstname} ${details?.Customer_lastname}`}
          {details?.Customer_Tel && (
            <a
              href={"https://wa.me/" + details?.Customer_Tel}
              className="ms-3 flex items-center rounded-lg bg-emerald-500 px-3 py-1 text-white"
              target="_blank"
              rel="noreferrer"
            >
              <MdWhatsapp className="me-1 text-lg" /> Chat
            </a>
          )}
        </p>
      </div>
    </Modal.Body>
  );
};

export default MyBooking;
