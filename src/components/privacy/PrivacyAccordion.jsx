import React from 'react'
import { Accordion } from 'flowbite-react';


export default function PrivacyAccordion() {
  return (

  
    <div>
      <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">PRIVACY POLICY of <span class="text-green-600 dark:text-green-500">ELIGER</span></h1>
      <div class="Grid grid=cols-1 gap-6 sm:grid-cols-2">

      <h4 class="text-2xl font-bold dark:text-white"><span class="text-green-600 dark:text-green-500"> Eliger</span> collects some Personal Data from its Users. </h4>
<p>
Welcome to our Eliger Vehicle Renting System! We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, share, and retention your data when you interact with our platform. By accessing or using our Vehicle Renting System, you consent to the practices described in this policy.
</p>
<img class="h-auto max-w-lg" src="privacy-2.svg"></img>
     
   
<p>
    <div><Accordion>
    <Accordion.Panel>
      <Accordion.Title>
      Information Collection
      </Accordion.Title>
      <Accordion.Content>
        <p className="mb-2 text-gray-500 dark:text-gray-400">
          <p>
          When you sign up for an account or use our Eliger, we may collect certain personal information such as your name, contact details, driver's license information, and payment details. This information is necessary for us to process your rental requests and ensure a smooth experience.
          </p>
        </p>

      </Accordion.Content>
    </Accordion.Panel>
    <Accordion.Panel>
      <Accordion.Title>
      Use Of Information
      </Accordion.Title>
      <Accordion.Content>
        <p className="mb-2 text-gray-500 dark:text-gray-400">
          <p>
          The information we collect will be used primarily to process your vehicle rental requests, manage your account, communicate with you, and provide customer support. We may also use your data to improve our services, personalize your experience, and send you promotional offers or updates related to our Vehicle Renting System.

          </p>
        </p>
       
           
      </Accordion.Content>
    </Accordion.Panel>
    <Accordion.Panel>
      <Accordion.Title>
      Data Sharing
      </Accordion.Title>
      <Accordion.Content>
        <p className="mb-2 text-gray-500 dark:text-gray-400">
          <p>
          We understand the importance of keeping your personal information confidential. As such, we will not sell, trade, or rent your data to third parties without your explicit consent. However, we may share your information with trusted partners and service providers who assist us in operating our platform, subject to strict confidentiality agreements.
          </p>
        </p>
      </Accordion.Content>
    </Accordion.Panel>
      
   
    <Accordion.Panel>
      <Accordion.Title>
      Data Security
      </Accordion.Title>
      <Accordion.Content>
        <p className="mb-2 text-gray-500 dark:text-gray-400">
          <p>
          Safeguarding your data is a top priority for us. We employ industry-standard security measures to protect against unauthorized access, disclosure, or alteration of your information. Our platform utilizes encryption and regular security audits to ensure the safety of your data.

          </p>
        </p>
      </Accordion.Content>
    </Accordion.Panel> 

    <Accordion.Panel>
      <Accordion.Title>
      User Accecss and Control
      </Accordion.Title>
      <Accordion.Content>
        <p className="mb-2 text-gray-500 dark:text-gray-400">
          <p>
          You have the right to access, update, or delete your personal information stored in our Vehicle Renting System. If you wish to exercise these rights or have any concerns regarding your data, please contact our customer support team, and we will assist you promptly.
          
          </p>
        </p>
      </Accordion.Content>
    </Accordion.Panel>
      
    <Accordion.Panel>
      <Accordion.Title>
      Data Retention
      </Accordion.Title>
      <Accordion.Content>
        <p className="mb-2 text-gray-500 dark:text-gray-400">
          <p>
          We will retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law. Once your data is no longer needed, we will securely dispose of it or anonymize it for statistical analysis.
          </p>
        </p>
      </Accordion.Content>
    </Accordion.Panel>

    <Accordion.Panel>
      <Accordion.Title>
      Changes To The Privacy Policy
      </Accordion.Title>
      <Accordion.Content>
        <p className="mb-2 text-gray-500 dark:text-gray-400">
          <p>
          Changes to the Privacy Policy: We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. You are encouraged to review this page periodically for any modifications. Your continued use of our services after the changes signifies your acceptance of the updated policy.
          </p>
        </p>
      </Accordion.Content>
    </Accordion.Panel>



  </Accordion>
</div>
        
  </p>      
 

</div>


</div>




  )
}