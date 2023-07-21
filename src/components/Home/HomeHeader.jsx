import React, { lazy } from "react";
import HeaderImage from "../../resources/header-bg.svg";
import HomeImage from "../../resources/home-image.svg";
const Header = lazy(() => import("../Header"));
const Statistics = lazy(() => import("./Statistics"));

const HomeHeader = () => {
  return (
    <React.Fragment>
      <div
        className="relative z-10 h-[65rem] md:h-[68rem]"
        style={{
          backgroundImage: `url(${HeaderImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "auto",
        }}
      >
        <Header bg="bg-transparent" />
        <div className="mt-32 grid gap-3 md:mt-44 md:grid-cols-2">
          {/* left side */}
          <div className="flex items-center justify-center text-center md:text-left">
            <div>
              <h1 className="mb-5 font-noto text-4xl font-medium text-white md:text-5xl">
                Ride & Drive <br className="mb-3" />
                <span className="text-6xl text-[#22B84C] md:text-7xl">
                  WITH <br className="mb-3" />
                  <span className="text-white">Us.</span>
                </span>
              </h1>

              {/* sign up to ride button */}
              <a
                className="rounded-md bg-[#22B84C] px-3 py-2 font-noto text-white hover:bg-orange-600"
                href="/ride"
              >
                Sign up to Ride
              </a>

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
              className="w-11/12 max-w-xl md:max-w-2xl xl:max-w-3xl"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomeHeader;
