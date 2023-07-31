import React, { lazy } from "react";
import images from "../components/Data/ImageLoader";
const Circles = lazy(() => import("../components/Circles"));
const BackgroundEffect = lazy(() => import("../components/BackgroundEffect"));

const Register = () => {
  return (
    <React.Fragment>
      {/* outer div */}
      <div className="relative flex min-h-screen w-screen">
        {/* background effect */}
        <BackgroundEffect />
        {/* left side */}
        <div className="hidden h-auto min-h-screen w-1/2 border-e border-slate-300 bg-white drop-shadow-2xl dark:border-slate-800 dark:bg-gray-700 lg:flex lg:flex-col">
          {/* logo div */}
          <div className="my-2 flex h-fit w-fit">
            {/* dark theme logo */}
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
          {/* image conteiner */}
          <div className="flex h-full w-full flex-col items-center justify-center">
            <img
              src={images["register.svg"]}
              alt="register"
              className="w-2/3 xl:w-1/2"
            />
          </div>
        </div>

        {/* right side */}
        <div className="min-h-screen w-full lg:w-1/2">
          {/* round effect component */}
          <Circles topOpacity={25} bottomOpacity={30} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Register;
