import React, { lazy } from "react";
const View = lazy(() => import("./View"));

const ViewMyBookings = () => {
  return (
    <div className="h-auto w-full p-4 font-Poppins">
      <div className="pb-5 text-center text-xl font-medium md:text-2xl">
        View My Bookings
      </div>

      <div className="rounded-md bg-white px-2 py-4 shadow-md drop-shadow-lg dark:bg-slate-700">
        <div className="hidden justify-between md:flex">
          <span className="px-4">Type</span>
          <span className="">Origin_Place</span>
          <span className="px-4">Destination_Place</span>
          <span className="px-4">Booking_Status</span>
          <span className="px-4">Option</span>
        </div>
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
