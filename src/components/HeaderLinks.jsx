import React from "react";

const HeaderLinks = ({ link, text }) => {
  return (
    <a
      href={link}
      className="mx-4 my-3 w-60 font-semibold text-white hover:text-[#41df6d] md:my-0 md:w-auto"
    >
      {text}
    </a>
  );
};

export default HeaderLinks;
