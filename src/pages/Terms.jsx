import React, { lazy } from "react";
const Header = lazy(() => import("../components/Header"));
const Footer = lazy(() => import("../components/Footer"));

const Terms = () => {
  return (
    <React.Fragment>
      <div className="flex min-h-screen flex-col items-center justify-between">
        <Header />
<div
          class="right-container"
          border-1px
          solid
          black
          height-300px
          margin
          top-180px
          width-180px
          float-left
          border
          radius-10px
        >
          {" "}
          <div class="... flex flex-col space-y-7">
            <div className="flex items-center justify-center">
              <h1 class="text-4xl">TERMS & CONDITIONS </h1>
            </div>
            <div class="... flex flex-col space-y-4">
              <div class="text-center">
                <p class="text-1xl">
                  Welcome to Eliger Vehicle and Driver Renting System. Before
                  you proceed with using our services, we kindly ask you to read
                  and understand the following terms and conditions. By using
                  our platform, you agree to comply with these terms and be
                  bound by them.
                </p>
              </div>
            </div>
            <div class="... flex flex-col space-y-7">
              <div class="grid grid-cols-1 divide-y">
                <div class="font-extrabold">
                  <h3 class="text-1xl">1.User Eligibility:</h3>
                </div>

                <div className>
                  <p class="italic">
                    Specify that users must be of legal age and have the legal
                    capacity to enter into agreements to use the platform.
                    Outline any additional requirements for drivers, such as
                    possessing a valid driver's license and meeting specific
                    criteria.
                  </p>
                </div>
              </div>
            </div>
            <div class="grid grid-cols-1 divide-y">
              <div class="font-extrabold">
                <h3>2.Booking and Payment:</h3>
              </div>
              <div class="pgcont1">
                <p class="italic">
                  Users can make reservations for vehicles and drivers through
                  the online system. Payment for the services must be made
                  through approved payment methods on the platform.
                </p>
              </div>
            </div>
            <div class="grid grid-cols-1 divide-y">
              <div className="font-extrabold">
                <h3>3.Cancellation and Refunds:</h3>
              </div>
              <div class="pgcont1">
                <p class="italic">
                  Users may cancel their bookings subject to the platform&#39;s
                  cancellation policy. Refunds, if applicable, will be processed
                  as per the platform&#39;s refund policy.
                </p>
              </div>
            </div>
            <div class="grid grid-cols-1 divide-y">
              <div class="font-extrabold">
                <h3>4.User Responsibilities:</h3>
              </div>
              <div class="pgcont1">
                <p class="italic">
                  Users are responsible for providing accurate information
                  during the booking process and ensuring compliance with local
                  laws, including traffic regulations.
                </p>
              </div>
            </div>
            <div class="grid grid-cols-1 divide-y">
              <div class="font-extrabold">
                <h3>5.Driver Conduct</h3>
              </div>
              <div class="pgcont1">
                <p class="italic">
                  Users must treat hired drivers with respect and adhere to
                  local customs and laws. Inappropriate behavior or harassment
                  of drivers will not be tolerated.
                </p>
              </div>
            </div>
            <div class="grid grid-cols-1 divide-y">
              <div class="font-extrabold">
                <h3>6.Intellectual Property</h3>
              </div>
              <div class="pgcont1">
                <p class="italic">
                  All content, logos, and trademarks on the platform are the
                  property of the platform and may not be used without prior
                  permission.
                </p>
              </div>
            </div>
            <div class="grid grid-cols-1 divide-y">
              <div class="font-extrabold">
                <h3>6.Relationship Driver Pasenger</h3>
              </div>
              <div class="pgcont1">
                <p class="italic">
                  The user acknowledges and agrees is not liable for any act or
                  omissions committed by any user, whether by robbery,
                  commitment break as a result of any act, discussions, and
                  others including the effective fulfillment of the obligations
                  assumed by the users and loss not being for tax purposes. The
                  user acknowledges and agrees that, by registering and
                  accepting the policy of the service, does so at his total
                  means and exclusive risk
                </p>
              </div>
            </div>
            <div class="grid grid-cols-1 divide-y">
              <div class="font-extrabold">
                <h3>7.Contact Information:</h3>
              </div>
              <div class="pgcont1">
                <p class="italic">
                  Users can contact the help &amp; support staff for any
                  inquiries, feedback, or complaints.
                </p>
              </div>
            </div>
            <div class="grid grid-cols-1 divide-y">
              <div class="font-extrabold">
                <h3>8.Termination of Service:</h3>
              </div>
              <div class="pgcont1">
                <p class="italic">
                  The platform may terminate or suspend services to users in
                  case of violations of these terms and conditions or any
                  illegal activities.
                </p>
              </div>
            </div>
          </div>
        </div>
       
    
    
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Terms;
