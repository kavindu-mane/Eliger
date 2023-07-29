import React, { lazy } from "react";
const Header = lazy(() => import("../components/Header"));
const Footer = lazy(() => import("../components/Footer"));
const BackgroundEffect = lazy(() => import("../components/BackgroundEffect"));

const Login = () => {
  return (
    <React.Fragment>
      <div className="flex min-h-screen flex-col items-center justify-between">
        <Header />
        {/* middle container */}
        <div className="relative flex h-full w-screen flex-col items-center">
          {/* bluer effect */}
          <BackgroundEffect />
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Login;
