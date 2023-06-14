import React, { lazy } from "react";
const Header = lazy(() => import("../components/Header"));

const Privacy = () => {
  return (
    <React.Fragment>
      <Header/>
      <h1>Privacy</h1>
    </React.Fragment>
  );
};

export default Privacy;
