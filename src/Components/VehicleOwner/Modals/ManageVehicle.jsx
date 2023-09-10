import React, { useState, useCallback, useEffect } from "react";
import { Modal, Button, TextInput, Select } from "flowbite-react";
import { MdOutlineError } from "react-icons/md";
import ErrorData from "../../../Data/ErrorData";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

// create sweet alert object
const Alert = withReactContent(Swal);

const ManageVehicle = ({ isOpenModal, setIsOpenModal, details }) => {
  const [errorCode, setErrorCode] = useState(null);
  const [drivers, setDrivers] = useState(null);
  // custom alert function with sweet alert 2
  const setAlert = (icon, title, desc) => {
    return Alert.fire({
      icon: icon,
      title: title,
      text: desc,
    });
  };

  // error messages
  const errorContainer = (errCode) => {
    return (
      <p className="flex items-center gap-x-1 font-Poppins text-sm font-semibold text-red-500">
        <MdOutlineError /> {ErrorData[errCode]}
      </p>
    );
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

  // load driver data function
  const fetch = useCallback(async () => {
    setDrivers(null);
    const formData = new FormData();
    formData.append("type", "driver");
    formData.append("status", "verified");
    await axios
      .post("/load_owner_property", formData)
      .then((response) => {
        if (response.data.length !== 0) {
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
              defaultValue={details.Driver_Id}
            >
              {drivers?.map((data, i) => {
                return (
                  <option value={data?.Driver_Id} key={i}>
                    {data?.Driver_firstname} {data?.Driver_lastname}
                  </option>
                );
              })}
              {details?.Booking_Type === "rent-out" && (
                <option value={-99}>Without driver</option>
              )}
            </Select>
          </div>
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
          {/* rent-out location */}
          {details?.Booking_Type === "rent-out" && (
            <div className="flex items-center font-Poppins capitalize">
              Rent-Out Location :
              <TextInput
                id="nearest-city"
                name="nearest-city"
                defaultValue={details?.Current_Location}
                required
                type="text"
                className="inputs ms-2"
              />
              {/* error text */}
              {errorCode === 36 && errorContainer(errorCode)}
            </div>
          )}
        </div>
      </Modal.Body>
      <Modal.Footer className="flex justify-end">
        <Button
          className={"h-9 rounded-md bg-red-500 dark:bg-red-500"}
          onClick={() => {
            changeAccountStatus("delete");
          }}
        >
          Delete Vehicle
        </Button>
        <Button
          className={"h-9 rounded-md bg-green-500 dark:bg-emerald-600"}
          onClick={() => {
            changeAccountStatus("delete");
          }}
        >
          Save Changers
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ManageVehicle;
