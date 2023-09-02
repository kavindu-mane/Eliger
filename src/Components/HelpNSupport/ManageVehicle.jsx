import React, { lazy } from "react";
const Vehicle = lazy(() => import("./Vehicle"));

const ManageVehicle = () => {
  return (
    <div className="h-auto w-full p-4 font-Poppins">
      <div className="pb-5 text-center text-xl font-medium md:text-2xl">
        Manage Vehicles
      </div>
      <div className="rounded-md bg-white px-2 py-4 shadow-md drop-shadow-lg dark:bg-slate-700">
        <Vehicle
          Owner_Name={"Pabasara"}
          Vehicle_type={"car"}
          Vehicle_PlateNumber={"ABC4567"}
          Passenger_amount={"5"}
        />
        <Vehicle
          Owner_Name={"Pabasara"}
          Vehicle_type={"car"}
          Vehicle_PlateNumber={"ABC4567"}
          Passenger_amount={"5"}
        />
        <Vehicle
          Owner_Name={"Pabasara"}
          Vehicle_type={"car"}
          Vehicle_PlateNumber={"ABC4567"}
          Passenger_amount={"5"}
        />
        <Vehicle
          Owner_Name={"Pabasara"}
          Vehicle_type={"car"}
          Vehicle_PlateNumber={"ABC4567"}
          Passenger_amount={"5"}
        />
        <Vehicle
          Owner_Name={"Pabasara"}
          Vehicle_type={"car"}
          Vehicle_PlateNumber={"ABC4567"}
          Passenger_amount={"5"}
        />
      </div>
    </div>
  );
};
export default ManageVehicle;
