import React, { useEffect, useState } from "react";
import Logo from "../resources/Eliger-white.png";
import { MdDarkMode, MdComputer, MdSunny } from "react-icons/md";
import { Dropdown } from "flowbite-react";
import ThemeSwitcher from "./Data/ThmeSwitecher";

const themeIcons = {
  dark: <MdDarkMode className="h-5 w-5" />,
  light: <MdSunny className="h-5 w-5" />,
  default: <MdComputer className="h-5 w-5" />,
};

const Footer = () => {
  const [currentTheme, setCurrentTheme] = useState(
    !("theme" in localStorage)
      ? "default"
      : localStorage.theme === "dark"
      ? "dark"
      : "light"
  );

  useEffect(() => {
    ThemeSwitcher();
  }, [currentTheme]);

  return (
    <React.Fragment>
      <div className="w-full bg-sky-950 text-white">
        <div className="flex flex-col items-center justify-center pb-4 pt-6 md:flex-row">
          <a href="/" className="">
            <img src={Logo} alt="logo" className="w-32 md:me-5" />
          </a>
          <a href="terms" className="mx-5 my-3">
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
          <div className="mx-5 rounded-md bg-sky-500 p-1.5">
            <Dropdown
              inline
              label={themeIcons[currentTheme]}
              placement="top"
              arrowIcon={false}
            >
              <Dropdown.Item
                onClick={() => {
                  setCurrentTheme("dark");
                  localStorage.theme = "dark";
                }}
              >
                {themeIcons.dark} &ensp;Dark
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  setCurrentTheme("light");
                  localStorage.theme = "light";
                }}
              >
                {themeIcons.light} &ensp;Light
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  setCurrentTheme("default");
                  localStorage.removeItem("theme");
                }}
              >
                {themeIcons.default} &ensp;Default
              </Dropdown.Item>
            </Dropdown>
          </div>
        </div>
        <div className="border-t border-emerald-100 border-opacity-50 py-2 text-center font-mono text-sm">
          Copyrights 2023 | eliger.com
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
