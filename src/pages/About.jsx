import React, { lazy } from "react";
const Header = lazy(() => import("../components/Header"));
const Footer = lazy(() => import("../components/Footer"));

const About = () => {
  return (
    <React.Fragment>
      <div className="flex min-h-screen flex-col items-center justify-between">
        <Header />
        <section className="w-full ">
          <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-24">
            <div className="flex w-full mx-auto text-left">
              <div className="relative inline-flex items-center mx-auto align-middle">
                <div className="pb-12 text-center">
                  <h1 className="max-w-5xl text-2xl font-bold leading-none tracking-tighter text-white-600 md:text-5xl lg:text-6xl lg:max-w-7xl">
                    Long headline to turn <br className="hidden lg:block" />
                    your visitors into users
                  </h1>
                  <form
                    className="p-2 mt-8 transition duration-500 ease-in-out transform border2 bg-gray-50 md:mx-auto rounded-xl sm:max-w-3xl lg:flex"
                  >
                    <div className="divide-y lg:divide-x lg:divide-y-0 lg:flex space-y 4">
                      <div className="flex-1 min-w-0 revue-form-group">
                        <label htmlFor="name" className="sr-only">
                          Name
                        </label>
                        <input
                          id="name"
                          type="text"
                          className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform bg-transparent border border-transparent rounded-md focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                          placeholder="Enter your name "
                        />
                      </div>
                      <div className="flex-1 min-w-0 revue-form-group">
                        <label htmlFor="member_email" className="sr-only">
                          Email address
                        </label>
                        <input
                          id="cta-email"
                          type="email"
                          className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform bg-transparent border border-transparent rounded-md focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                          placeholder="Enter your email  "
                        />
                      </div>
                    </div>
                    <div className="mt-4 sm:mt-0 lg:ml-3 revue-form-actions">
                      <button
                        type="submit"
                        value="Subscribe"
                        name="member[subscribe]"
                        id="member_submit"
                        className="block w-full px-5 py-3 text-base font-medium text-white bg-[#4ade80] border border-transparent rounded-lg shadow hover:bg-[#50ae88] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 sm:px-10"
                      >
                        Notify me
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </React.Fragment>
  );
};

export default About;
