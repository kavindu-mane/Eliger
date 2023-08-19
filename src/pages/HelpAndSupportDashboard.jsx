import React, { lazy } from "react";
import topics from "../components/Data/HelpandsupportData";
const HeaderSecondary = lazy(() =>
  import("../components/common/HeaderSecondary")
);
const FooterSecondary = lazy(() =>
  import("../components/common/FooterSecondary")
);
const BackgroundEffect = lazy(() =>
  import("../components/common/BackgroundEffect")
);
const SideBar = lazy(() => import("../components/common/SideBar"));

const HelpAndSupportDashboard = () => {
  return (
    <React.Fragment>
      <div className="flex min-h-screen flex-col items-center justify-between">
        {/* middle container */}
        <div className="relative flex h-full w-screen flex-col items-center">
          {/* bluer effect */}
          <BackgroundEffect />
          <HeaderSecondary />
          {/* Content-Area */}
          <div className="flex min-h-screen w-screen flex-col lg:flex-row">
            {/* Side Bar Area */}
            <div className="h-auto min-h-max w-full lg:w-1/4 xl:w-1/5">
              <SideBar title={"Help And Support"} dataset={topics} />
            </div>

            {/* Body Area */}
            <div className="h-auto min-h-max w-full lg:w-3/4 xl:w-4/5">
              {/*Two Graphs*/}
              <div className="h-auto w-full lg:h-1/2">
                <div className="flex flex-col pl-10 lg:flex-row">
                  {/* <gr1 data={data} /> */}
                  <div className="mb-4 mr-10 mt-10 border border-slate-500 pl-4 pt-8 text-center text-xl">
                    {/* Graphs */}
                  </div>
                  <div className="mb-4 mr-10 mt-10 border border-slate-500 pl-4 pt-8 text-center text-xl">
                    {/* Graphs */}
                  </div>

                  {/* <gr2 /> */}
                </div>
              </div>

              {/*vehicle registration*/}
              <div className="h-auto w-full pl-8 pr-8 lg:h-1/2">
                <div className="border border-slate-500 p-1 pb-4 pt-4 text-center text-2xl">
                  {/* New Vehicle Registrations */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <FooterSecondary />
      </div>
    </React.Fragment>
  );
};
export default HelpAndSupportDashboard;
