import React, { lazy } from "react";
import images from "../Data/ImageLoader";
const ThemeButton = lazy(() => import("./ThemeButton"));

const HeaderSecondary = () => {
  return (
    <div className="absolute start-0 top-0 z-50 my-2 flex h-fit w-screen items-center justify-between">
      {/* dark theme logo */}
      <div className="h-fit-w-fit flex">
        <a href="/">
          <img
            src={images["eliger-white.svg"]}
            alt="logo dark"
            className="ms-4 hidden w-28 dark:block md:w-32"
          />
        </a>
        {/* light theme logo */}
        <a href="/">
          <img
            src={images["eliger.svg"]}
            alt="logo light"
            className="ms-4 block w-28 dark:hidden md:w-32"
          />
        </a>
      </div>
      {/* theme button */}
      <ThemeButton placement="bottom" />
    </div>
  );
};

export default HeaderSecondary;
