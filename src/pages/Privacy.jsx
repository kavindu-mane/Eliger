import React, { lazy } from "react";
const Header = lazy(() => import("../components/Header"));
const Footer = lazy(() => import("../components/Footer"));

const Privacy = () => {
  return (
    <React.Fragment>
      <div className="flex min-h-screen flex-col items-center justify-between">
        <Header />
        <section>
          <div className=" flex flex-col items-center px-5 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="flex flex-col w-full max-w-3xl mx-auto prose text-left prose-blue">
              <div className="w-full mx-auto">
                <h1 className="max-w-5xl text-2xl font-bold leading-none tracking-tighter text-white-600 md:text-5xl lg:text-6xl lg:max-w-7xl pb-12 pt-4">
                  Privacy Policy
                </h1>
                <h2 className="max-w-5xl text-1xl font-bold leading-none tracking-tighter text-white-600 md:text-5xl lg:text-6xl lg:max-w-7xl">
                  Small Title
                </h2>
                <p>
                  Right. Say that again. No, no, George, look, it's just an act, right?
                  Okay, so 9:00 you're strolling through the parking lot, you see us
                  struggling in the car, you walk up, you open the door and you say,
                  your line, George. Stop it. We're gonna take a little break but we'll
                  be back in a while so, don't nobody go no where.
                </p>
              </div>
            </div>
          </div>
          <div className=" flex flex-col items-center px-5 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="flex flex-col w-full max-w-3xl mx-auto prose text-left prose-blue">
              <div className="w-full mx-auto">
                <h2 className="max-w-5xl text-xl font-bold leading-none tracking-tighter text-white-600 md:text-5xl lg:text-6xl lg:max-w-7xl">
                  Small Title
                </h2>
                <p>
                  Right. Say that again. No, no, George, look, it's just an act, right?
                  Okay, so 9:00 you're strolling through the parking lot, you see us
                  struggling in the car, you walk up, you open the door and you say,
                  your line, George. Stop it. We're gonna take a little break but we'll
                  be back in a while so, don't nobody go no where.
                </p>
                <p>
                  Right. Say that again. No, no, George, look, it's just an act, right?
                  Okay, so 9:00 you're strolling through the parking lot, you see us
                  struggling in the car, you walk up, you open the door ..
                </p>
              </div>
            </div>
          </div>
          <div className=" flex flex-col items-center px-5 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="flex flex-col w-full max-w-3xl mx-auto prose text-left prose-blue">
              <div className="w-full mx-auto">
                <h2 className="max-w-5xl text-1xl font-bold leading-none tracking-tighter text-white-600 md:text-5xl lg:text-6xl lg:max-w-7xl">
                  Small Title
                </h2>
                <p>
                  Right. Say that again. No, no, George, look, it's just an act, right?
                  Okay, so 9:00 you're strolling through the parking.
                </p>
                <ul>
                  <li>Expensive feature.</li>
                  <li>Expensive feature.</li>
                  <li>Expensive feature.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center px-5 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8 ">
            <div className="flex flex-col w-full mb-8 prose text-left max-w-max lg:max-w-2xl">
              <div className="w-full mx-auto">
                <h2 className="max-w-5xl  font-bold leading-none tracking-tighter text-white-600 md:text-5xl lg:text-6xl lg:max-w-7xl">
                  Small Title
                </h2>
                <p>
                  Right. Say that again. No, no, George, look, it's just an act, right?
                  Okay, so 9:00 you're strolling through the parking lot, you see us
                  struggling in the car, you walk up, you open the door and you say,
                  your line, George. Stop it. We're gonna take a little break but we'll
                  be back in a while so, don't nobody go no where.
                </p>
              </div>
            </div>
          </div>
          <div className=" items-center w-full px-5">
            <div className="flex flex-wrap justify-center w-full mx-auto prose max-w-max lg:max-w-3xl">
              <div className="relative justify-center lg:px-4">
                <div className="lg:grid lg:grid-cols-2">
                  <div className="p-8">
                    <h1 className="font-bold">Short length headline.</h1>
                    <p>
                      You're about to launch soon and must be 100% focused on your
                      product. Don't loose precious days designing, coding the landing
                      page and testing .
                    </p>
                    <button className="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600" title="read more">
                      Read More »
                    </button>

                  </div>
                  <div className="p-8">
                    <h1 className="font-bold">Short length headline.</h1>
                    <p>
                      You're about to launch soon and must be 100% focused on your
                      product. Don't loose precious days designing, coding the landing
                      page and testing .
                    </p>
                    <button className="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600" title="read more">
                      Read More »
                    </button>

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex flex-col items-center px-5 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8 pb-12">
            <div className="flex flex-col w-full max-w-3xl mx-auto prose text-left prose-blue">
              <div className="w-full mx-auto">
                <h2 className="max-w-5xl font-bold  md:text-5xl lg:text-6xl lg:max-w-7xl">
                  Small Title
                </h2>
                <p>
                  Right. Say that again. No, no, George, look, it's just an act, right?
                  Okay, so 9:00 you're strolling through the parking lot, you see us
                  struggling in the car, you walk up, you open the door and you say,
                  your line, George. Stop it. We're gonna take a little break but we'll
                  be back in a while so, don't nobody go no where.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Privacy;
