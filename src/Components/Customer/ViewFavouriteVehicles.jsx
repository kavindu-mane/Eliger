import React, { lazy } from "react";
const ViewVehicles = lazy(() => import("./ViewVehicles"));

const ViewFavouriteVehicles= () => {
  return (
    <div className="h-auto w-full p-4 font-Poppins">
      <div className="pb-5 text-center text-xl font-medium md:text-2xl">
        View Favourite Vehicles
      </div>
      <div className="rounded-md bg-white px-2 py-4 shadow-md drop-shadow-lg dark:bg-slate-700">
        <ViewVehicles
         Vehicle_Type={"Car"}
          Passenger_amount={"4"}
          rent_Out_Location={"Badulla"}
          
        />
      </div>
    </div>
  );
};
export default ViewFavouriteVehicles;
