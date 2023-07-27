import React, { lazy } from "react";
import { Label, TextInput, Button, Textarea } from "flowbite-react";
import { BiPhoneCall } from "react-icons/bi";
import { MdAlternateEmail, MdOutlineLocationOn } from "react-icons/md";
const Header = lazy(() => import("../components/Header"));
const Footer = lazy(() => import("../components/Footer"));
const BackgroundEffect = lazy(() => import("../components/BackgroundEffect"));

const Contact = () => {
  return (
    <React.Fragment>
      <div className="flex min-h-screen flex-col items-center justify-between">
        <Header />

        {/* middle container */}
        <div className="relative h-full w-screen">
          {/* bluer effect */}
          <BackgroundEffect />

          
        </div>

        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Contact;
