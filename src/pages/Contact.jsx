import React, { lazy } from "react";
import { Label, TextInput, Button, Textarea } from "flowbite-react";
import { BiPhoneCall } from "react-icons/bi";
import { MdAlternateEmail, MdOutlineLocationOn } from "react-icons/md";
const Header = lazy(() => import("../components/Header"));
const Footer = lazy(() => import("../components/Footer"));

const Contact = () => {
  return (
    <React.Fragment>
      <div className="flex min-h-screen flex-col items-center justify-between">
        <Header />
        <div className="my-10 grid grid-cols-1 rounded-md shadow-md drop-shadow-md lg:grid-cols-2">
          {/* left side */}
          <div className="justify-cente flex w-fit rounded-t-md bg-zinc-300 p-8 dark:bg-gray-800 lg:rounded-l-md lg:rounded-tr-none">
            <form className="flex max-w-md flex-col gap-4 sm:w-96">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="name" value="Your name" />
                </div>
                <TextInput
                  id="name"
                  type="text"
                  placeholder="Firstname + Lastname"
                  name="name"
                />
              </div>

              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email" value="Your email" />
                </div>
                <TextInput
                  helperText={
                    <>
                      We'll never share your details. Read our
                      <a
                        className="ml-1 font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                        href="privacy"
                      >
                        Privacy Policy
                      </a>
                      .
                    </>
                  }
                  id="email"
                  placeholder="name@domain.com"
                  required
                  type="email"
                  name="id"
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="message" value="Your message" />
                </div>
                <Textarea
                  id="message"
                  placeholder="Leave a message..."
                  required
                  name="message"
                  rows={5}
                />
              </div>

              <Button type="submit" name="send" className="mt-3">
                Send Message
              </Button>
            </form>
          </div>
          {/* right side */}
          <div className="rounded-b-md bg-gray-400 p-8 dark:bg-gray-700 lg:rounded-e-md lg:rounded-bl-none">
            <h2 className="flex items-center text-lg">
              <BiPhoneCall className="me-2 h-4 w-4" />
              Telephone :
            </h2>
            <h4 className="text-md mt-1 ps-6 italic">+94 112 85 64 89</h4>

            <h2 className="mt-5 flex items-center text-lg">
              <MdAlternateEmail className="me-2 h-4 w-4" />
              Email :
            </h2>
            <a
              href="mailto:contacts@eliger.com"
              className="text-md mt-1 ps-6 italic"
            >
              contacts@eliger.com
            </a>
            <h2 className="mt-5 flex items-center text-lg">
              <MdOutlineLocationOn className="me-2 h-4 w-4" />
              Address :
            </h2>
            <h4 className="text-md mt-1 ps-6 italic">
              No 32/3 ,<br /> Galle Road, <br />
              Colombo 3.
            </h4>
            <iframe
              title="location"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2098.218159161397!2d79.85372429992796!3d6.901613889331618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2slk!4v1689902980040!5m2!1sen!2slk"
              className=" mt-8 h-60 w-full rounded-md border-0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Contact;
