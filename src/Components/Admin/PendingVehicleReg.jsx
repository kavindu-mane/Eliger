import React, { lazy } from "react";
const Paginations = lazy(() => import("./Paginations"));

const PendingVehicleReg = () => {
  return (
    <React.Fragment>
      <div className="pb-5 text-center text-xl font-medium md:text-2xl">
        Pending Vehicle Registration Requests
      </div>
      <div className="hidden rounded-t-md bg-gray-400 px-4 py-2 ring-[0.5px] ring-gray-400 dark:bg-gray-700 dark:ring-gray-600 md:flex">
        <div className="w-full text-center">
          <span className="">Owner Name</span>
        </div>
        <div className="w-full text-center">
          <span className="">Vehicle Type</span>
        </div>
        <div className="w-full text-center">
          <span className="">Vehicle Plate_Number</span>
        </div>
        <div className="w-full text-center">
          <span className="">Passenger_Amount</span>
        </div>
        <div className="w-full text-center">
          <span className="">Option</span>
        </div>
      </div>
      {Array.from(Array(10).keys()).map((i) => {
        return (
          <div
            key={i}
            className="text-md group flex flex-col justify-center space-y-2 rounded-sm bg-white ring-[0.5px] ring-gray-400 hover:bg-gray-200 dark:bg-slate-950 dark:ring-gray-600 dark:hover:bg-gray-800 md:flex-row md:items-center md:justify-between md:space-y-0"
          >
            <p className="flex w-full truncate bg-slate-100 px-4 py-2.5  group-hover:bg-gray-200 dark:bg-slate-900 group-hover:dark:bg-gray-800">
              <span className="block md:hidden">Owner Name :&ensp;</span>
              Kavindu
            </p>
            <p className="flex w-full truncate px-4 py-2 ">
              <span className="block md:hidden">Vehicle Type :&ensp;</span>
              Buddhika
            </p>
            <p className="flex w-full truncate bg-slate-100 px-4 py-2.5  group-hover:bg-gray-200 dark:bg-slate-900 group-hover:dark:bg-gray-800">
              <span className="block md:hidden">
                Vehicle Plate_Number :&ensp;
              </span>
              CBE - 1537
            </p>
            <p className="flex w-full truncate px-4 py-2 ">
              <span className="block md:hidden">Passenger_Amount :&ensp;</span>
              4
            </p>
            <div className="flex w-full justify-end bg-slate-100 px-4 py-2 group-hover:bg-gray-200 dark:bg-slate-900 group-hover:dark:bg-gray-800 md:justify-center">
              <button className="rounded-md bg-sky-500 px-8 py-0.5 font-medium text-white duration-300 ease-in hover:bg-sky-700">
                View
              </button>
            </div>
          </div>
        );
      })}
      <Paginations />
    </React.Fragment>
  );
};
export default PendingVehicleReg;
