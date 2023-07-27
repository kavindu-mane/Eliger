import React, { lazy } from "react";
import privacyImg from "../resources/privacy.svg";
import PrivacyData from "../components/Data/PrivacyData";

const PrivacyAccordion = lazy(() => import("../components/Accordions"));
const Header = lazy(() => import("../components/Header"));
const Footer = lazy(() => import("../components/Footer"));

const Privacy = () => {
  return (
    <React.Fragment>
      <div className="flex min-h-screen flex-col items-center justify-between">
        <Header />

        <div>
          <h3 class="text-center text-3xl font-bold dark:text-green-500">
            PRIVACY POLICY
          </h3>

          <h5 class="text-center text-xl font-bold dark:text-green-500">
            Eliger
            <span class="text-xl font-bold dark:text-white">
              {" "}
              collects some personal data from its users.
            </span>
          </h5>

          <p class="mb-3 text-white dark:text-white">
            Welcome to our Eliger Vehicle Renting System! We are committed to
            protecting your privacy and ensuring the security of your personal
            information. This Privacy Policy outlines how we collect, use,
            share, and retention your data when you interact with our platform.
            By accessing or using our Vehicle Renting System, you consent to the
            practices described in this policy.
          </p>
          <img src= {privacyImg} alt="privacy" />
        </div>
        
        <PrivacyAccordion datafile={PrivacyData} />
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Privacy;
