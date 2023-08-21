import React, { lazy } from "react";
import HeaderImage from "../../resources/header-bg.svg";
import HomeImage from "../../resources/home-image.svg";
const Header = lazy(() => import("../common/Header"));
const Statistics = lazy(() => import("./Statistics"));

const HomeHeader = () => {
  return (
    <React.Fragment>
      <div className="shadow-[0_0_50px_50px_#0f172a] bg-slate-900 relative z-10 flex h-auto min-h-[50rem] w-screen flex-col items-center overflow-y-visible">
        <img
          src={HeaderImage}
          alt="wave"
          className="-z-50 h-full min-h-screen w-screen object-cover"
        />
        <div className="absolute start-0 top-0 flex h-full flex-col">
          <Header bg="bg-transparent" />
          <div className="my-10 flex h-[80%] items-center">
            <div className="grid w-full place-items-center gap-3 md:grid-cols-2">
              {/* left side */}
              <div className="flex items-center justify-center text-center md:text-left">
                <div>
                  <h1 className="mb-8 flex flex-col gap-y-3 font-noto text-4xl font-medium text-white md:text-5xl">
                    <span data-aos="fade-down">Ride & Drive</span>
                    <span
                      data-aos="fade-right"
                      className="font-outline-2 text-6xl text-transparent md:text-7xl"
                    >
                      WITH
                    </span>
                    <span
                      data-aos="fade-left"
                      className="text-6xl text-white md:text-7xl"
                    >
                      Us.
                    </span>
                  </h1>

                  {/* sign up to ride button */}
                  <div data-aos="zoom-in">
                    <a
                      className="rounded-md bg-[#22B84C] px-3 py-2 font-Poppins text-sm font-medium text-white duration-300 ease-in hover:bg-orange-400"
                      href="/ride"
                    >
                      Sign up to Ride
                    </a>
                  </div>
                  {/* statistics */}
                  <div className="mt-10 flex w-full">
                    <Statistics caption={"Users"} value={"100+"} />
                    <Statistics caption={"Vehicles"} value={"100+"} />
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
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomeHeader;
