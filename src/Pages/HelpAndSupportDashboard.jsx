import React, { lazy, useState } from "react";
import topics from "../Data/HelpNSupportSidebarData";
const HelpGraphs = lazy(() => import("../Components/HelpNSupport/HelpGraphs"));
const ManageBooking = lazy(() =>
  import("../Components/HelpNSupport/ManageBooking")
);
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
const ManageVehicle = lazy(() =>
  import("../Components/HelpNSupport/ManageVehicle")
);
const ManageFeedback = lazy(() =>
  import("../Components/HelpNSupport/ManageFeedback")
);
const ReviewReports = lazy(() =>
  import("../Components/HelpNSupport/ReviewReports")
);
const ViewUserMsg = lazy(() =>
  import("../Components/HelpNSupport/ViewUserMsg")
);
const TableCustomer = lazy(() =>
  import("../Components/Admin/AccountTables/TableCustomer")
);

const TableDriver = lazy(() =>
  import("../Components/Admin/AccountTables/TableDriver")
);
const TableVehicleOwner = lazy(() =>
  import("../Components/Admin/AccountTables/TableVehicleOwner")
);

const HelpAndSupportDashboard = () => {
  //Component loading state hook
  const [activeComp, setActiveComp] = useState(0);

  const optionComponents = {
    0: <ManageBooking />,
    1: <ManageVehicle />,
    2: <ManageFeedback />,
    3: <ViewUserMsg />,
    4: <ReviewReports />,
    5: <TableVehicleOwner />,
    6: <TableCustomer />,
    7: <TableDriver />,
  };

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
              title={"Help And Support"}
              dataset={topics}
              setActiveComp={setActiveComp}
            />
          </div>

          {/* Body Area */}
          <div className="relative flex w-full flex-col justify-between px-5 pt-4 md:px-10 lg:min-h-screen lg:overflow-y-auto lg:pt-20">
            {/*ManageBooking*/}
            {optionComponents[activeComp]}
            {/* bottom content area */}
            
              {/*Two Graphs*/}
              <HelpGraphs />
  

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
export default HelpAndSupportDashboard;
