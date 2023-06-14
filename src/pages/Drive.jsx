import React, { lazy } from "react";
const Header = lazy(() => import("../components/Header"));

const Drive = () => {
  return (
    <React.Fragment>
      <Header/>
      <h1>Drive</h1>
    </React.Fragment>
  );
};

export default Drive;
