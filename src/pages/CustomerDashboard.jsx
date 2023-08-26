import React, { lazy } from "react";
import topics from "../components/Data/CustomersidebarData";

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

const FindVehicles = lazy(() => import("../components/common/FindVehicles"));

const CustomerDashboard = () => {
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
            <div className="w-full min-w-max lg:h-screen lg:max-w-xs">
              <SideBar title={"Username"} dataset={topics} />
            </div>
            <div className=" top-0 flex h-full w-full flex-col items-center justify-center  ">
              <FindVehicles />
            </div>
          </div>
          <FooterSecondary />
        </div>
      </div>
    </React.Fragment>
  );
};
export default CustomerDashboard;
