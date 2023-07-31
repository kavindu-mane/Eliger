import React from "react";

const Circles = ({ topOpacity = 50, bottomOpacity = 60 }) => {
  return (
    <div className="relative -z-10 h-full w-full overflow-hidden">
      <div
        className={`absolute start-0 top-0 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400 opacity-${topOpacity}`}
      ></div>
      <div
        className={`absolute start-0 top-0 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full border-[5rem] border-emerald-400 opacity-${topOpacity}`}
      ></div>
      <div
        className={`absolute bottom-0 end-0 h-72 w-72 translate-x-1/2 translate-y-1/2 rounded-full bg-emerald-400 opacity-${bottomOpacity}`}
      ></div>
      <div
        className={`absolute bottom-0 end-0 h-96 w-96 translate-x-1/2 translate-y-1/2 rounded-full border-8 border-emerald-400 opacity-${bottomOpacity}`}
      ></div>
    </div>
  );
};

export default Circles;
