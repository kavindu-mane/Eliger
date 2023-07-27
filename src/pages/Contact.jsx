import React, { lazy } from "react";
import { Label, TextInput, Button, Textarea } from "flowbite-react";
import { BiPhoneCall } from "react-icons/bi";
import { MdAlternateEmail, MdOutlineLocationOn } from "react-icons/md";
const Header = lazy(() => import("../components/Header"));
const Footer = lazy(() => import("../components/Footer"));
const Titles = lazy(() => import("../components/Titles"));
const BackgroundEffect = lazy(() => import("../components/BackgroundEffect"));

const Contact = () => {
  return (
    <React.Fragment>
      <div className="flex min-h-screen flex-col items-center justify-between">
        <Header />

        {/* middle container */}
        <div className="relative flex h-full w-screen flex-col items-center">
          {/* bluer effect */}
          <BackgroundEffect />
          <Titles
            title={"Contact Us"}
            subtitle={"Any question or remarks? Just write us a message!"}
          />
        </div>

        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Contact;
