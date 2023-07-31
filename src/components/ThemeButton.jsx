import React, { useState, useEffect } from "react";
import ThemeSwitcher from "./Data/ThmeSwitecher";
import { MdDarkMode, MdComputer, MdSunny } from "react-icons/md";
import { Dropdown } from "flowbite-react";

const themeIcons = {
  dark: <MdDarkMode className="h-5 w-5" />,
  light: <MdSunny className="h-5 w-5" />,
  default: <MdComputer className="h-5 w-5" />,
};

const ThemeButton = ({ placement = "top" }) => {
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
    <div className="mx-5 h-fit w-fit rounded-md bg-sky-500 p-1.5 text-white">
      <Dropdown
        inline
        label={themeIcons[currentTheme]}
        placement={placement}
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
  );
};

export default ThemeButton;
