import React, { lazy } from "react";
const Header = lazy(() => import("../components/common/Header"));
const Footer = lazy(() => import("../components/common/Footer"));
const FindVehicles = lazy(() => import("../components/common/FindVehicles"));

const Search = () => {
  return (
    <React.Fragment>
      <div className="flex min-h-screen flex-col items-center justify-between bg-slate-200 dark:bg-gray-800">
        {/* header */}
        <Header />
        {/* container */}
        <div className="flex w-full flex-col-reverse xl:flex-row">
          <div className="flex w-full flex-col items-center justify-center xl:w-1/2">
            <FindVehicles isEmbed={true} />
          </div>
          <div className="w-full xl:w-1/2"></div>
        </div>
        {/* footer */}
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Search;
