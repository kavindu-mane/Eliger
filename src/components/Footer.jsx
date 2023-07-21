import React from "react";
import Logo from "../resources/Eliger-white-200px.png";

const Footer = () => {
  return (
    <React.Fragment>
      <div className="w-full bg-sky-950 text-white">
        <div className="flex flex-col items-center justify-center pb-4 pt-6 md:flex-row">
          <a href="/" className="">
            <img src={Logo} alt="logo" className="w-32" />
          </a>
          <a href="terms" className="mx-5 my-3 md:ms-10">
            T&C
          </a>
          <a href="privacy" className="mx-5 my-3">
            Privacy
          </a>
          <a href="contacts" className="mx-5 my-3">
            Contact us
          </a>
          <a href="about" className="mx-5 my-3">
            About
          </a>
          <a href="faq" className="mx-5 my-3">
            FAQ
          </a>
        </div>
        <div className="border-t border-emerald-100 border-opacity-50 py-2 text-center font-mono text-sm">
          Copyrights 2023 | eliger.com
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
