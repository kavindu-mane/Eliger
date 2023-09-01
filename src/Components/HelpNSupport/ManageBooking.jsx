import React, { lazy } from "react";
const BookingReq = lazy(() => import("./BookingReq"));

const ManageBooking = () => {
  return (
    <div className="h-auto w-full p-4 font-Poppins">
      <div className="pb-5 text-center text-xl font-medium md:text-2xl">
        Manage Bookings
      </div>
      <div className="rounded-md bg-white px-2 py-4 shadow-md drop-shadow-lg dark:bg-slate-700">
        <BookingReq
          Origin_Place={"Colombo"}
          Destination_Place={"Galle"}
          Type={"BookNow"}
          
        />
        <BookingReq
          Origin_Place={"Colombo"}
          Destination_Place={"Galle"}
          Type={"BookNow"}
          
        />
        <BookingReq
          Origin_Place={"Colombo"}
          Destination_Place={"Galle"}
          Type={"BookNow"}
          
        />
        <BookingReq
          Origin_Place={"Colombo"}
          Destination_Place={"Galle"}
          Type={"BookNow"}
          
        />
        <BookingReq
          Origin_Place={"Colombo"}
          Destination_Place={"Galle"}
          Type={"BookNow"}
          
        />
      </div>
    </div>
  );
};
export default ManageBooking;
