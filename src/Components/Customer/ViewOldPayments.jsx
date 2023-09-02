import React, { lazy } from "react";
const ViewPayments = lazy(() => import("./ViewPayments"));

const ViewOldPayments = () => {
  return (
    <div className="h-auto w-full p-4 font-Poppins">
      <div className="pb-5 text-center text-xl font-medium md:text-2xl">
        View Old Payments
      </div>
      <div className="rounded-md bg-white px-2 py-4 shadow-md drop-shadow-lg dark:bg-slate-700">
        <div className="hidden justify-between md:flex">
          <span className="px-4">Type</span>
          <span className="">Amount</span>
          <span className="px-4">DateTime</span>
          <span className="px-4">Option</span>
        </div>
        <ViewPayments
          Payment
          Type={"Online"}
          Amount={"2000"}
          DateTime={"2023"}
        />
      </div>
    </div>
  );
};
export default ViewOldPayments;
