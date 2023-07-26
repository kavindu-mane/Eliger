import React, { lazy } from "react";
const Header = lazy(() => import("../components/Header"));
const Footer = lazy(() => import("../components/Footer"));
import PrivacyAccordion from "../components/privacy/PrivacyAccordion.jxs";

const Privacy = () => {
  return (
    <React.Fragment>
      <div className="flex min-h-screen flex-col items-center justify-between">
        <Header />
<PrivacyAccordion/>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Privacy;
