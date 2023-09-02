import React, { lazy } from "react";
const EditandRemove = lazy(() => import("./ViewMyVehicleData"));

const ViewMyVehicles = () => {
  return (
    <div>
      <div className=" mt-4 rounded-xl border border-slate-800 bg-slate-700 p-1 pb-4 pt-4 text-2xl">
        <p className=" ml-10 text-center font-semibold tracking-wide ">
          View My Vehicles
        </p>
        <div className="px-12 text-sm">
          <EditandRemove Reg_No={"Reg.No-ABC4567"} Type={"Car"} />
          <EditandRemove Reg_No={"Reg.No-ABC4567"} Type={"Car"} />
          <EditandRemove Reg_No={"Reg.No-ABC4567"} Type={"Car"} />
          <EditandRemove Reg_No={"Reg.No-ABC4567"} Type={"Car"} />
          <EditandRemove Reg_No={"Reg.No-ABC4567"} Type={"Car"} />
        </div>
      </div>
    </div>
  );
};
export default ViewMyVehicles;
