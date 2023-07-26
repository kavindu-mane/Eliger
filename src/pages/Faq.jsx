import { useState } from "react";
import Accordion from "../components/Accordion";
import React, { lazy } from "react";
const Header = lazy(() => import("../components/Header"));
const Footer = lazy(() => import("../components/Footer"));

function Faq(){
  const [list, setlist] = useState([
    {
      question: "What payment methods are accepted ?",
      answer: "You can use credit/debit cards",
    },
    {
      question:
        "Why can't request a ride You will be unable to request a vehicle?",
      answer:
        "You will be unable to request a PickMe driver if: You are currently in an area where no Eliger or GPS or internet connection is unavailable: You are required to check the functionality of the internet connection on your device",
    },
    {
      question: "How to edit my account?",
      answer:
        "You may go to <Edit profile> menu option to update your contact details",
    },
    {
      question: "How can I contact customer support in case of issues?",
      answer:
        "As we provide contact details of customer support section so that users can reach out for assistance with any problems they encounter.",
    },
    {
      question: "Are there any cancellation charges?",
      answer: "No",
    }
  ]);
  return (
    <React.Fragment>
      <div className="flex min-h-screen flex-col items-center justify-between">
        <Header />
<div>
          <div className="list ">
            <div className=" font-bold text-3xl	">FAQ.</div>
            {/*begin item*/}
            {list.map((item, key) => (
              <Accordion key={key} datas={item} />
            ))}
            {/*end item*/}
          </div>
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Faq;
