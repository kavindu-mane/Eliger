import React, { lazy, useState, useEffect, useCallback } from "react";
import axios from "axios";
import { Button } from "flowbite-react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import ErrorData from "../../Data/ErrorData";
const ManageDriver = lazy(() => import("./Modals/ManageDriver"));
const Paginations = lazy(() => import("../Common/Paginations"));

// create sweet alert object
const Alert = withReactContent(Swal);

const ViewMyDrivers = () => {
  const [tableData, setTableData] = useState(null);
  const [pagesCount, setPagesCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [driverDetails, setDriverDetails] = useState(null);

  // custom allert function with sweet alert 2
  const setAlert = (icon, title, desc) => {
    return Alert.fire({
      icon: icon,
      title: title,
      text: desc,
    });
  };

  // load data function
  const fetch = useCallback(async () => {
    setTableData(null);
    const formData = new FormData();
    formData.append("type", "driver");
    formData.append("offset", 15 * (currentPage - 1));
    await axios
      .post("/load_owner_property", formData)
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

  // load data function run in component mount
  useEffect(() => {
    if (!isOpenModal) fetch();
  }, [fetch, isOpenModal, currentPage]);

  return (
    <div className="flex h-full w-full flex-col">
      {isOpenModal && (
        <ManageDriver
          isOpenModal={isOpenModal}
          setIsOpenModal={setIsOpenModal}
          details={driverDetails}
        />
      )}
      <div className="pb-5 text-center text-xl font-medium md:text-2xl">
        View My Drivers
      </div>
      <div className="hidden rounded-t-md bg-gray-400 px-4 py-2 ring-[0.5px] ring-gray-400 dark:bg-gray-700 dark:ring-gray-600 md:flex">
        <div className="w-full text-center">
          <span className="">Driver Name</span>
        </div>
        <div className="w-full text-center">
          <span className="">Email</span>
        </div>
        <div className="w-full text-center">
          <span className="">Document Status</span>
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
              className="text-md group my-2 flex flex-col justify-center space-y-2 rounded-sm bg-white ring-1 ring-gray-400 hover:bg-gray-200 dark:bg-slate-950 dark:ring-gray-600 dark:hover:bg-gray-800 md:my-0 md:flex-row md:items-center md:justify-between md:space-y-0"
            >
              <p className="flex w-full truncate px-4 py-2">
                <span className="block md:hidden">Driver Name :&ensp;</span>
                {data.Driver_firstname} {data.Driver_lastname}
              </p>
              <p className="flex w-full truncate bg-slate-100 px-4 py-3 group-hover:bg-gray-200 dark:bg-slate-900 group-hover:dark:bg-gray-800">
                <span className="block md:hidden">Email :&ensp;</span>
                {data?.Email}
              </p>
              <p className="flex w-full truncate px-4 py-2 capitalize">
                <span className="block md:hidden">Documeny Status :&ensp;</span>
                <span
                  className={
                    data?.Status === "rejected"
                      ? "text-red-500"
                      : data?.Status === "verified"
                      ? "text-green-500"
                      : "text-orange-400"
                  }
                >
                  {data?.Status}
                </span>
              </p>
              <div className="flex w-full justify-end bg-slate-100 px-4 py-2.5 group-hover:bg-gray-200 dark:bg-slate-900 group-hover:dark:bg-gray-800 md:justify-center">
                <Button
                  className="h-7 rounded-md px-4"
                  onClick={() => {
                    setDriverDetails(data);
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
    </div>
  );
};
export default ViewMyDrivers;
