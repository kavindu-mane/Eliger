import React from "react";

const View = ({
  Type,
  Origin_Place,
  Destination_Place,
    Booking_Status,
}) => {
  return (
    
    <div className="text-md my-1 flex flex-col justify-center space-y-2 rounded-md bg-white px-4 py-2 shadow-md ring-[0.5px] ring-gray-400 drop-shadow-xl dark:bg-slate-950 dark:ring-gray-600 md:flex-row md:items-center md:justify-between md:space-y-0">
      <p className="w-fit">{Type}</p>
      <p className="w-fit">{Origin_Place}</p>
      <p className="w-fit">{Destination_Place}</p>
      <p className="w-fit">{Booking_Status}</p>
      <button className="w-fit rounded-md bg-sky-600 px-8 py-1 font-medium text-white duration-300 ease-in hover:bg-sky-700 dark:bg-sky-500 dark:hover:bg-sky-700">
        View
      </button>
    </div>
  );
};
export default View;
