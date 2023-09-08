import React, { lazy, useEffect, useState } from "react";
const Paginations = lazy(() => import("../Common/Paginations"));

const ViewOldPayments = () => {
  const [tableData] = useState(null);
  const [pagesCount] = useState(0);

  useEffect(() => {}, []);

  return (
    <div className="flex h-full w-full flex-col">
      <h1 className="w-full py-4 text-center font-Poppins text-xl font-medium md:text-2xl">
        My Payments
      </h1>

      <div className="mt-5 hidden w-full rounded-t-md bg-gray-400 px-4 py-2 ring-[0.5px] ring-gray-400 dark:bg-gray-700 dark:ring-gray-600 md:flex">
        <div className="w-full text-center">
          <span className="">Date</span>
        </div>
        <div className="w-full text-center">
          <span className="">Booking Type</span>
        </div>
        <div className="w-full text-center">
          <span className="">Payment Method</span>
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
              <p className="flex w-full truncate bg-slate-100  px-4 py-2.5  group-hover:bg-gray-200 dark:bg-slate-900 group-hover:dark:bg-gray-800">
                <span className="block md:hidden">Booking Type :&ensp;</span>
                {data.Type}
              </p>
              <p className="flex w-full truncate px-4 py-2">
                <span className="block md:hidden">Origin pLace :&ensp;</span>
                {data.Origin_place}
              </p>
              <p className="flex w-full truncate bg-slate-100 px-4 py-2 group-hover:bg-gray-200 dark:bg-slate-900 group-hover:dark:bg-gray-800">
                <span className="block md:hidden">
                  Destination Place:&ensp;
                </span>
                {data.Destination_place}
              </p>
              <div className="flex w-full justify-end truncate bg-slate-100 px-4 py-2 group-hover:bg-gray-200 dark:bg-slate-900 group-hover:dark:bg-gray-800 md:justify-center">
                <button className=" px-8 font-medium text-sky-500 duration-300 ease-in hover:text-sky-700">
                  View Summary
                </button>
              </div>
            </div>
          );
        })}
      <Paginations totpages={pagesCount} />
    </div>
  );
};
export default ViewOldPayments;
