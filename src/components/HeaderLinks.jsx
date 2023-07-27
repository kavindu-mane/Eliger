import React from "react";

const HeaderLinks = ({ link, text }) => {
  return (
    <a
      href={link}
      className={
        "h-fit w-[20rem] px-5 py-3 font-Poppins font-semibold text-white duration-200 ease-in hover:bg-slate-800 hover:text-cyan-400 md:w-auto md:py-0 md:hover:bg-transparent"
      }
    >
      {text}
    </a>
  );
};

export default HeaderLinks;
