import React, { lazy } from "react";
const Header = lazy(() => import("../components/Header"));

const Contact = () => {
  return (
    <React.Fragment>
      <Header/>
      <h1>Contacts</h1>
    </React.Fragment>
  );
};

export default Contact;
