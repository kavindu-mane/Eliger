import React, { lazy, useState } from "react";
import topics from "../Data/AdminSidebarData";
const StatGraphs = lazy(() => import("../Components/Admin/StatGraphs"));
const NewVehicleReg = lazy(() => import("../Components/Admin/NewVehicleReg"));
const HeaderSecondary = lazy(() =>
  import("../Components/Common/HeaderSecondary")
);
const FooterSecondary = lazy(() =>
  import("../Components/Common/FooterSecondary")
);
const BackgroundEffect = lazy(() =>
  import("../Components/Common/BackgroundEffect")
);
const SideBar = lazy(() => import("../Components/Common/SideBar"));
const CreateHelpAccount = lazy(() =>
  import("../Components/Admin/CreateHelpAccount")
);

const Admindashboard = () => {
  //Component loading state hook
  const [activeComp, setActiveComp] = useState(0);

  return (
    <React.Fragment>
      {/* container */}
      <div className="relative flex h-full w-screen flex-col items-center">
        {/* bluer effect */}
        <BackgroundEffect />
        <HeaderSecondary />
        {/* Content-Area */}
        <div className="flex w-screen flex-col lg:h-screen lg:flex-row lg:overflow-hidden">
          {/* Side Bar Area */}
          <div className="w-full min-w-max lg:h-screen lg:max-w-xs">
            <SideBar
              title={"Administrator"}
              dataset={topics}
              setActiveComp={setActiveComp}
            />
          </div>

          {/* Body Area */}
          <div className="relative flex w-full flex-col justify-between px-5 pt-4 md:px-10 lg:min-h-screen lg:overflow-y-auto lg:pt-20">
            {/*vehicle registration*/}
            {activeComp === 0 ? <NewVehicleReg /> : <CreateHelpAccount />}
            {/* bottom content area */}
            <div>
              {/*four Graphs*/}
              <StatGraphs />
            </div>
            {/* footer */}
            <div className="relative">
              <FooterSecondary />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Admindashboard;
