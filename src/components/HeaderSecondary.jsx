import React, { lazy } from "react";
import images from "./Data/ImageLoader";
const ThemeButton = lazy(() => import("./ThemeButton"));

const HeaderSecondary = () => {
  return (
    <div className="absolute start-0 top-0 my-2 flex h-fit w-screen items-center justify-between">
      {/* dark theme logo */}
      <div className="h-fit-w-fit flex">
        <a href="/">
          <img
            src={images["Eliger-white.png"]}
            alt="logo dark"
            className="ms-4 hidden w-32 dark:block md:w-36"
          />
        </a>
        {/* light theme logo */}
        <a href="/">
          <img
            src={images["Eliger.png"]}
            alt="logo light"
            className="ms-4 block w-32 dark:hidden md:w-36"
          />
        </a>
      </div>
      {/* theme button */}
      <ThemeButton placement="bottom" />
    </div>
  );
};

export default HeaderSecondary;
