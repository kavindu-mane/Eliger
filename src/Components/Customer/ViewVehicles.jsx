import React from "react";

const ViewVehicles = ({
  Vehicle_Type,
  Passenger_amount,
  rent_Out_Location,
  
}) => {
  return (
    <div className="text-md my-1 flex flex-col justify-center space-y-2 rounded-md bg-white px-4 py-2 shadow-md ring-[0.5px] ring-gray-400 drop-shadow-xl dark:bg-slate-950 dark:ring-gray-600 md:flex-row md:items-center md:justify-between md:space-y-0">
      <p className="w-fit">{Vehicle_Type}</p>
      <p className="w-fit">{Passenger_amount}</p>
      <p className="w-fit">{rent_Out_Location}</p>
      
      <button className="w-fit rounded-md bg-sky-600 px-8 py-1 font-medium text-white duration-300 ease-in hover:bg-sky-700 dark:bg-sky-500 dark:hover:bg-sky-700">
        View
      </button>
    </div>
  );
};
export default ViewVehicles;
