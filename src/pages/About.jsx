import React, { lazy } from "react";
const Header = lazy(() => import("../components/Header"));

const About = () => {
  return (
    <React.Fragment>
      <Header />
      <h1>About</h1>
    </React.Fragment>
  );
};

export default About;
