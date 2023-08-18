import React, { lazy, useState, useEffect } from "react";
import topics from "../components/Data/driverSidebar";
import { Label, Radio } from "flowbite-react";
import { Card } from "flowbite-react";

const HeaderSecondary = lazy(() => import("../components/HeaderSecondary"));
const FooterSecondary = lazy(() => import("../components/FooterSecondary"));
const BackgroundEffect = lazy(() => import("../components/BackgroundEffect"));
const SideBar = lazy(() => import("../components/SideBarDriver"));
const Graphs = lazy(() => import("../components/Admin/Graphs"));
const DriverGraph = lazy(() => import("../components/Driver/DriverGraph"));

const DriverDashboard = () => {
  return (
    <React.Fragment>
      <div className="relative flex min-h-screen flex-col items-center justify-between">
        {/* middle container */}
        <div className="relative flex h-full w-screen flex-col items-center">
          {/* bluer effect */}
          <BackgroundEffect />
          <HeaderSecondary />
          {/* Content-Area */}
          <div className="flex min-h-screen w-screen flex-col lg:flex-row">
            {/* Side Bar Area */}
            <div className="h-auto min-h-max w-full lg:w-1/4 xl:w-1/5">
              <SideBar title={"User"} dataset={topics} />
            </div>

            {/* Manage Area */}
            <div className="mt-8 h-auto w-full pl-8 pr-8 lg:h-1/2">
              {/*change availability & request */}
              <div className="rounded-xl border border-slate-800 bg-stone-900 p-1 pb-4 pt-4 text-2xl">
                <p className=" ml-10 font-bold tracking-wide text-green-500">
                  Manage Rent Out Booking
                </p>
                <div className="flex justify-end ">
                  <Card className="mb-3 mr-10 mt-3 w-9/12 dark:bg-slate-700">
                    <div className="mt-1/2 mb-1/2 h-2 text-xl tracking-tight text-gray-900 dark:text-white">
                      <h className="text-start ">Booking Request</h>
                    </div>
                    <div className="flex justify-end">
                      <Radio
                        defaultChecked
                        id="accept"
                        name="booking"
                        value="accept"
                      />
                      <Label className="ml-4">Accept</Label>
                      <Radio
                        className="ml-48"
                        defaultChecked
                        id="reject"
                        name="booking"
                        value="reject"
                      />
                      <Label className="ml-4">Reject</Label>
                    </div>

                    <p className="font-normal text-gray-700 dark:text-gray-400"></p>
                  </Card>
                </div>
                <p className="mt-4 ml-10 font-bold tracking-wide text-green-500">
                  Availability of the driver
                </p>
                <div className="flex justify-end">
                  <Card className="mb-3 mr-10 mt-3 w-9/12 dark:bg-slate-700">
                    <div className="mt-1/2 mb-1/2 h-2 text-xl tracking-tight text-gray-900 dark:text-white">
                      <h className="text-start "> Change the Availability</h>
                    </div>
                    <div className="flex justify-end">
                      <Radio
                        defaultChecked
                        id="Available"
                        name="availability"
                        value="Available"
                      />
                      <Label className="ml-4">Available</Label>
                      <Radio
                        className="ml-40"
                        defaultChecked
                        id="Unavailable"
                        name="availability"
                        value="Unavailable"
                      />
                      <Label className="ml-4 ">Unavailable</Label>
                    </div>

                    <p className="font-normal text-gray-700 dark:text-gray-400"></p>
                  </Card>
                </div>
              </div>
              {/*graph*/}

              <div className="mt-4 rounded-xl border border-slate-800 bg-stone-900 p-1 pb-4 pt-4 text-2xl">
                <p className=" ml-10 font-bold tracking-wide text-green-500">
                  Month vs Earnings (2023)
                </p>
                <div className="ml-10 mb-6 w-9/12 justify-center">
                  <div className="flex justify-center">
                    <DriverGraph />
                  </div>
                </div>
              </div>

              {/*net earnings*/}

              <div className=" flex flex-col gap-4 border-none p-1 pb-4 pt-4 text-center text-2xl lg:h-1/2 lg:flex-row">
                <Card className="h-48 w-1/3 max-w-sm dark:bg-stone-900	">
                  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <p className="text-green-500">Net Earnings</p>
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    <p>Rs.10,000.00 </p>
                  </p>
                </Card>
                <Card className="h-48 w-1/3 max-w-sm dark:bg-stone-900">
                  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <p className="text-green-500">Total Miles</p>
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    <p>130mi </p>
                  </p>
                </Card>
                <Card className="h-48 w-1/3 max-w-sm dark:bg-stone-900">
                  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <p className="text-green-500">Total Hours</p>
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    <p>100h </p>
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterSecondary />
    </React.Fragment>
  );
};
export default DriverDashboard;
