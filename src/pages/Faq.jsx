import { Accordion } from "flowbite-react";
import React, { lazy } from "react";
const Header = lazy(() => import("../components/Header"));
const Footer = lazy(() => import("../components/Footer"));

const Faq = () => {
  return (
    <React.Fragment>
      <div className="flex min-h-screen flex-col items-center justify-between">
        <Header />
        <p className="text-4xl font-bold	md:font-serif	">FAQ</p>
        <Accordion collapseAll>
          <Accordion.Panel>
            <Accordion.Title>
              What payment methods are accepted ?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                <p>You can use credit/debit cards</p>
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>Why can't I request a ride ?</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                <p>You will be unable to request a vehicle if,</p>
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                <p>You are currently in an area where no Eliger facilities</p>
                <p>GPS or internet connection is unavailable</p>
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>How to edit my account? </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                <p>
                  You may go to 'Edit profile' menu option to update your
                  contact details
                </p>
              </p>
            </Accordion.Content>
          </Accordion.Panel>

          <Accordion.Panel>
            <Accordion.Title>
              How can I contact customer support in case of issues?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                <p>
                  Yes.We charge 10% of of your free upfrount
                </p>
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>
              Are there any cancellation charges?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                <p>
                  As we provide contact details of customer support section so
                  that users can reach out for assistance with any problems they
                  encounter.
                </p>
              </p>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Faq;
