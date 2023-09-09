import React, { lazy, useState, useEffect, useCallback } from "react";
import axios from "axios";
import { Button } from "flowbite-react";
const Paginations = lazy(() => import("../Common/Paginations"));

const ViewMyVehicles = () => {
  const [tableData, setTableData] = useState(null);
  const [pagesCount, setPagesCount] = useState(0);

  // load data function
  const fetch = useCallback(async () => {
    setTableData(null);
    const formData = new FormData();
    formData.append("type", "vehicle");
    await axios
      .post("/load_owner_property", formData)
      .then((response) => {
        if (response.data.length !== 0) {
          setTableData(response.data);
          setPagesCount(Math.ceil(response.data.length / 15));
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
    <div className="flex h-full w-full flex-col">
      <div className="pb-5 text-center text-xl font-medium md:text-2xl">
        View My Vehicles
      </div>
      <div className="hidden rounded-t-md bg-gray-400 px-4 py-2 ring-[0.5px] ring-gray-400 dark:bg-gray-700 dark:ring-gray-600 md:flex">
        <div className="w-full text-center">
          <span className="">Vehicle Plate Number</span>
        </div>
        <div className="w-full text-center">
          <span className="">Document Status</span>
        </div>
        <div className="w-full text-center">
          <span className="">Availability</span>
        </div>
        <div className="w-full text-center">
          <span className="">Driver</span>
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
              className="text-md group flex flex-col justify-center space-y-2 rounded-sm bg-white ring-[0.5px] ring-gray-400 hover:bg-gray-200 dark:bg-slate-950 dark:ring-gray-600 dark:hover:bg-gray-800 md:flex-row md:items-center md:justify-between md:space-y-0"
            >
              <p className="flex w-full truncate bg-slate-100 px-4 py-2.5  group-hover:bg-gray-200 dark:bg-slate-900 group-hover:dark:bg-gray-800">
                <span className="block md:hidden">
                  Vehicle Plate Number :&ensp;
                </span>
                {data?.Vehicle_PlateNumber}
              </p>
              <p className="flex w-full truncate px-4 py-2 ">
                <span className="block md:hidden">Document Status :&ensp;</span>
                {data?.Status}
              </p>
              <p className="flex w-full truncate px-4 py-2 ">
                <span className="block md:hidden">Availability :&ensp;</span>
                {data?.Availability}
              </p>
              <p className="flex w-full truncate px-4 py-2 ">
                <span className="block md:hidden">Driver :&ensp;</span>
                {data?.Driver_firstname}
              </p>
              <div className="flex w-full justify-end bg-slate-100 px-4 py-2 group-hover:bg-gray-200 dark:bg-slate-900 group-hover:dark:bg-gray-800 md:justify-center">
                <Button
                  className="h-7 rounded-md px-4"
                  // onClick={() => {
                  //   setDriverDetails(data);
                  //   setIsOpenModal(true);
                  // }}
                >
                  View
                </Button>
              </div>
            </div>
          );
        })}
      <Paginations totpages={pagesCount} />
    </div>
  );
};
export default ViewMyVehicles;
