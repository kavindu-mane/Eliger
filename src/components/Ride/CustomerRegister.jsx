import React, { lazy } from "react";
const Header = lazy(() => import("../Header"));
const Footer = lazy(() => import("../Footer"));
const BackgroundEffect = lazy(() => import("../BackgroundEffect"));

const CustomerRegister = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      {/* middle container */}
      <div className="relative flex h-full w-screen flex-col items-center">
        {/* bluer effect */}
        <BackgroundEffect />
      </div>
      <Footer />
    </div>
  );
};

export default CustomerRegister;
