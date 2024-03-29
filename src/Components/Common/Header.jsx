import React, { useState } from "react";
import Logo from "../../Resources/eliger-white.svg";
import { RiCloseLine, RiMenu3Fill } from "react-icons/ri";
import HeaderData from "../../Data/HeaderData";

const Header = ({ bg = "bg-slate-800" }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuSettings = () => {
    const MENU = document.getElementById("menu").classList;
    const documentElement = document.documentElement.classList;
    if (menuOpen) {
      MENU.add("translate-x-full");
      documentElement.remove("overflow-hidden");
      setMenuOpen(false);
    } else {
      MENU.remove("translate-x-full");
      documentElement.add("overflow-hidden");
      setMenuOpen(true);
    }
  };

  // set menu open false with screen resize
  window.onresize = () => {
    if (window.innerWidth > 768 && menuOpen) {
      menuSettings();
    }
  };

  return (
    <React.Fragment>
      <div
        className={
          "flex w-screen items-center justify-between py-2 font-Poppins font-semibold " +
          bg
        }
      >
        {/* logo */}
        <a href="/">
          <img src={Logo} alt="logo" className="ms-4 w-24 md:w-28" />
        </a>

        {/* menu button */}
        <button
          onClick={menuSettings}
          className="z-[999] me-5 sm:me-8 md:hidden"
        >
          {!menuOpen ? (
            <RiMenu3Fill className="h-6 w-6 text-white duration-200 hover:text-cyan-400" />
          ) : (
            <RiCloseLine className="h-6 w-6 text-white duration-200 hover:text-cyan-400" />
          )}
        </button>

        {/* header link area horizontal*/}
        <div className="me-8 hidden md:flex">
          {HeaderData.map((data) => {
            return (
              <a
                key={data.text}
                href={data.link}
                className={
                  "h-fit w-auto rounded-sm px-5 py-1.5 text-white duration-200 ease-in last:me-2 last:ms-5 last:bg-green-400 last:px-5 last:py-1.5 last:shadow-md last:drop-shadow-md hover:text-cyan-400 last:hover:bg-orange-400 last:hover:text-white md:hover:bg-transparent"
                }
              >
                {data.text}
              </a>
            );
          })}
        </div>

        {/* header link area vertical */}
        <div
          id="menu"
          className="fixed left-0 top-0 z-[99] flex h-screen w-screen translate-x-full duration-200"
        >
          <div
            className="h-full w-full backdrop-blur-sm"
            onClick={menuSettings}
          ></div>
          <div className="flex flex-col bg-slate-700 pt-16">
            {HeaderData.map((data) => {
              return (
                <a
                  key={data.text}
                  href={data.link}
                  className={
                    "h-fit w-80 place-self-center rounded-sm px-5 py-3 text-white duration-200 ease-in last:mt-5 last:w-fit last:bg-green-400 last:px-8 last:py-1.5 last:text-center last:shadow-md last:drop-shadow-md hover:bg-slate-800 hover:text-cyan-400 last:hover:bg-orange-400 last:hover:text-white"
                  }
                >
                  {data.text}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
