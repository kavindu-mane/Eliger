import React, { lazy } from "react";
import { Label, Radio } from "flowbite-react";
import { Card } from "flowbite-react";
import topics from "../components/Data/vehicleOwnerData";
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
//const gr1 = lazy(() => import("../components/Admin/gr1"));
//const gr2 = lazy(() => import("../components/Admin/gr2"));
const DriverGraph = lazy(() => import("../components/Driver/DriverGraph"));
const VehicleOwnerDashboard = () => {
  // const data = [
  //   { accountType: "Vehicle Owner", amount: 1000 },
  //   { accountType: "Customer", amount: 1500 },
  //   { accountType: "Driver", amount: 2000 },
  //   // Add more data points as needed
  // ];
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
              <SideBar title={"Vehicle Owner"} dataset={topics} />
            </div>
            {/* Manage Area */}
            <div className="mt-8 h-auto w-full pl-8 pr-8 lg:h-1/2">
              {/*change availability & request */}
              <div className="ml-10 mt-4 rounded-xl border border-slate-800 bg-stone-900 p-1 pb-4 pt-4 text-2xl">
                <p className=" ml-10 font-bold tracking-wide text-green-500">
                  Manage RentOut Booking
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
                    <div className="text-sm text-white">
                      <p className="font-normal text-gray-700 dark:text-gray-400">
                        <table>
                          <tr>
                            <td className="columns-md text-white">
                              Customer Name
                            </td>
                            <td></td>
                            <td>
                              <input type="text" value="" />
                            </td>
                          </tr>
                          <tr>
                            <td className="text-white">No.of Renout Days</td>
                            <td></td>
                            <td>
                              <div class="bg-slate-400">
                                <input type="text" value="" />
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="text-white">Rentout Date</td>
                            <td></td>
                            <td>
                              <input type="text" value="" />
                            </td>
                          </tr>
                        </table>
                      </p>
                    </div>
                  </Card>
                </div>
              </div>
              {/*graph*/}

              <div className="ml-10 mt-4 rounded-xl border border-slate-800 bg-stone-900 p-1 pb-4 pt-4 text-2xl">
                <p className=" ml-10 font-bold tracking-wide text-green-500">
                  Monthly Income
                </p>
                <div className="mb-6 ml-10 w-9/12 justify-center">
                  <div className="flex justify-center">
                    <DriverGraph />
                  </div>
                </div>
              </div>
              {/* Availability*/}
              <div class="max-w-base ml-10 mt-4 w-full rounded-lg border border-slate-800 bg-stone-900  p-4 shadow dark:border-gray-700 dark:bg-gray-800 sm:p-6">
                <p className=" ml-10 text-xl font-bold tracking-wide text-green-500">
                  Availability of Vehicle
                </p>
                <ul class="my-4 space-y-3">
                  <li>
                    <a
                      href="#"
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
                        Vehicle Reg.No GC-54678
                      </span>
                      <div className="flex justify-end">
                        <Radio
                          defaultChecked
                          id="available"
                          name="available"
                          value="available"
                        />
                        <Label className="ml-4">Available</Label>
                        <Radio
                          className="ml-48"
                          defaultChecked
                          id="non-available"
                          name="non-available"
                          value="non-available"
                        />
                        <Label className="ml-4">Non-Available</Label>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
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
                        Vehicle Reg.No GC-54678
                      </span>
                      <div className="flex justify-end">
                        <Radio
                          defaultChecked
                          id="available"
                          name="available"
                          value="available"
                        />
                        <Label className="ml-4">Available</Label>
                        <Radio
                          className="ml-48"
                          defaultChecked
                          id="non-available"
                          name="non-available"
                          value="non-available"
                        />
                        <Label className="ml-4">Non-Available</Label>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
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
                        Vehicle Reg.No GC-54678
                      </span>
                      <div className="flex justify-end">
                        <Radio
                          defaultChecked
                          id="available"
                          name="available"
                          value="available"
                        />
                        <Label className="ml-4">Available</Label>
                        <Radio
                          className="ml-48"
                          defaultChecked
                          id="non-available"
                          name="non-available"
                          value="non-available"
                        />
                        <Label className="ml-4">Non-Available</Label>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="ml-10 mt-8 h-auto w-full pl-8 pr-8 lg:h-1/2">
                {/*vehicle registration*/}
                <div className="h-auto w-full pl-8 pr-8 lg:h-1/2"></div>
              </div>
            </div>
          </div>
          <FooterSecondary />
        </div>
      </div>
    </React.Fragment>
  );
};
export default VehicleOwnerDashboard;
