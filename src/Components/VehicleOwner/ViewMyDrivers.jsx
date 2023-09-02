import React, { lazy } from "react";
const EditandRemove = lazy(() => import("./ViewDriversAccounts"));

const ViewMyDrivers = () => {
  return (
    <div>
      <div className="mt-4  w-full rounded-xl  bg-slate-700   p-1 pb-4 pt-4 text-2xl">
        <p className=" ml-10 text-center font-semibold tracking-wide">
          View My Drivers
        </p>
        <div className="px-5 text-sm">
          <EditandRemove FirstName={"Dinithi"} Email={"dinithi@gmail.com"} />
          <EditandRemove FirstName={"Dinithi"} Email={"dinithi@gmail.com"} />
          <EditandRemove FirstName={"Dinithi"} Email={"dinithi@gmail.com"} />
          <EditandRemove FirstName={"Dinithi"} Email={"dinithi@gmail.com"} />
          <EditandRemove FirstName={"Dinithi"} Email={"dinithi@gmail.com"} />
        </div>
      </div>
    </div>
  );
};
export default ViewMyDrivers;
