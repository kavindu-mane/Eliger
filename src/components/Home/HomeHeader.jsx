import React, { lazy } from "react";
import HeaderImage from "../../resources/header-bg.svg";
import HomeImage from "../../resources/home-image.svg";
const Header = lazy(() => import("../Header"));
const Statistics = lazy(() => import("./Statistics"));

const HomeHeader = () => {
  return (
    <React.Fragment>
      <div className="relative z-10 flex h-full w-screen flex-col items-center">
        <img
          src={HeaderImage}
          alt="wave"
          className="absolute top-0 -z-50 h-auto min-h-screen w-screen overflow-y-visible object-cover"
        />
        <Header bg="bg-transparent" />
        <div className="mt-10 grid h-full w-full place-items-center gap-3 md:mt-20 md:grid-cols-2">
          {/* left side */}
          <div className="flex items-center justify-center text-center md:text-left">
            <div>
              <h1 className="mb-8 flex flex-col gap-y-3 font-noto text-4xl font-medium text-white md:text-6xl">
                <span data-aos="fade-down">Ride & Drive</span>
                <span
                  data-aos="fade-right"
                  className="font-outline-2 text-6xl text-transparent md:text-8xl"
                >
                  WITH
                </span>
                <span
                  data-aos="fade-left"
                  className="text-6xl text-white md:text-8xl"
                >
                  Us.
                </span>
              </h1>

              {/* sign up to ride button */}
              <div data-aos="zoom-in">
                <a
                  className="rounded-md bg-[#22B84C] px-3 py-2 font-noto text-white duration-300 ease-in hover:bg-orange-400"
                  href="/ride"
                >
                  Sign up to Ride
                </a>
              </div>
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
              data-aos="fade-left"
              src={HomeImage}
              alt="home"
              className="w-11/12 max-w-xl md:max-w-2xl xl:max-w-3xl"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomeHeader;
