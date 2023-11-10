import React, { useState } from "react";
import { Modal, Button } from "flowbite-react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

// create sweet alert object
const Alert = withReactContent(Swal);

const NewBankDetails = ({ isOpenModal, setIsOpenModal, details }) => {
  const [licenceZoom, setLicenceZoom] = useState(1);

  // custom allert function with sweet alert 2
  const setAlert = (icon, title, desc) => {
    return Alert.fire({
      icon: icon,
      title: title,
      text: desc,
    });
  };

  // change bank details status
  const changeBankDetailsStatus = async (status) => {
    const formData = new FormData();
    formData.append("status", status);
    formData.append("id", details.Email);
    formData.append("type", "bank");
    await axios
      .post("/document_validate", formData)
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
            "Change in Driver Status Failed.Try Again."
          );
        }
      })
      .catch((error) => {
        setAlert(
          "error",
          "Changes failed",
          "Change in Driver Status Failed.Try Again."
        );
      });
  };

  return (
    <Modal
      show={isOpenModal}
      onClose={() => setIsOpenModal(false)}
      size={"4xl"}
    >
      <Modal.Header>New Driver Registration</Modal.Header>
      <Modal.Body className="no-scrollbar">
        <div className="space-y-3">
          <p className="font-Poppins">
            Beneficiary Name : {details?.Beneficiary_Name}
          </p>
          <p className="font-Poppins">Bank : {details?.Bank}</p>
          <p className="font-Poppins">Branch Code : {details?.Branch}</p>
          <p className="font-Poppins">Account Number : {details?.Acc_Number}</p>
          {/* statement */}
          <p className="font-Poppins">Statement :</p>
          <div className="relative">
            {/* image div */}
            <div className="overflow-auto">
              <img
                className={"pointer-events-none h-fit w-full origin-top-left"}
                src={`${process.env.REACT_APP_BASE_URL}/uploads/${details?.Statement_File}`}
                alt="statement file"
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
            changeBankDetailsStatus("verified");
            setIsOpenModal(false);
          }}
        >
          Approve
        </Button>
        <Button
          className="h-9 rounded-md bg-red-500 dark:bg-red-500"
          onClick={() => {
            changeBankDetailsStatus("rejected");
            setIsOpenModal(false);
          }}
        >
          Reject
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default NewBankDetails;
