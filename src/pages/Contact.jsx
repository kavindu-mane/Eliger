import React, { lazy } from "react";
import { BiPhoneCall } from "react-icons/bi";
import { MdAlternateEmail, MdOutlineLocationOn } from "react-icons/md";
const Header = lazy(() => import("../components/common/Header"));
const Footer = lazy(() => import("../components/common/Footer"));
const Titles = lazy(() => import("../components/common/Titles"));
const BackgroundEffect = lazy(() =>
  import("../components/common/BackgroundEffect")
);

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

          {/* card */}
          <div className="mx-3 mb-20 grid w-11/12 grid-cols-1 rounded-md bg-white p-2 font-Poppins shadow-xl drop-shadow-xl dark:bg-slate-700 sm:w-fit lg:grid-cols-5">
            {/* left sude */}
            <div className="relative overflow-hidden rounded-md bg-gradient-to-b from-teal-500 to-slate-700 p-6 dark:bg-slate-750 dark:from-slate-750 lg:col-span-2">
              <h2 className="my-2 text-2xl font-semibold text-slate-50">
                Contact Information
              </h2>
              <h3 className="text-sm text-zinc-100 dark:text-zinc-300">
                Say something to start a live chat!
              </h3>
              <iframe
                title="location"
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2098.218159161397!2d79.85372429992796!3d6.901613889331618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2slk!4v1689902980040!5m2!1sen!2slk"
                className="my-8 h-60 w-full rounded-md border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              {/* contact information */}
              <div data-aos="fade-up" className="mb-10 mt-10 text-white">
                <h2 className="my-3 flex items-center">
                  <BiPhoneCall className="me-3" />
                  +94 112 85 64 89
                </h2>

                <a
                  href="mailto:contacts@eliger.com"
                  className="my-3 flex items-center"
                >
                  <MdAlternateEmail className="me-3" />
                  contacts@eliger.com
                </a>

                <h2 className="my-3 flex items-center">
                  <MdOutlineLocationOn className="me-3 h-4 w-4" />
                  No 32/3 ,Galle Road, Colombo 3.
                </h2>
              </div>
              {/* circles */}
              <div className="absolute bottom-10 end-10 h-28 w-28 rounded-full bg-[#fff9f921]"></div>
              <div className="absolute -bottom-16 -end-16 h-48 w-48 rounded-full bg-white/[0.12]"></div>
            </div>

            {/* right side */}
            <div className="flex flex-col justify-center p-3 ps-5 lg:col-span-3">
              {/* form */}
              <form action="" className="flex flex-col space-y-5">
                {/* name div */}
                <div className="flex flex-col justify-between space-y-5 sm:flex-row sm:space-x-4 sm:space-y-0">
                  {/* first name */}
                  <div data-aos="fade-left" className="space-y-2">
                    <label
                      htmlFor="fname"
                      className="block font-noto text-sm text-gray-900 after:ml-0.5 after:text-red-500 after:content-['*'] dark:text-white"
                    >
                      First name
                    </label>
                    <input
                      type="text"
                      id="fname"
                      name="fname"
                      className="block w-full rounded-md border border-gray-400 bg-slate-100 p-2.5 text-sm text-gray-900 placeholder:italic focus:border-blue-500 focus:ring-blue-500 dark:border-slate-500 dark:bg-slate-600 dark:text-white dark:placeholder-gray-300 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                      placeholder="john"
                      required
                    ></input>
                  </div>
                  {/* last name */}
                  <div data-aos="fade-left" className="space-y-2">
                    <label
                      htmlFor="lname"
                      className="block font-noto text-sm text-gray-900 after:ml-0.5 after:text-red-500 after:content-['*'] dark:text-white"
                    >
                      Last name
                    </label>
                    <input
                      type="text"
                      id="lname"
                      name="lname"
                      className="block w-full rounded-md border border-gray-400 bg-slate-100 p-2.5 text-sm text-gray-900 placeholder:italic focus:border-blue-500 focus:ring-blue-500 dark:border-slate-500 dark:bg-slate-600 dark:text-white dark:placeholder-gray-300 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                      placeholder="Tylor"
                      required
                    ></input>
                  </div>
                </div>
                {/* email */}
                <div data-aos="fade-left" className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block font-noto text-sm text-gray-900 after:ml-0.5 after:text-red-500 after:content-['*'] dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="block w-full rounded-md border border-gray-400 bg-slate-100 p-2.5 text-sm text-gray-900 placeholder:italic focus:border-blue-500 focus:ring-blue-500 dark:border-slate-500 dark:bg-slate-600 dark:text-white dark:placeholder-gray-300 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="example@domain.com"
                    required
                  ></input>
                </div>

                {/* message */}
                <div data-aos="fade-left" className="space-y-2">
                  <label
                    htmlFor="message"
                    className="block font-noto text-sm text-gray-900 after:ml-0.5 after:text-red-500 after:content-['*'] dark:text-white"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={8}
                    className="block w-full resize-none rounded-md border border-gray-400 bg-slate-100 p-2.5 text-sm text-gray-900 placeholder:italic focus:border-blue-500 focus:ring-blue-500 dark:border-slate-500 dark:bg-slate-600 dark:text-white dark:placeholder-gray-300 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="Write your message..."
                    required
                  />
                </div>

                {/* submit button */}
                <button
                  data-aos="fade-up"
                  type="submit"
                  className="place-self-end rounded-sm bg-slate-750 px-4 py-3 text-sm text-white duration-300 ease-in hover:bg-orange-500"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Contact;
