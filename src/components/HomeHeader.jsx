import React, { useState } from "react";
import HeaderImage from "../resources/header-bg.svg";
import Logo from "../resources/Eliger-white-200px.png";
import HeaderLinks from "./HeaderLinks";
import HomeImage from "../resources/home-image.svg";
import Statistics from "./Statistics";

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
      <div className="relative">
        <img
          src={HeaderImage}
          alt="header"
          className="absolute -z-50 min-h-screen w-screen min-w-max"
        />
        <div className=" flex w-screen justify-between">
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
            <HeaderLinks link={"/"} text={"Drive"} />
            <HeaderLinks link={"/"} text={"Ride"} />
            <HeaderLinks link={"/"} text={"Privacy"} />
            <HeaderLinks link={"/"} text={"About"} />
            <HeaderLinks link={"/"} text={"Contact"} />
            <HeaderLinks link={"/"} text={"FAQ"} />
          </div>
        </div>
        <div className="mt-32 grid gap-3 md:mt-44 md:grid-cols-2">
          {/* left side */}
          <div className="flex items-center justify-center text-center md:text-left">
            <div>
              <h1 className="font-noto text-4xl font-medium text-white md:text-5xl">
                Ride & Drive <br className="mb-3" />
                <span className="text-6xl text-[#22B84C] md:text-7xl">
                  WITH <br className="mb-3" />
                  <span className="text-white">Us.</span>
                </span>
              </h1>

              {/* sign up to ride button */}
              <button className="mt-5 rounded-md bg-[#22B84C] px-3 py-2 font-noto text-white hover:bg-orange-600">
                Sign up to Ride
              </button>

              {/* statistics */}
              <div className="mt-10 flex">
                <Statistics caption={"Registered Users"} value={"100+"} />
                <Statistics caption={"Registered Vehicles"} value={"100+"} />
                <Statistics caption={"Rides"} value={"1K+"} />
              </div>
            </div>
          </div>

          {/* right side */}
          <div className="mt-5 flex justify-center">
            <img
              src={HomeImage}
              alt="home"
              className="w-11/12 max-w-xl md:max-w-2xl"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
