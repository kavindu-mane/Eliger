import React, { lazy } from "react";
const Reports = lazy(() => import("./Reports"));

const ReviewReports = () => {
  return (
    <div className="h-auto w-full p-4 font-Poppins">
      <div className="pb-5 text-center text-xl font-medium md:text-2xl">
        Reports
      </div>
      <div className="rounded-md bg-white px-2 py-4 shadow-md drop-shadow-lg dark:bg-slate-700">
        <Reports Customer_Name={"Pabasara"} Report_description={"Report"} />
        <Reports Customer_Name={"Pabasara"} Report_description={"Report"} />
        <Reports Customer_Name={"Pabasara"} Report_description={"Report"} />
        <Reports Customer_Name={"Pabasara"} Report_description={"Report"} />
        <Reports Customer_Name={"Pabasara"} Report_description={"Report"} />
      </div>
    </div>
  );
};
export default ReviewReports;
