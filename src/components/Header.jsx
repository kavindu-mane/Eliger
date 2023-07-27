import React, { useState, lazy } from "react";
import Logo from "../resources/Eliger-white.png";
import { RiCloseLine, RiMenu3Fill } from "react-icons/ri";
const HeaderLinks = lazy(() => import("./HeaderLinks"));

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
          className="fixed -right-80 top-0 z-[999] flex h-screen flex-col bg-slate-700 pt-5 duration-300 md:relative md:right-0 md:z-0 md:me-4 md:h-auto md:flex-row md:bg-transparent md:p-0"
        >
          {/* menu button */}
          <button
            onClick={(e) => menuSettings(e)}
            className="mb-5 me-4 w-fit place-self-end"
          >
            <RiCloseLine className="h-6 w-6 text-white md:hidden" />
          </button>
          <HeaderLinks link={"/rent"} text={"Rent"} />
          <HeaderLinks link={"/ride"} text={"Ride"} />
          <HeaderLinks link={"/privacy"} text={"Privacy"} />
          <HeaderLinks link={"/about"} text={"About"} />
          <HeaderLinks link={"/contact"} text={"Contact"} />
          <HeaderLinks link={"/faq"} text={"FAQ"} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
