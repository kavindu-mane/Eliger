import React, { lazy } from "react";
const Header = lazy(() => import("../components/Header"));

const Error = () => {
  return (
    <React.Fragment>
      <Header/>
      <h1>Error</h1>
    </React.Fragment>
  );
};

export default Error;
