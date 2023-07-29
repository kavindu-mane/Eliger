import React, { lazy } from "react";
import TermsData from "../components/Data/TermsData";
const Header = lazy(() => import("../components/Header"));
const Footer = lazy(() => import("../components/Footer"));
const Titles = lazy(() => import("../components/Titles"));
const BackgroundEffect = lazy(() => import("../components/BackgroundEffect"));

const Terms = () => {
  return (
    <React.Fragment>
      <div className="flex min-h-screen flex-col items-center justify-between">
        <Header />
        {/* middle container */}
        <div className="relative flex h-full  w-screen flex-col items-center">
          {/* bluer effect */}
          <BackgroundEffect />
          <Titles title={"Terms & Conditions "}></Titles>

          {/* center content */}
          <div className="mb-20 h-full w-full space-y-7 px-4 text-justify font-Poppins sm:px-10 md:w-3/5">
            <p>
              Welcome to our Eliger Driver and Vehicle Renting System.These
              Terms of Service govern Your access to Eliger platform.By
              accessing and using Eliger, You agree to comply with these Terms.
              You may not access and use Eliger if You do not agree to the
              version of the Terms posted at the time You access Eliger.
            </p>
            <div class="flex flex-col space-y-10 ">
              {/* terms data */}
              {TermsData.map((terms) => {
                return (
                  <div className="space-y-3" data-aos="fade-up">
                    <h3 class="text-lg font-semibold">{terms.title}</h3>
                    <div className="text-gray-800 dark:text-gray-300">
                      {terms.content}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Terms;
