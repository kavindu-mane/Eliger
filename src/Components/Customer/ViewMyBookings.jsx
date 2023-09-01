import React, { lazy } from "react";
const View = lazy(() => import("./View"));

const ViewMyBookings = () => {
  return (
    <div className="h-auto w-full p-4 font-Poppins">
      <div className="pb-5 text-center text-xl font-medium md:text-2xl">
        View My Bookings
      </div>
      <div className="rounded-md bg-white px-2 py-4 shadow-md drop-shadow-lg dark:bg-slate-700">
        <View
          Type={"Booknow"}
          Origin_Place={"Badulla"}
          Destination_Place={"Colombo"}
          Booking_Status={"Pending"}
        />
        
      </div>
    </div>
  );
};
export default ViewMyBookings;
