import React, { lazy, useState } from "react";

import { Label, Radio, Button } from "flowbite-react";
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
    0: <CreateDriverAccount />,
    1: <ViewMyDrivers />,
    2: <AddVehicle />,
    3: <EditVehicle />,
    4: <ViewMyVehicles />,
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
          <div className="relative flex w-full flex-col justify-between px-5 pt-4 lg:min-h-screen lg:overflow-y-auto lg:pt-20">
            {optionComponents[activeComp]}
            {/*change availability & request */}
            <div className="mt-8 rounded-xl p-1 py-4 text-2xl dark:bg-slate-700">
              <p className="text-center font-semibold tracking-wide ">
                Manage RentOut Booking
              </p>
              <div className="flex justify-center">
                <Card className="mb-3 mr-10 mt-3 w-9/12 text-gray-900">
                  <div className="mt-1/2 mb-1/2 h-2 text-xl tracking-tight text-gray-900 dark:text-white">
                    <h className="text-start ">Booking Request</h>
                  </div>
                  <div className="flex justify-center">
                    <Button className="mb-2 mr-20 px-10 py-1.5 text-center">
                      Accept
                    </Button>

                    <Button className="mb-2 mr-20 px-10 py-1.5 text-center">
                      Reject
                    </Button>
                  </div>
                  <div className="text-sm text-white">
                    <p className="font-normal text-gray-700 dark:text-gray-400">
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
                    </p>
                  </div>
                </Card>
              </div>
            </div>

            {/*graph*/}

            <div className="mt-8 flex w-full justify-center ">
              <VehicleOwnerGraph />
            </div>
            {/* Availability*/}

            <div class="mt-8 rounded-xl p-1 py-4 text-2xl dark:bg-slate-700">
              <p className=" text-center-justify ml-10 pb-4 text-xl font-semibold tracking-wide ">
                Availability of Vehicle
              </p>
              <ul class="my-4 space-y-3 px-10">
                <li>
                  <a
                    href="/"
                    class="group flex items-center rounded-lg bg-gray-50 p-3 text-base font-bold text-gray-900 hover:bg-gray-100 hover:shadow dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500"
                  >
                    <svg
                      aria-hidden="true"
                      class="h-4"
                      viewBox="0 0 40 38"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    ></svg>
                    <span class="ml-3 flex-1 whitespace-nowrap">
                      Reg.No GC-54678
                    </span>
                    <div className="flex justify-end">
                      <Radio
                        defaultChecked
                        id="available"
                        name="availabilityA"
                        value="available"
                      />
                      <Label className="ml-4">Available</Label>
                      <Radio
                        className="ml-48"
                        defaultChecked
                        id="non-available"
                        name="availabilityA"
                        value="non-available"
                      />
                      <Label className="ml-4">Non-Available</Label>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    class="group flex items-center rounded-lg bg-gray-50 p-3 text-base font-bold text-gray-900 hover:bg-gray-100 hover:shadow dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500"
                  >
                    <svg
                      aria-hidden="true"
                      class="h-4"
                      viewBox="0 0 40 38"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    ></svg>
                    <span class="ml-3 flex-1 whitespace-nowrap">
                      Reg.No GC-54678
                    </span>
                    <div className="flex justify-end">
                      <Radio
                        defaultChecked
                        id="available"
                        name="availabilityB"
                        value="available"
                      />
                      <Label className="ml-4">Available</Label>
                      <Radio
                        className="ml-48"
                        defaultChecked
                        id="non-available"
                        name="availabilityB"
                        value="non-available"
                      />
                      <Label className="ml-4">Non-Available</Label>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    class="group flex items-center rounded-lg bg-gray-50 p-3 text-base font-bold text-gray-900 hover:bg-gray-100 hover:shadow dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500"
                  >
                    <svg
                      aria-hidden="true"
                      class="h-5"
                      viewBox="0 0 292 292"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    ></svg>
                    <span class="ml-3 flex-1 whitespace-nowrap">
                      Reg.No GC-54678
                    </span>
                    <div className="flex justify-end">
                      <Radio
                        defaultChecked
                        id="available"
                        name="availabilityC"
                        value="available"
                      />
                      <Label className="ml-4">Available</Label>
                      <Radio
                        className="ml-48"
                        defaultChecked
                        id="non-available"
                        name="availabilityC"
                        value="non-available"
                      />
                      <Label className="ml-4">Non-Available</Label>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
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
