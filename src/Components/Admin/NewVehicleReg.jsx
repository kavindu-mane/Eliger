import React, { lazy } from "react";
const RegRequests = lazy(() => import("./RegRequests"));

const NewVehicleReg = () => {
  return (
    <div className="h-auto w-full p-4 font-Poppins">
      <div className="pb-5 text-center text-xl font-medium md:text-2xl">
        New Vehicle Registrations
      </div>
      <div className="rounded-md bg-white px-2 py-4 shadow-md drop-shadow-lg dark:bg-slate-700">
        <RegRequests Owner={"Kavindu"} type={"car"} />
        <RegRequests Owner={"Kavindu"} type={"car"} />
        <RegRequests Owner={"Kavindu"} type={"car"} />
        <RegRequests Owner={"Kavindu"} type={"car"} />
        <RegRequests Owner={"Kavindu"} type={"car"} />
      </div>
    </div>
  );
};
export default NewVehicleReg;
