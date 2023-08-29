import React from "react";

const Circles = () => {

  return (
    <div className="absolute -z-10 h-full w-full overflow-hidden">
      <div
        className={"absolute start-0 top-0 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400 opacity-40"}
      ></div>
      <div
        className={"absolute start-0 top-0 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full border-[5rem] border-emerald-400 opacity-40"}
      ></div>
      <div
        className={"absolute bottom-0 end-0 h-72 w-72 translate-x-1/2 translate-y-1/2 rounded-full bg-emerald-400 opacity-50"}
      ></div>
      <div
        className={"absolute bottom-0 end-0 h-96 w-96 translate-x-1/2 translate-y-1/2 rounded-full border-8 border-emerald-400 opacity-50"}
      ></div>
    </div>
  );
};

export default Circles;
