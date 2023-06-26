import React, { useState, lazy } from "react";
import Logo from "../resources/Eliger-white-200px.png";
const HeaderLinks = lazy(() => import("./HeaderLinks"));

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuSettings = (e) => {
    const MENU = document.getElementById("menu");
    if (menuOpen) {
      MENU.classList.remove("right-0");
      MENU.classList.add("-right-80");
      setMenuOpen(false);
      e.target.innerHTML = "menu";
    } else {
      MENU.classList.remove("-right-80");
      MENU.classList.add("right-0");
      setMenuOpen(true);
      e.target.innerHTML = "close";
    }
  };
  return (
    <React.Fragment>
      <div className="flex w-screen justify-between">
        <a href="/">
          <img src={Logo} alt="logo" className="z-50 ms-4 w-32 md:w-40" />
        </a>

        {/* menu button */}
        <button
          onClick={(e) => menuSettings(e)}
          className={`z-50 ${menuOpen ? "fixed top-2" : "relative"} right-0`}
        >
          <span className="material-symbols-outlined me-5 text-white md:hidden">
            menu
          </span>
        </button>

        {/* header link area */}
        <div
          id="menu"
          className="fixed -right-80 z-40 flex h-screen flex-col bg-slate-700 pe-4 ps-3 pt-10 duration-300 md:relative md:right-0 md:h-auto md:flex-row md:bg-transparent md:pt-4"
        >
          <HeaderLinks link={"/drive"} text={"Drive"} />
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
