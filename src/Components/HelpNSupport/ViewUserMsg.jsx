import React, { lazy } from "react";
const Messages = lazy(() => import("./Messages"));

const ViewUserMsg = () => {
  return (
    <div className="h-auto w-full p-4 font-Poppins">
      <div className="pb-5 text-center text-xl font-medium md:text-2xl">
        View User Messages
      </div>
      <div className="rounded-md bg-white px-2 py-4 shadow-md drop-shadow-lg dark:bg-slate-700">
        <Messages Customer_Name={"Pabasara"} Message_description={"fcccccccccccccc igyyyyyyyyyyyyyyyyy iyghbhhhhhhhhhhhhhhhhhhhhhhhh uygggggggggggggggggggggggggggggggg fyhhhhhhhhhhhhhhhhhhhhhhhh hbbbbbbbbb"} />
        <Messages Customer_Name={"Pabasara"} Message_description={"fcccccccccccccc igyyyyyyyyyyyyyyyyy iyghbhhhhhhhhhhhhhhhhhhhhhhhh uygggggggggggggggggggggggggggggggg fyhhhhhhhhhhhhhhhhhhhhhhhh hbbbbbbbbb"} />
        <Messages Customer_Name={"Pabasara"} Message_description={"fcccccccccccccc igyyyyyyyyyyyyyyyyy iyghbhhhhhhhhhhhhhhhhhhhhhhhh uygggggggggggggggggggggggggggggggg fyhhhhhhhhhhhhhhhhhhhhhhhh hbbbbbbbbb"} />
        <Messages Customer_Name={"Pabasara"} Message_description={"fcccccccccccccc igyyyyyyyyyyyyyyyyy iyghbhhhhhhhhhhhhhhhhhhhhhhhh uygggggggggggggggggggggggggggggggg fyhhhhhhhhhhhhhhhhhhhhhhhh hbbbbbbbbb"} />
        <Messages Customer_Name={"Pabasara"} Message_description={"fcccccccccccccc igyyyyyyyyyyyyyyyyy iyghbhhhhhhhhhhhhhhhhhhhhhhhh uygggggggggggggggggggggggggggggggg fyhhhhhhhhhhhhhhhhhhhhhhhh hbbbbbbbbb"} />
      </div>
    </div>
  );
};
export default ViewUserMsg;