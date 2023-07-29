import React, { lazy } from "react";
const CustomerRegister = lazy(() => import("../components/Ride/CustomerRegister"))

const Ride = () => {
  return (
    <React.Fragment>
      <CustomerRegister/>
    </React.Fragment>
  );
};

export default Ride;
