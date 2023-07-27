import React, { lazy } from "react";
import privacyImg from "../resources/privacy.svg";
import blurImg from "../resources/blur.svg";
import PrivacyData from "../components/Data/PrivacyData";

const Accordions = lazy(() => import("../components/Accordions"));
const Header = lazy(() => import("../components/Header"));
const Footer = lazy(() => import("../components/Footer"));

const Privacy = () => {
  return (
    <React.Fragment>
      <Header />
      {/* title section */}
      <div className="my-20 w-screen text-center">
        <h3 class="text-center text-3xl font-bold text-green-400 md:text-4xl">
          Privacy Policy
        </h3>

        <h5 class="text-md mt-3 text-center text-green-500 dark:text-green-400">
          Eliger
          <span class="ms-2 text-slate-800 dark:text-white">
            collects some personal data from its users.
          </span>
        </h5>
      </div>
      {/* content section */}
      <div className="mx-3 my-20 grid grid-cols-1 gap-x-4 md:grid-cols-2 md:gap-x-20 xl:gap-x-32">
        {/* leftside */}
        <div className="flex h-full w-full flex-col items-center justify-center md:items-end">
          <div className="max-w-lg">
            <p class="mb-3 text-justify text-slate-900 dark:text-white">
              &emsp;&emsp;Welcome to our Eliger Vehicle Renting System! We are
              committed to protecting your privacy and ensuring the security of
              your personal information. This Privacy Policy outlines how we
              collect, use, share, and retention your data when you interact
              with our platform. By accessing or using our Vehicle Renting
              System, you consent to the practices described in this policy.
            </p>
            <img className="max-w-md" src={privacyImg} alt="privacy" />
          </div>
        </div>
        {/* right side */}
        <div className="relative flex h-full w-full flex-col items-center justify-center md:items-start">
          {/* blur image */}
          <img
            src={blurImg}
            alt="blur background"
            className="absolute start-0 top-1/2 -z-10 w-full -translate-y-1/2"
          />
          <div className="w-full max-w-lg">
            <Accordions datafile={PrivacyData} />
          </div>
        </div>
      </div>

      <Footer />
    </React.Fragment>
  );
};

export default Privacy;
