import React from "react";
import { Modal, Button } from "flowbite-react";
import { MdWhatsapp } from "react-icons/md";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import ErrorData from "../../../Data/ErrorData";
import { PDFDownloadLink } from "@react-pdf/renderer";
import Invoice from "../Invoice/Invoice";

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

  // get date difference
  const date1 = new Date(details.Journey_Starting_Date);
  const date2 = new Date(new Date().toJSON().slice(0, 10));
  const timwDiff = date2.getTime() - date1.getTime();
  const dateDiff = timwDiff / (1000 * 3600 * 24);

  //reject , approve , start , cancel  and end booking
  const changeBookingStatus = (status) => {
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
          .post("/manage_rentout_booking_status", formData)
          .then((response) => {
            if (response.data === 200 && response.status === 200) {
              setAlert(
                "success",
                "Success",
                "Booking status changed successfully"
              );
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

  //finish booking
  const finishBooking = (amount) => {
    const formData = new FormData();
    formData.append("booking", details.Booking_Id);
    formData.append("amount", amount);
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
          .post("/finish_booking", formData)
          .then((response) => {
            if (response.data === 200 && response.status === 200) {
              setAlert("success", "Success", "Booking finished successfully");
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
      {detailsBody(details, dateDiff)}
      <Modal.Footer className="flex justify-end">
        {/* approve and reject booking */}
        {details?.Booking_Status === "pending" && (
          <>
            <Button
              className="h-10 w-full rounded-md bg-red-600 dark:bg-red-500"
              onClick={() => {
                changeBookingStatus("rejected");
              }}
            >
              Reject Booking
            </Button>
            <Button
              className="h-10 w-full rounded-md bg-emerald-600 dark:bg-emerald-500"
              onClick={() => {
                changeBookingStatus("approved");
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
                changeBookingStatus("canceled");
              }}
            >
              Cancel Booking
            </Button>
            <Button
              className="h-10 w-full rounded-md bg-emerald-600 dark:bg-emerald-500"
              onClick={() => {
                changeBookingStatus("driving");
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
              finishBooking((details.Price * (dateDiff + 1)).toFixed(2));
            }}
          >
            Finish journey and paid
          </Button>
        )}

        {/* download invoice */}
        {details?.Booking_Status === "finished" && (
          <PDFDownloadLink
            document={<Invoice invoice={details} />}
            fileName={new Date().getTime() + ".pdf"}
            className="w-full"
          >
            {({ blob, url, loading, error }) => (
              <Button className="h-10 w-full rounded-md bg-emerald-600 dark:bg-emerald-500">
                {loading ? "Loading invoice..." : "Download invoice!"}
              </Button>
            )}
          </PDFDownloadLink>
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

const detailsBody = (details, dateDiff) => {
  return (
    <Modal.Body className="no-scrollbar">
      <div className="space-y-3">
        {details?.Booking_Status === "driving" && (
          <p className="font-Poppins text-lg font-medium capitalize text-emerald-600  dark:text-emerald-400 ">
            Current Income : Rs. {(details.Price * (dateDiff + 1)).toFixed(2)}
          </p>
        )}
        <p className="font-Poppins capitalize">
          Booking Type : {details?.Booking_Type.replace("-", " ")}
        </p>
        <p className="font-Poppins">Booking Time : {details?.Booking_Time}</p>
        <p className="font-Poppins capitalize">
          Booking Status : {details?.Booking_Status}
        </p>
        <p className="font-Poppins">
          Amount (Rs) : {details?.Amount ?? "No payment"}
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
