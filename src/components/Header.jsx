import React, { useState } from "react";
import Logo from "../resources/Eliger-white.png";
import { RiCloseLine, RiMenu3Fill } from "react-icons/ri";
import HeaderData from "./Data/HeaderData";

const Header = ({ bg = "bg-slate-800" }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuSettings = (e) => {
    const MENU = document.getElementById("menu").classList;
    if (menuOpen) {
      MENU.replace("right-0", "-right-80");
      setMenuOpen(false);
    } else {
      MENU.replace("-right-80", "right-0");
      setMenuOpen(true);
    }
  };

  return (
    <React.Fragment>
      <div className={"flex w-screen items-center justify-between py-2 " + bg}>
        {/* logo */}
        <a href="/">
          <img src={Logo} alt="logo" className="z-50 ms-4 w-32 md:w-36" />
        </a>

        {/* menu button */}
        <button onClick={(e) => menuSettings(e)} className="me-4">
          <RiMenu3Fill className="h-6 w-6 text-white md:hidden" />
        </button>

        {/* header link area */}
        <div
          id="menu"
          className="fixed -right-80 top-0 z-[999] flex h-screen flex-col bg-slate-700 pt-5 duration-300 md:relative md:right-0 md:z-0 md:me-8 md:h-auto md:flex-row md:bg-transparent md:p-0"
        >
          {/* menu button */}
          <button
            onClick={(e) => menuSettings(e)}
            className="mb-5 me-4 w-fit place-self-end"
          >
            <RiCloseLine className="h-6 w-6 text-white md:hidden" />
          </button>
          {HeaderData.map((data) => {
            return (
              <a
                href={data.link}
                className={
                  "h-fit w-80 place-self-center rounded-sm px-5 py-3 font-Poppins font-semibold text-white duration-200 ease-in last:mt-5 last:w-fit last:bg-green-400 last:px-8 last:py-1.5 last:text-center hover:bg-slate-800 hover:text-cyan-400 last:hover:bg-orange-400 last:hover:text-white md:w-auto md:py-1.5 md:last:ms-5 md:last:mt-0 md:last:px-5 md:hover:bg-transparent last:shadow-md last:drop-shadow-md"
                }
              >
                {data.text}
              </a>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
