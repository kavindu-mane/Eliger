import React, { lazy } from "react";
import topics from "../Data/DriverSidebarData";
import { Label, Radio } from "flowbite-react";
import { Card } from "flowbite-react";

import "./DriverActivity.css";
import { Button } from "flowbite-react";
//import images
import images from "../Data/ImageLoader";
import { Table } from "flowbite-react";

const HeaderSecondary = lazy(() =>
  import("../Components/Common/HeaderSecondary")
);
const FooterSecondary = lazy(() =>
  import("../Components/Common/FooterSecondary")
);
const BackgroundEffect = lazy(() =>
  import("../Components/Common/BackgroundEffect")
);
const SideBar = lazy(() => import("../Components/Common/SideBarDriver"));
const DriverGraph = lazy(() => import("../Components/Driver/DriverGraph"));

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
              <div className="rounded-xl p-1 px-2 py-4 pb-4 pt-4 text-2xl shadow-md drop-shadow-lg dark:bg-slate-700">
                <p className=" ml-10 font-bold tracking-wide ">
                  Manage Rent Out Booking
                </p>
                <div className="flex justify-end ">
                  <Card className="mb-3 mr-10 mt-3 w-9/12 bg-slate-950/60">
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
                <p className="ml-10 mt-4 font-bold tracking-wide ">
                  Availability of the driver
                </p>
                <div className="flex justify-end">
                  <Card className="mb-3 mr-10 mt-3 w-9/12 bg-slate-950/60">
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
              <div className=" flex flex-col gap-4 border-none p-1 pb-4 pt-4 text-center text-2xl lg:h-1/2 lg:flex-row ">
                <div className="mt-4 w-full rounded-xl p-1 px-2 py-4 pb-4 pt-4 text-2xl shadow-md drop-shadow-lg dark:bg-slate-700">
                  <p className=" ml-10 font-bold tracking-wide ">
                    Day vs Earnings (2023)
                  </p>
                  <div className="mb-6 ml-10 w-9/12 justify-center">
                    <div className="flex justify-center">
                      <DriverGraph />
                    </div>
                  </div>
                </div>
                {/*recent travels*/}
                <div className="mt-4 w-full max-w-2xl rounded-xl p-1 px-2 py-4 pb-4 pt-4 text-2xl shadow-md drop-shadow-lg dark:bg-slate-700">
                  <div className="travelSection">
                    <div className="heading flex">
                      <h1>Recent Travels</h1>
                    </div>

                    <div className="secContainer grid">
                      <div className="singleCustomer flex">
                        <Table className="justify-center ">
                          <Table.Body className="divide-y">
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                              <Table.Cell>
                                <img
                                  src={images["pro.png"]}
                                  alt="customer image"
                                  className="usericon"
                                />
                              </Table.Cell>
                              <Table.Cell>
                                <div className="CustomerDetails">
                                  <span className="name">Peter Stark</span>
                                  <small className="days">2 days ago</small>
                                </div>
                              </Table.Cell>
                              <Table.Cell>
                                <div className="vehiclenum">GC5423</div>
                              </Table.Cell>
                              <Table.Cell>
                                <Button>Delete</Button>
                              </Table.Cell>
                            </Table.Row>
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                              <Table.Cell>
                                <img
                                  src={images["pro.png"]}
                                  alt="customer image"
                                  className="usericon"
                                />
                              </Table.Cell>
                              <Table.Cell>
                                <div className="CustomerDetails">
                                  <span className="name">Peter Stark</span>
                                  <small className="days">2 days ago</small>
                                </div>
                              </Table.Cell>
                              <Table.Cell>
                                <div className="vehiclenum">GC5423</div>
                              </Table.Cell>
                              <Table.Cell>
                                <Button>Delete</Button>
                              </Table.Cell>
                            </Table.Row>
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                              <Table.Cell>
                                <img
                                  src={images["pro.png"]}
                                  alt="customer image"
                                  className="usericon"
                                />
                              </Table.Cell>
                              <Table.Cell>
                                <div className="CustomerDetails">
                                  <span className="name">Peter Stark</span>
                                  <small className="days">2 days ago</small>
                                </div>
                              </Table.Cell>
                              <Table.Cell>
                                <div className="vehiclenum">GC5423</div>
                              </Table.Cell>
                              <Table.Cell>
                                <Button>Delete</Button>
                              </Table.Cell>
                            </Table.Row>
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                              <Table.Cell>
                                <img
                                  src={images["pro.png"]}
                                  alt="customer image"
                                  className="usericon"
                                />
                              </Table.Cell>
                              <Table.Cell>
                                <div className="CustomerDetails">
                                  <span className="name">Peter Stark</span>
                                  <small className="days">2 days ago</small>
                                </div>
                              </Table.Cell>
                              <Table.Cell>
                                <div className="vehiclenum">GC5423</div>
                              </Table.Cell>
                              <Table.Cell>
                                <Button>Delete</Button>
                              </Table.Cell>
                            </Table.Row>
                          </Table.Body>
                        </Table>
                      </div>
                    </div>
                    {/*<div className="mb-6 ml-10 w-9/12 justify-center">*/}
                  </div>
                </div>
              </div>

              {/*net earnings*/}

              <div className=" flex flex-col gap-4 border-none p-1 pb-9 pt-4 text-center text-2xl lg:h-1/2 lg:flex-row ">
                <Card className="h-48  w-full max-w-sm bg-green-300 px-2	py-4">
                  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <p>Net Earnings</p>
                  </h5>
                  <p className="font-normal dark:text-amber-400">
                    <p>Rs.10,000.00 </p>
                  </p>
                </Card>
                <Card className="h-48 w-full max-w-sm bg-blue-400 px-2 py-4	">
                  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <p>Total Miles</p>
                  </h5>
                  <p className="font-normal dark:text-amber-400">
                    <p>130mi </p>
                  </p>
                </Card>
                <Card className="h-48 w-full max-w-sm bg-rose-500 px-2 py-4	">
                  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <p>Total Hours</p>
                  </h5>
                  <p className="font-normal dark:text-amber-400">
                    <p>100h </p>
                  </p>
                </Card>
              </div>
              <div className="relative">
                <FooterSecondary />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default DriverDashboard;
