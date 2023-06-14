import React, { lazy } from "react";
const Header = lazy(() => import("../components/Header"));

const Faq = () => {
  return (
    <React.Fragment>
      <Header/>
      <h1>FAQ</h1>
    </React.Fragment>
  );
};

export default Faq;
