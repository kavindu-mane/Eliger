import React, { lazy } from "react";
import faqImg from "../resources/faq-image.svg";
import FaqData from "../components/Data/FaqData";

const Accordions = lazy(() => import("../components/Accordions"));
const BackgroundEffect = lazy(() => import("../components/BackgroundEffect"));
const Header = lazy(() => import("../components/Header"));
const Footer = lazy(() => import("../components/Footer"));
const Titles = lazy(() => import("../components/Titles"));

const Faq = () => {
  return (
    <React.Fragment>
      <div className="flex min-h-screen flex-col items-center justify-between">
        <Header />

        {/* middle container */}
        <div className="relative h-full w-screen">
          {/* bluer effect */}
          <BackgroundEffect />
          {/* title section */}
          <Titles title={"FAQ"}>
            <h3>
              Top 7 Frequently Asked Questions about
              <span className="text-green-500 dark:text-green-400">
                {" "}
                Eliger
              </span>
            </h3>
          </Titles>

          {/* content section */}
          <div className="mx-3 my-20 grid grid-cols-1 gap-x-4 md:mx-10 md:grid-cols-2 md:gap-x-16 xl:gap-x-32">
            {/* left side */}
            <div className="flex h-full w-full flex-col items-center justify-center md:items-end">
              <div className="max-w-lg">
                <p
                  className="mb-6 text-justify font-ABeeZee text-slate-900 dark:text-slate-100"
                  data-aos="fade-right"
                >
                  &emsp;&emsp;Welcome to the FAQ page of the Eliger Vehicle
                  Renting System.We understand that you may have some questions,
                  and we're here to provide you with the answers you need for a
                  seamless experience.
                </p>
                <p
                  className="mb-10 text-justify font-ABeeZee text-slate-900 dark:text-slate-100"
                  data-aos="fade-right"
                >
                  &emsp;&emsp; Get ready to embark on unforgettable journeys
                  with Eliger's Online Vehicle Renting System. Experience the
                  joy of hassle-free rentals, a diverse fleet of vehicles, and
                  outstanding customer service. Trust us to be your travel
                  companion – your adventure awaits!
                </p>

                <img
                  className="w-full max-w-md"
                  src={faqImg}
                  alt="faq"
                  data-aos="fade-up"
                />
              </div>
            </div>
            {/* right side */}
            <div className="relative flex h-full w-full flex-col items-center md:items-start">
              <div className="w-full max-w-lg">
                <Accordions datafile={FaqData} />
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Faq;
