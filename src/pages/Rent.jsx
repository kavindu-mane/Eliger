import React, { lazy } from "react";
const OwnerRegister = lazy(() => import("../components/Rent/OwnerRegister"));

const Drive = () => {

  return (
    <React.Fragment>
      <OwnerRegister />
    </React.Fragment>
  );
};

export default Drive;
