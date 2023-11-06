import React, { lazy, useCallback, useEffect, useState } from "react";
import axios from "axios";
import { Button } from "flowbite-react";
import Swal from "sweetalert2";
import ErrorData from "../../Data/ErrorData";
import withReactContent from "sweetalert2-react-content";
const ManageVehicleModal = lazy(() => import("./Modals/ManageVehicleModal"));
const Paginations = lazy(() => import("../Common/Paginations"));

// create sweet alert object
const Alert = withReactContent(Swal);

const ManageVehicle = () => {
  const [tableData, setTableData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [pagesCount, setPagesCount] = useState(0);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [vehicleDetails, setVehicleDetails] = useState(null);

  // custom allert function with sweet alert 2
  const setAlert = (icon, title, desc) => {
    return Alert.fire({
      icon: icon,
      title: title,
      text: desc,
    });
  };

  // session management function
  const fetch = useCallback(() => {
    setTableData(null);
    const formData = new FormData();
    formData.append("offset", 15 * (currentPage - 1));
    axios
      .post("/load_vehicles", formData)
      .then((response) => {
        if (response?.data?.length !== 0 && response?.data !== 500) {
          setTableData(response.data);
          setPagesCount(Math.ceil(response?.data[0]?.total_rows / 15));
        }
      })
      .catch((error) => {
        setAlert("error", "Error occured", ErrorData["500"]);
      });
  }, [currentPage]);

  // session function run in component mount
  useEffect(() => {
    if (!isOpenModal) fetch();
  }, [fetch, currentPage , isOpenModal]);

  return (
    <React.Fragment>
      {isOpenModal && (
        <ManageVehicleModal
          isOpenModal={isOpenModal}
          setIsOpenModal={setIsOpenModal}
          details={vehicleDetails}
        />
      )}
      <div className="pb-5 text-center text-xl font-medium md:text-2xl">
        Manage Vehicles
      </div>
      <div className="hidden rounded-t-md bg-gray-400 px-4 py-2 ring-[0.5px] ring-gray-400 dark:bg-gray-700 dark:ring-gray-600 md:flex">
        <div className="w-full text-center">
          <span className="">Vehicle Type</span>
        </div>
        <div className="w-full text-center">
          <span className="">Vehicle Plate Number </span>
        </div>
        <div className="w-full text-center">
          <span className=""> Booking Type </span>
        </div>

        <div className="w-full text-center">
          <span className="">Option</span>
        </div>
      </div>
      {tableData === null && (
        <p className="mt-4 w-full text-center text-sm font-medium italic">
          No Data Found
        </p>
      )}
      {tableData !== null &&
        tableData.map((data, i) => {
          return (
            <div
              key={i}
              className="text-md group flex flex-col justify-center space-y-2 rounded-sm bg-white ring-1 ring-gray-400 hover:bg-gray-200 dark:bg-slate-950 dark:ring-gray-600 dark:hover:bg-gray-800 md:flex-row md:items-center md:justify-between md:space-y-0"
            >
              <p className="flex w-full truncate bg-slate-100 px-4 py-3  group-hover:bg-gray-200 dark:bg-slate-900 group-hover:dark:bg-gray-800">
                <span className="block md:hidden">Vehicle Type :&ensp;</span>
                <span className="capitalize">{data?.Vehicle_type}</span>
              </p>
              <p className="flex w-full truncate px-4 py-2 ">
                <span className="block md:hidden">
                  Vehicle Plate Number :&ensp;
                </span>
                {data?.Vehicle_PlateNumber}
              </p>
              <p className="flex w-full truncate bg-slate-100 px-4 py-3  group-hover:bg-gray-200 dark:bg-slate-900 group-hover:dark:bg-gray-800">
                <span className="block md:hidden">Booking Type :&ensp;</span>
                <span className="capitalize">{data?.Booking_Type}</span>
              </p>
              <div className="flex w-full justify-end px-4 py-2.5 md:justify-center">
                <Button
                  className="h-7 rounded-md px-4"
                  onClick={() => {
                    setVehicleDetails(data);
                    setIsOpenModal(true);
                  }}
                >
                  View
                </Button>
              </div>
            </div>
          );
        })}
      <Paginations
        totpages={pagesCount}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </React.Fragment>
  );
};
export default ManageVehicle;
