import React, { lazy } from "react";
const Header = lazy(() => import("../components/common/Header"));
const Footer = lazy(() => import("../components/common/Footer"));

const Error = () => {
  return (
    <React.Fragment>
      <div className="flex min-h-screen flex-col items-center justify-between">
        <Header />
        <div className="text-center">
          <h1 className="mb-5 font-noto text-2xl md:text-4xl">
            404 | Page not found.
          </h1>
          <a href="/" className="text-lg italic text-sky-500 dark:text-sky-300">
            Go to Home Page
          </a>
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Error;
