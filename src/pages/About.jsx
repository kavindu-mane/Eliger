import React, { lazy } from "react";
import AboutImg from "../resources/aboutus-image.svg";
const Header = lazy(() => import("../components/Header"));
const Footer = lazy(() => import("../components/Footer"));
const Titles = lazy(() => import("../components/Titles"));
const BackgroundEffect = lazy(() => import("../components/BackgroundEffect"));

const About = () => {
  return (
    <React.Fragment>
      <div className="flex min-h-screen flex-col items-center justify-between">
        <Header />

        {/* middle container */}
        <div className="relative flex h-full w-screen flex-col items-center">
          {/* bluer effect */}
          <BackgroundEffect />
          <Titles
            title={"About Us"}
            subtitle={"Exploring Our Vehicle and Driver Rent Solutions."}
          />
          {/* Content-Area */}
          <div className="mb-20 font-Poppins text-slate-900 dark:text-gray-300">
            {/* section-01 */}
            <div className="grid w-full p-4 lg:grid-cols-2">
              {/* left-div-image */}
              <div className="mb-10 flex items-center justify-center lg:mb-0">
                <img
                  src={AboutImg}
                  alt="aboutUs"
                  className="sm:w-1/2 lg:w-2/3"
                />
              </div>
              {/* Right-div */}
              <div className="mx-3 flex justify-center lg:mx-0 lg:ms-5 lg:justify-start">
                <p className="max-w-lg text-justify">
                  As the market leader and Sri Lanka's most successful start-up
                  business in recent times, we envision the intelligent upgrade
                  of the local transportation industry; consequently inspiring
                  Sri Lanka towards matching global standards in effective
                  problem solving via technology. Eliger is the proud product of
                  this vision, instilled by our leadership that comprises the
                  enterprisingly youthful and highly accomplished, and realized
                  by talent warehoused at our headquarters in Sri Lanka. The
                  Eliger software is a platform that facilitates a real time
                  connection between the taxi passenger and the taxi driver,
                  enabling mutual engagement for the receipt and delivery of a
                  seamless service.
                </p>
              </div>
            </div>
            {/* section-02 */}
            <div className="mt-20 flex w-full flex-col-reverse p-4 lg:grid lg:grid-cols-2">
              {/* Left-div-paragraph */}
              <div className="mx-3 flex flex-col justify-center lg:mx-0 lg:ms-5 lg:justify-end">
                <p className="mb-5 max-w-lg text-justify">
                  Introducing our outstanding vehicle and driver rent system,
                  where excellence and customer satisfaction are at the heart of
                  everything we do. Our achievements in the industry set us
                  apart as a premier choice for travelers seeking top-notch
                  transportation services.
                </p>
                <p className="max-w-lg text-justify">
                  The seamless booking process on our user-friendly platform
                  makes reserving a vehicle and driver effortless. With just a
                  few clicks, travelers can easily secure their preferred
                  transportation, simplifying travel planning and ensuring a
                  stress-free experience from start to finish. With our 24/7
                  customer support, we ensure that assistance is always at hand,
                  whenever and wherever our clients need it. Our dedicated team
                  is readily available to address any inquiries and guarantee a
                  seamless and enjoyable travel experience.
                </p>
              </div>
              {/* Right-div-title */}
              <div className="mb-10 flex items-center justify-center lg:mb-0">
                <h1 className="text-3xl font-semibold dark:text-white">
                  Our Achievements
                </h1>
              </div>
            </div>
            {/* section-03 */}
            <div className="mt-20 w-full p-4 lg:grid lg:grid-cols-2">
              {/* Left-div-title */}
              <div className="mb-10 flex flex-col items-center justify-center lg:mb-0">
                <h1 className="text-3xl font-semibold dark:text-white">
                  Core Purpose
                </h1>
                <h1 className="text-md font-ABeeZee lowercase italic text-green-500 dark:text-emerald-400">
                  JOYFUL MOBILITY FOR A BETTER LIFE
                </h1>
              </div>
              {/* Right-div-paragraph */}
              <div className="mx-3 flex flex-col justify-center lg:mx-0 lg:ms-5 lg:justify-start">
                <p className="mb-5 max-w-lg text-justify">
                  Eliger envisions the intelligent upgrade of mobility,
                  consequently inspiring Sri Lanka towards matching global
                  standards in effective problem solving via technology. Eliger
                  is committed to innovate and build solutions that push
                  boundaries in the mobility space using advanced technology and
                  Big Data. Our mission is to upgrade the efficiency,
                  reliability, and safety of the country's mobility services by
                  introducing technology, standards, order, and convenience into
                  the system.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default About;
