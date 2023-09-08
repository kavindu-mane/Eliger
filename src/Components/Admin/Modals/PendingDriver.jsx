import React, { useState } from "react";
import { Modal, Button } from "flowbite-react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

// create sweet alert object
const Alert = withReactContent(Swal);

const PendingDriver = ({ isOpenModal, setIsOpenModal, details }) => {
  // custom allert function with sweet alert 2
  const setAlert = (icon, title, desc) => {
    return Alert.fire({
      icon: icon,
      title: title,
      text: desc,
    });
  };

  // change driver status
  const changeDriverStatus = async (status) => {
    const formData = new FormData();
    formData.append("status", status);
    formData.append("id", details.Driver_Id);
    await axios
      .post("/driver_validate", formData)
      .then((response) => {
        if (response.status === 200 && response.data === 200)
          setAlert(
            "success",
            "Successfully changed",
            "Successfully change the driver status."
          );
        else {
          setAlert(
            "error",
            "Changes failed",
            "Driver status change failed.try again."
          );
        }
      })
      .catch((error) => {
        setAlert(
          "error",
          "Changes failed",
          "Driver status change failed.try again."
        );
      });
  };

  const [licenceZoom, setLicenceZoom] = useState(1);
  return (
    <Modal
      show={isOpenModal}
      onClose={() => setIsOpenModal(false)}
      size={"4xl"}
    >
      <Modal.Header>Pending Driver Registration</Modal.Header>
      <Modal.Body>
        <div className="space-y-3">
          <p className="font-Poppins">
            Driver Name :{" "}
            {`${details?.Driver_firstname} ${details?.Driver_lastname}`}
          </p>
          <p className="font-Poppins">Phone : {details?.Driver_Tel}</p>
          <p className="font-Poppins">Email : {details?.Email}</p>
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
          className="h-9 rounded-md bg-green-500 dark:bg-emerald-600"
          onClick={() => {
            changeDriverStatus("verified");
            setIsOpenModal(false);
          }}
        >
          Approve
        </Button>
        <Button
          className="h-9 rounded-md bg-red-400 dark:bg-red-400"
          onClick={() => {
            changeDriverStatus("rejected");
            setIsOpenModal(false);
          }}
        >
          Reject
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PendingDriver;
