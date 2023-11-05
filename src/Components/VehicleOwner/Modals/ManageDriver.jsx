import React from "react";
import { Modal, Button } from "flowbite-react";

const ManageDriver = ({ isOpenModal, setIsOpenModal, details }) => {
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
        </div>
      </Modal.Body>
      <Modal.Footer className="flex justify-end">
        <Button
          className={"h-9 rounded-md bg-gray-500 dark:bg-gray-400"}
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

export default ManageDriver;
