import React, { lazy } from "react";
const Vehicle = lazy(() => import("./Feedback"));

const ManageFeedback = () => {
  return (
    <div className="h-auto w-full p-4 font-Poppins">
      <div className="pb-5 text-center text-xl font-medium md:text-2xl">
        Manage Feedbacks
      </div>
      <div className="rounded-md bg-white px-2 py-4 shadow-md drop-shadow-lg dark:bg-slate-700">
        <Vehicle customer={"Pabasara"} feedbackdesc={"..."} />
        <Vehicle customer={"Pabasara"} feedbackdesc={"..."} />
        <Vehicle customer={"Pabasara"} feedbackdesc={"..."} />
        <Vehicle customer={"Pabasara"} feedbackdesc={"..."} />
        <Vehicle customer={"Pabasara"} feedbackdesc={"..."} />
      </div>
    </div>
  );
};
export default ManageFeedback;