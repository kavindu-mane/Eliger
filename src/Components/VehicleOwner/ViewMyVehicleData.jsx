import React from "react";

const ViewMyVehicleData = ({ Reg_No, Type }) => {
  return (
    <div className="text-md my-1 flex flex-col justify-center space-y-2 rounded-md  bg-slate-500 px-4 py-2 shadow-md  ring-[0.5px]  drop-shadow-xl md:flex-row md:items-center md:justify-between md:space-y-0">
      <p className="w-fit">{Reg_No}</p>
      <p className="w-fit">{Type}</p>
      <button className="w-fit rounded-md bg-sky-600 px-8 py-1 font-medium text-white duration-300 ease-in hover:bg-sky-700 dark:bg-sky-500 dark:hover:bg-sky-700">
        Remove
      </button>
    </div>
  );
};
export default ViewMyVehicleData;
