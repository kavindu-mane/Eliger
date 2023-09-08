import React, { lazy, useState } from "react";
import topics from "../Data/SideBars/AdminSidebarData";
const StatGraphs = lazy(() => import("../Components/Admin/StatGraphs"));
const NewVehicleReg = lazy(() => import("../Components/Admin/NewVehicleReg"));
const PendingVehicleReg = lazy(() =>
  import("../Components/Admin/PendingVehicleReg")
);
const PendingDriverReg = lazy(() =>
  import("../Components/Admin/PendingDriverReg")
);
const NewDriverRequests = lazy(() =>
  import("../Components/Admin/NewDriverRequests")
);
const TableCustomer = lazy(() =>
  import("../Components/Admin/AccountTables/TableCustomer")
);
const TableHelpSupport = lazy(() =>
  import("../Components/Admin/AccountTables/TableHelpSupport")
);
const TableDriver = lazy(() =>
  import("../Components/Admin/AccountTables/TableDriver")
);
const TableVehicleOwner = lazy(() =>
  import("../Components/Admin/AccountTables/TableVehicleOwner")
);
const CreateHelpAccount = lazy(() =>
  import("../Components/Admin/CreateHelpAccount")
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

const Admindashboard = () => {
  //Component loading state hook
  const [activeComp, setActiveComp] = useState(0);

  const optionComponents = {
    0: <NewVehicleReg />,
    1: <NewDriverRequests />,
    2: <PendingVehicleReg />,
    3: <PendingDriverReg />,
    4: <CreateHelpAccount />,
    5: <TableVehicleOwner />,
    6: <TableCustomer />,
    7: <TableDriver />,
    8: <TableHelpSupport />,
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
              title={"Administrator"}
              dataset={topics}
              setActiveComp={setActiveComp}
              active={activeComp}
            />
          </div>

          {/* Body Area */}
          <div className="relative flex w-full flex-col justify-between px-5 pt-4 md:px-10 lg:min-h-screen lg:overflow-y-auto lg:pt-20">
            {/*vehicle registration*/}
            {optionComponents[activeComp]}
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
