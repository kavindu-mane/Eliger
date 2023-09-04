import React, { lazy, useState } from "react";

import { Label, Button } from "flowbite-react";
import { Card } from "flowbite-react";
import topics from "../Data/VehicleOwnerSidebarData";

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
const VehicleOwnerGraph = lazy(() =>
  import("../Components/VehicleOwner/VehicleOwnerGraph")
);
const CreateDriverAccount = lazy(() =>
  import("../Components/VehicleOwner/CreateDriverAccount")
);
const ViewMyDrivers = lazy(() =>
  import("../Components/VehicleOwner/ViewMyDrivers")
);
const EditAccount = lazy(() =>
  import("../Components/VehicleOwner/EditAccount")
);
const EditVehicle = lazy(() =>
  import("../Components/VehicleOwner/EditVehicle")
);
const ViewMyVehicles = lazy(() =>
  import("../Components/VehicleOwner/ViewMyVehicles")
);
const AddVehicle = lazy(() => import("../Components/VehicleOwner/AddVehicle"));

const VehicleOwnerDashboard = () => {
  //Component loading state hook
  const [activeComp, setActiveComp] = useState(0);
  const optionComponents = {
    0: <ViewMyVehicles />,
    1: <ViewMyDrivers />,
    2: <AddVehicle />,
    3: <EditVehicle />,
    4: <CreateDriverAccount />,
    5: <EditAccount />,
  };

  return (
    <React.Fragment>
      {/* container */}
      <div className="relative flex h-full w-screen flex-col items-center">
        {/* <div className="flex min-h-screen flex-col items-center justify-between"> */}
        {/* middle container */}
        {/* <div className="relative flex h-full w-screen flex-col items-center"> */}
        {/* bluer effect */}
        <BackgroundEffect />
        <HeaderSecondary />
        {/* Content-Area */}
        <div className="flex w-screen flex-col lg:h-screen lg:flex-row lg:overflow-hidden">
          {/* Side Bar Area */}
          <div className="w-full min-w-max lg:h-screen lg:max-w-xs">
            <SideBar
              title={"Vehicle Owner"}
              dataset={topics}
              setActiveComp={setActiveComp}
            />
          </div>
          {/* Body Area */}
          <div className="relative flex w-full flex-col justify-between px-10 pt-4 lg:min-h-screen lg:overflow-y-auto lg:pt-20">
            {/*change availability & request */}
            <div className=" mt-2 rounded-xl p-1 py-4 text-2xl">
              <p className="text-center font-semibold tracking-wide">
                Manage RentOut Booking
              </p>
              <p className="mt-4 text-center text-sm font-medium italic text-gray-600 dark:text-gray-300">
                No booking requests.
              </p>
              {/*booking notifications */}
              {/* <div className="flex justify-center">
                <Card className="mb-3 mr-10 mt-3 w-9/12 text-gray-900">
                  <div className="mt-1/2 mb-1/2 h-2 text-xl tracking-tight text-gray-900 dark:text-white">
                    <h1 className="text-start ">Booking Request</h1>
                  </div>
                  <div className="flex justify-end gap-10 py-3">
                    <Button>Accept</Button>

                    <Button>Reject</Button>
                  </div>
                  <div className="text-sm text-white">
                    <form className="flex max-w-md flex-col gap-4">
                      <div>
                        <div className="mb-2 block">
                          <Label htmlFor="name" value="Customer Name" />
                        </div>
                      </div>
                      <div>
                        <div className="mb-2 block">
                          <Label
                            htmlFor="password1"
                            value="No.Of Rentout Days"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="mb-2 block">
                          <Label htmlFor="password1" value="Rentout Date" />
                        </div>
                        <label></label>
                      </div>
                      <div></div>
                    </form>
                  </div>
                </Card>
              </div> */}
            </div>

            {optionComponents[activeComp]}

            {/*graph*/}
            <div className="mt-10 flex w-full justify-center ">
              <VehicleOwnerGraph />
            </div>
            {/* Availability*/}

            <br />
            <div className="relative ">
              <br />
              <FooterSecondary />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default VehicleOwnerDashboard;
