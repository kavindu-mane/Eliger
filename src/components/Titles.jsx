import React from "react";

const Titles = ({ title, subtitle, children }) => {
  return (
    <div className="my-20 w-screen text-center font-Poppins">
      <h3 className="text-center text-4xl font-bold text-green-400 md:text-5xl">
        {title}
      </h3>

      <h5 className="text-md mt-3 text-center text-slate-800 dark:text-white">
        {children}
        {subtitle}
      </h5>
    </div>
  );
};

export default Titles;
