import React, { lazy } from "react";
const Header = lazy(() => import("../components/Header"));

const Ride = () => {
  return (
    <React.Fragment>
      <Header />
      <h1>Ride</h1>
    </React.Fragment>
  );
};

export default Ride;
