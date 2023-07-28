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
          <Titles title={"Terms & Conditions "}>
           
           
          </Titles>
          
        {/* center content */}
        
        <div className=" w-3/5 h-3/5 text-justify space-y-7"> 
          
            
          
          
        
              <p data-aos="fade-up"> 
           Welcome to our Eliger Driver and Vehicle Renting System.These Terms of Service  govern Your access to Eliger platform.By accessing and using Eliger, You agree to comply with these Terms.
           You may not access and use Eliger if You do not agree to the version of the Terms posted at the time You access Eliger. 
          </p>
                <div class="content-center">
                  <div class="... flex flex-col space-y-7 ">
                    {/* title border and styles of User Eligibility */}
                    <div class="  rounded-lg border-2 border-solid border-transparent ">
                     
                      
          
                      <text class="text-center font-extrabold"  >
                        
                        User Eligibility
                      </text>
                    </div>
                     
                   <div class="space-y-7" data-aos="fade-right">
                      Users must be at least 21 years old to rent a vehicle and
                      request a driver through our system. In some regions or
                      for specific vehicle categories, the minimum age
                      requirement may be higher (e.g., 25 years old). Users will
                      be required to provide valid proof of age during the
                      registration process.
                      
                        
                        
                      
                      Users must hold a valid driver's license issued by the
                      appropriate government authority. The license must be in
                      good standing and not be suspended, revoked, or expired.
                      Additionally, if the user wishes to drive the rented
                      vehicle personally, the license must be applicable to the
                      specific vehicle category being rented.
                       
                      All users must complete the identity verification process
                      before using our service. This is to ensure the safety and
                      security of the community. Users will be required to
                      provide accurate and up-to-date identification
                      information, which may include but is not limited to
                      government-issued ID cards, passports, or other relevant
                      documents.
                    </div>
                    
                    {/* title border and styles of Bookind and Payment */}
                    <div class="   w-1/2   rounded-lg border-2 border-solid border-transparent">
                      <text class="font-extrabold ">
                        Bookind and Payment
                      </text>
                    </div>
                    <div class="space-y-7"data-aos="fade-right">
                    
                       
                        
                        
                      
                     
                          Users can initiate the booking process through our
                          website or mobile application. During booking, users
                          will need to provide essential information, such as
                          the rental date and time, pick-up/drop-off location,
                          vehicle category, and any additional services
                       
                          Users are responsible for ensuring the accuracy of the
                          provided information. Any changes or modifications to
                          the booking details must be communicated to our
                          customer support team within the designated timeframe.
                        
                      
                      Vehicle availability is subject to demand and may vary
                      based on the selected date, time, and location. In the
                      event that the requested vehicle or driver is not
                      available, users will be notified and provided with
                      suitable alternatives.
                      
                       
                        
                    
                      To secure the booking, users must authorize payment using
                      the provided payment method. The system will hold a
                      pre-authorization charge on the user's payment account,
                      which will be released upon successful completion of the
                      rental period and vehicle inspection.
                     
                      Our system accepts various payment methods, including
                      credit/debit cards and other approved electronic payment
                      options. Users must ensure that their selected payment
                      method is valid and has sufficient funds to cover the
                      rental charges.
                    </div>
                    {/* title border and styles of  User Responsibilities */}
                    <div class="   w-1/2 rounded-lg border-2 border-solid border-transparent">
                      <text class="font-extrabold ">
                        User Responsibilities
                      </text>
                    </div>
                    
                       
                        
                        
                     <div class="space-y-7"data-aos="fade-right">
                      
                          Users must operate the rented vehicle responsibly and
                          in accordance with all local traffic laws and
                          regulations. Avoid reckless driving, speeding, and any
                          behavior that could endanger yourself, others, or the
                          vehicle.
                        
                          Do not operate the vehicle under the influence of
                          alcohol, drugs, or any substances that impair your
                          ability to drive safely.
                        
                      
                          Treat the rented vehicle with care and respect. Ensure
                          that it remains clean and free from excessive dirt,
                          spills, or damages during the rental period.
                        
                          Regularly check the vehicle's fluid levels, tire
                          pressure, and other essential components to ensure
                          safe and efficient operation. Report any mechanical
                          issues promptly to our customer support team.
                        
                      
                    </div>
                    {/* title border and styles of  Intellectual Property */}
                    <div class="   w-1/2  rounded-lg border-2 border-solid border-transparent">
                      <text class="font-extrabold">
                        Intellectual Property
                      </text>
                    </div>
                    
                         
                          
                       <div class="space-y-7"data-aos="fade-right">
                       
                            All intellectual property associated with our
                            Vehicle and Driver Rent System, including but not
                            limited to logos, trademarks, service marks, trade
                            names, graphics, designs, and software, are the
                            exclusive property of the service provider or its
                            licensors.
                         
                            Nothing in this agreement grants users any rights or
                            licenses to use our intellectual property without
                            the explicit written consent of the service
                            provider.
                          
                       
                        
                            Users are strictly prohibited from using,
                            reproducing, distributing, or displaying any of the
                            service provider's intellectual property without
                            obtaining prior written permission.
                          
                            Users shall not engage in any action that could harm
                            the reputation or goodwill associated with the
                          
                       
                            The service provider respects the rights of
                            copyright holders and will respond to valid
                            copyright infringement claims in accordance with
                          
                            If users believe that their copyrighted material has
                            been improperly used on our platform, they should
                            submit a detailed copyright infringement notice to
                            the service provider's designated agent.
                    </div>
                    {/* title border and styles of   Termination of Service */}
                    <div class="   w-1/2  rounded-lg border-2 border-solid border-transparent">
                      <text class="font-extrabold ">
                        Termination of Service
                      </text>
                    </div>
                    
                       <div class="space-y-7"data-aos="fade-right">
                            Users who violate any terms, conditions, or policies
                            outlined in the rental agreement, including but not
                            limited to the user eligibility terms, user
                            responsibilities, and intellectual property terms,
                         
                            The termination may occur after providing the user
                            with appropriate notice and an opportunity to
                            address and rectify the violation.
                          
                      

                      
                            Failure to make timely payments for rental charges,
                            additional services, fines, or damages may lead to
                            the termination of service.
                          
                            Users who dispute valid charges must follow the
                            established dispute resolution process to address
                            payment issues promptly.
                          
                      
                     
                            Misusing the Vehicle and Driver Rent System,
                            including but not limited to using the service for
                            unauthorized purposes or engaging in malicious
                            activities, may lead to the termination of service.
                          </div>
                    {/* title border and styles of   Cancellation and refund */}
                    
                      <text class="font-extrabold ">
                        Cancellation and Refund
                      </text>
                   
                    <div class="space-y-7"data-aos="fade-right">
                        Users may cancel their booking at any time before the
                        designated cancellation deadline without incurring
                        additional charges. The cancellation deadline will be
                        specified during the booking process.
                      
                        Cancellations made after the cancellation deadline may
                        result in applicable cancellation fees.
                      
                        To cancel a booking, users must contact our help &
                        support team via phone or email and provide the
                        necessary booking details.
                      
                      
                        We recommend canceling bookings as early as possible to
                        allow us to offer the vehicle and driver to other
                        potential users.
                      
                        Refunds for cancellations are subject to the
                        cancellation policy and the specific terms agreed upon
                        during the booking process.
                     </div>
                       
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
