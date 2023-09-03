import React, { lazy, useCallback, useEffect, useState } from "react";
import axios from "axios";
const Paginations = lazy(() => import("../Paginations"));

const formData = new FormData();
formData.append("account_type", "vehicle_owner");

const TableVehicleOwner = () => {
  const [tableData, setTableData] = useState(null);
  const [pagesCount, setPagesCount] = useState(0);
  const [status, setStatus] = useState("verified");

  formData.append("status", status);

  // session management function
  const fetch = useCallback(() => {
    setTableData(null);
    axios
      .post("/load_accounts", formData)
      .then((response) => {
        console.log(response);
        if (response.data.length !== 0) {
          setTableData(response.data);
          setPagesCount(Math.ceil(response.data.length / 10));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // session function run in component mount
  useEffect(() => {
    fetch();
  }, [fetch, status]);

  return (
    <React.Fragment>
      <h1 className="w-full py-4 text-center font-Poppins text-xl font-medium md:text-2xl">
        Vehicle Owner Accounts
      </h1>
      <div className="relative flex justify-end py-6">
        <button
          onClick={() => {
            setStatus(status === "verified" ? "deactivated" : "verified");
          }}
          className="w-fit rounded-sm bg-sky-600 px-4 py-1 text-sm font-medium text-white duration-300 ease-in hover:bg-sky-700 dark:bg-cyan-600 dark:hover:bg-cyan-800"
        >
          {status === "verified" ? (
            <span>Deactivated</span>
          ) : (
            <span>Active</span>
          )}
          &ensp;Accounts
        </button>
      </div>
      <div className="hidden rounded-t-md bg-gray-400 px-4 py-2 ring-[0.5px] ring-gray-400 dark:bg-gray-700 dark:ring-gray-600 md:flex">
        <div className="w-full text-center">
          <span className="">First Name</span>
        </div>
        <div className="w-full text-center">
          <span className="">Address</span>
        </div>
        <div className="w-full text-center">
          <span className="">Income(Rs.)</span>
        </div>
        <div className="w-full text-center">
          <span className="">Email</span>
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
              <p className="flex w-full truncate bg-slate-100 px-4 py-2 group-hover:bg-gray-200 dark:bg-slate-900 group-hover:dark:bg-gray-800">
                <span className="block md:hidden">First Name :&ensp;</span>
                {data.Owner_firstname}
              </p>
              <p className="flex w-full truncate px-4 py-2">
                <span className="block md:hidden">Address :&ensp;</span>
                {data.Owner_address}
              </p>
              <p className="flex w-full truncate bg-slate-100 px-4 py-2 group-hover:bg-gray-200 dark:bg-slate-900 group-hover:dark:bg-gray-800">
                <span className="block md:hidden">Income : Rs.&ensp;</span>
                {data.Income}
              </p>
              <p className="flex w-full truncate px-4 py-2">
                <span className="block md:hidden">Email :&ensp;</span>
                {data.Email}
              </p>
              <div className="flex w-full justify-end truncate bg-slate-100 px-4 py-2 group-hover:bg-gray-200 dark:bg-slate-900 group-hover:dark:bg-gray-800 md:justify-center">
                <button className=" px-8 font-medium text-sky-500 duration-300 ease-in hover:text-sky-700">
                  View
                </button>
              </div>
            </div>
          );
        })}
      <Paginations totpages={pagesCount} />
    </React.Fragment>
  );
};
export default TableVehicleOwner;
