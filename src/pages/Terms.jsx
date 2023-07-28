import React, { lazy } from "react";
const Header = lazy(() => import("../components/Header"));
const Footer = lazy(() => import("../components/Footer"));
const Titles = lazy(() => import("../components/Titles"));
const BackgroundEffect = lazy(() => import("../components/BackgroundEffect"));

const Terms = () => {
  return (
    <React.Fragment>
      <div className="flex min-h-screen flex-col items-center justify-between">
        <Header />
        {/* middle container */}
        <div className=" relevant flex h-full  w-screen flex-col items-center">
          {/* bluer effect */}
          <BackgroundEffect />
          <Titles title={"Terms & Conditions "}
            subtitle={"Welcome to our Eliger Driver and Vehicle Renting System. Before using our platform, please read following terms and conditions."}>
          </Titles>
        {/* center content */}
        
        <div className=" w-3/4  md:h-full text-justify space-y-7">
          <div
            class=" w-9/6 text-justify space-y-7 "
            
          >
            {/* outer border styles */}
        
              
                <div class="content-center">
                  <div class="... flex flex-col space-y-7">
                    {/* title border and styles of User Eligibility */}
                    <div class="  w-1/2  rounded-lg border-2 border-solid border-transparent bg-cyan-900">
                      <text class="text-center font-extrabold text-white">
                        
                        User Eligibility
                      </text>
                    </div>
                     
                    {/* sub title styles of    User Eligibility*/}
                    <ul class="list-inside list-decimal ">
                      <li>
                        &emsp;&emsp;Age Requirement
                        
                        
                      </li>
                      {/* content of the   User Eligibility*/}
                      Users must be at least 21 years old to rent a vehicle and
                      request a driver through our system. In some regions or
                      for specific vehicle categories, the minimum age
                      requirement may be higher (e.g., 25 years old). Users will
                      be required to provide valid proof of age during the
                      registration process.
                      
                      <li>
                        &emsp;&emsp;Valid Driver's License
                        
                        
                      </li>
                      Users must hold a valid driver's license issued by the
                      appropriate government authority. The license must be in
                      good standing and not be suspended, revoked, or expired.
                      Additionally, if the user wishes to drive the rented
                      vehicle personally, the license must be applicable to the
                      specific vehicle category being rented.
                      <li>
                        &emsp;&emsp;Identity Verification
                       
                      </li>
                      All users must complete the identity verification process
                      before using our service. This is to ensure the safety and
                      security of the community. Users will be required to
                      provide accurate and up-to-date identification
                      information, which may include but is not limited to
                      government-issued ID cards, passports, or other relevant
                      documents.
                    </ul>
                    
                    {/* title border and styles of Bookind and Payment */}
                    <div class="   w-1/2   rounded-lg border-2 border-solid border-transparent bg-cyan-900">
                      <text class="font-extrabold text-white">
                        Bookind and Payment
                      </text>
                    </div>
                    {/* sub title styles of    Bookind and Payment*/}
                    <ul class="list-inside list-decimal ">
                      <li>
                        &emsp;&emsp;Booking Process
                        
                        
                      </li>
                      {/* content of the   Bookind and Payment*/}
                      <ul class="list-inside list-none  ">
                        <li>
                          Users can initiate the booking process through our
                          website or mobile application. During booking, users
                          will need to provide essential information, such as
                          the rental date and time, pick-up/drop-off location,
                          vehicle category, and any additional services
                          required.
                        </li>
                        <li>
                          Users are responsible for ensuring the accuracy of the
                          provided information. Any changes or modifications to
                          the booking details must be communicated to our
                          customer support team within the designated timeframe.
                        </li>
                      </ul>
                      <li>
                        &emsp;&emsp;Confirmation and Availability
                       
                        
                      </li>
                      Vehicle availability is subject to demand and may vary
                      based on the selected date, time, and location. In the
                      event that the requested vehicle or driver is not
                      available, users will be notified and provided with
                      suitable alternatives.
                      <li>
                        &emsp;&emsp;Payment Authorization
                       
                        
                      </li>
                      To secure the booking, users must authorize payment using
                      the provided payment method. The system will hold a
                      pre-authorization charge on the user's payment account,
                      which will be released upon successful completion of the
                      rental period and vehicle inspection.
                      <li>
                        &emsp;&emsp;Payment Methods
                      
                        
                      </li>
                      Our system accepts various payment methods, including
                      credit/debit cards and other approved electronic payment
                      options. Users must ensure that their selected payment
                      method is valid and has sufficient funds to cover the
                      rental charges.
                    </ul>
                    {/* title border and styles of  User Responsibilities */}
                    <div class="   w-1/2 rounded-lg border-2 border-solid border-transparent bg-cyan-900">
                      <text class="font-extrabold text-white">
                        User Responsibilities
                      </text>
                    </div>
                    {/* sub title styles of   User Responsibilities*/}
                    <ul class="list-inside list-decimal ">
                      <li>
                        &emsp;&emsp;Safe and Responsible Conduct
                       
                        
                        
                      </li>
                      {/* content of the   User Responsibilities */}
                      <ul class="list-inside list-none  ">
                        <li>
                          Users must operate the rented vehicle responsibly and
                          in accordance with all local traffic laws and
                          regulations. Avoid reckless driving, speeding, and any
                          behavior that could endanger yourself, others, or the
                          vehicle.
                        </li>
                        <li>
                          Do not operate the vehicle under the influence of
                          alcohol, drugs, or any substances that impair your
                          ability to drive safely.
                        </li>
                      </ul>
                      <li>
                        &emsp;&emsp;Vehicle Care and Maintenance
                        
                        
                      </li>
                      <ul class="list-inside list-none  ">
                        <li>
                          Treat the rented vehicle with care and respect. Ensure
                          that it remains clean and free from excessive dirt,
                          spills, or damages during the rental period.
                        </li>
                        <li>
                          Regularly check the vehicle's fluid levels, tire
                          pressure, and other essential components to ensure
                          safe and efficient operation. Report any mechanical
                          issues promptly to our customer support team.
                        </li>
                      </ul>
                    </ul>
                    {/* title border and styles of  Intellectual Property */}
                    <div class="   w-1/2  rounded-lg border-2 border-solid border-transparent bg-cyan-900">
                      <text class="font-extrabold text-white">
                        Intellectual Property
                      </text>
                    </div>
                    {/* sub title styles of  Intellectual Property */}
                    <div class="... flex flex-col space-y-7">
                      <ul class="list-inside list-decimal ">
                        <li>
                          &emsp;&emsp;Ownership of Intellectual Property
                         
                          
                          {/* content of the Intellectual Property */}
                        </li>
                        <ul class="list-inside list-none ">
                          <li>
                            All intellectual property associated with our
                            Vehicle and Driver Rent System, including but not
                            limited to logos, trademarks, service marks, trade
                            names, graphics, designs, and software, are the
                            exclusive property of the service provider or its
                            licensors.
                          </li>
                          <li>
                            Nothing in this agreement grants users any rights or
                            licenses to use our intellectual property without
                            the explicit written consent of the service
                            provider.
                          </li>
                        </ul>
                        <li>
                          &emsp;&emsp;Prohibited Use of Intellectual Property
                          
                          
                          
                        </li>
                        <ul class="list-inside list-none  ">
                          <li>
                            Users are strictly prohibited from using,
                            reproducing, distributing, or displaying any of the
                            service provider's intellectual property without
                            obtaining prior written permission.
                          </li>
                          <li>
                            Users shall not engage in any action that could harm
                            the reputation or goodwill associated with the
                            service provider's intellectual property.
                          </li>
                        </ul>
                        <li>
                          &emsp;&emsp;Copyright Infringement Claims
                          
                          
                          
                        </li>
                        <ul class="list-inside list-none ">
                          <li>
                            The service provider respects the rights of
                            copyright holders and will respond to valid
                            copyright infringement claims in accordance with
                            applicable laws and regulations.
                          </li>
                          <li>
                            If users believe that their copyrighted material has
                            been improperly used on our platform, they should
                            submit a detailed copyright infringement notice to
                            the service provider's designated agent.
                          </li>
                        </ul>
                      </ul>
                    </div>
                    {/* title border and styles of   Termination of Service */}
                    <div class="   w-1/2  rounded-lg border-2 border-solid border-transparent bg-cyan-900">
                      <text class="font-extrabold text-white">
                        Termination of Service
                      </text>
                    </div>
                    {/* sub title styles of    Termination of Service*/}
                    <ul class="list-inside list-decimal ">
                      <li>
                        &emsp;&emsp;Breach of Terms and Policies
                        
                        
                        
                        {/* content of the Termination of Service */}
                        <ul class="list-inside list-none  ">
                          <li>
                            Users who violate any terms, conditions, or policies
                            outlined in the rental agreement, including but not
                            limited to the user eligibility terms, user
                            responsibilities, and intellectual property terms,
                            may face termination of service.
                          </li>
                          <li>
                            The termination may occur after providing the user
                            with appropriate notice and an opportunity to
                            address and rectify the violation.
                          </li>
                        </ul>
                      </li>

                      <li>
                        &emsp;&emsp;Non-Payment or Payment Disputes
                       
                       
                       
                        <ul class="list-inside list-none  ">
                          <li>
                            Failure to make timely payments for rental charges,
                            additional services, fines, or damages may lead to
                            the termination of service.
                          </li>
                          <li>
                            Users who dispute valid charges must follow the
                            established dispute resolution process to address
                            payment issues promptly.
                          </li>
                        </ul>
                      </li>
                      <li>
                        &emsp;&emsp;Misuse of Service
                      
                       
                       
                        <ul class="list-inside list-none  ">
                          <li>
                            Misusing the Vehicle and Driver Rent System,
                            including but not limited to using the service for
                            unauthorized purposes or engaging in malicious
                            activities, may lead to the termination of service.
                          </li>
                        </ul>
                      </li>
                    </ul>
                    {/* title border and styles of   Cancellation and refund */}
                    <div class="   w-1/2 rounded-lg border-2 border-solid border-transparent bg-cyan-900">
                      <text class="font-extrabold text-white">
                        Cancellation and Refund
                      </text>
                    </div>
                    {/* sub title styles of   Cancellation and Refund*/}
                  </div>
                  <ul class="list-inside list-decimal ">
                    <li>
                      &emsp;&emsp;Cancellation Policy
                  
                     
                     
                    </li>
                    <div class="mb-1">
                    <ul class="list-inside list-none  ">
                      <li>
                        Users may cancel their booking at any time before the
                        designated cancellation deadline without incurring
                        additional charges. The cancellation deadline will be
                        specified during the booking process.
                      </li>
                      <li>
                        Cancellations made after the cancellation deadline may
                        result in applicable cancellation fees.
                      </li>
                    </ul>
                    </div>
                    <li>
                      &emsp;&emsp;Cancellation Process
                      
                      
                      
                    </li>
                    <ul class="list-inside list-none  ">
                      <li>
                        To cancel a booking, users must contact our help &
                        support team via phone or email and provide the
                        necessary booking details.
                      </li>
                      <li>
                        We recommend canceling bookings as early as possible to
                        allow us to offer the vehicle and driver to other
                        potential users.
                      </li>
                    </ul>
                    <li>
                      &emsp;&emsp;Refund Eligibility
                      
                      
                      
                    </li>
                    <ul class="list-inside list-none  ">
                      <li>
                        Refunds for cancellations are subject to the
                        cancellation policy and the specific terms agreed upon
                        during the booking process.
                      </li>
                      <li>
                        Refunds may be provided for the base rental fee,
                        excluding any applicable taxes, fees, insurance, or
                        additional services.
                      </li>
                    </ul>
                  </ul>
                  
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
