import { Card, Rating, Datepicker } from "flowbite-react";
import React from "react";

const OwnerHome = () => {
  return (
    <React.Fragment>
      <Card className="w-full font-Poppins dark:bg-slate-950 lg:px-5">
        <p className="mb-5 text-2xl font-semibold md:text-3xl xl:text-4xl">
          Welcome !
        </p>
        {/* container */}
        <div className="flex flex-col items-center space-y-8 2xl:flex-row 2xl:items-start 2xl:justify-between 2xl:space-y-0">
          <div className="flex w-full flex-col items-center space-y-8 xl:flex-row xl:items-start xl:justify-between 2xl:w-3/5">
            {/* left side */}
            <div className="">
              <p className="font-ABeeZee font-semibold">Today Events</p>

              <Rating className="mt-5 flex w-fit flex-col items-start">
                <div className="flex items-center">
                  <Rating.Star />
                  <p className="ms-2">CAB 2020 5 days booking start</p>
                </div>
                <div className="flex items-center">
                  <Rating.Star />
                  <p className="ms-2">CAB 2029 2 days booking end</p>
                </div>
              </Rating>
            </div>
            {/* center */}
            <div className="">
              <Datepicker
                inline
                className="rounded-md shadow-lg drop-shadow-xl"
                showClearButton={false}
                minDate={new Date()}
              />
            </div>
          </div>
          {/* right side */}
          <div className="flex flex-col text-white">
            <p className="font-ABeeZee font-semibold text-slate-950 dark:text-white">
              Today Earning
            </p>
            <div className="m-3 flex">
              <Card className="mx-2 w-full bg-sky-600 shadow-lg drop-shadow-xl dark:bg-sky-600">
                <p className="font-medium">
                  Total Income :{" "}
                  <span className="text-2xl md:text-3xl">Rs. 20000</span>
                </p>
              </Card>
            </div>
            <div className="m-3 flex">
              <Card className="mx-2 bg-emerald-500 shadow-lg drop-shadow-xl dark:bg-emerald-500">
                <p className="font-medium">Online Payments</p>
                <p className="text-lg font-semibold sm:text-xl md:text-2xl">
                  Rs. 40000
                </p>
              </Card>
              <Card className="mx-2 bg-emerald-500 shadow-lg drop-shadow-xl dark:bg-emerald-500">
                <p className="font-medium">Offline Payments</p>
                <p className="text-lg font-semibold sm:text-xl md:text-2xl">
                  Rs. 160000
                </p>
              </Card>
            </div>

            <p className="font-ABeeZee font-semibold  text-slate-950 dark:text-white">
              This Month Earning
            </p>
            <div className="m-3 flex">
              <Card className="mx-2 w-full bg-sky-600 shadow-lg drop-shadow-xl dark:bg-sky-600">
                <p className="font-medium">
                  Total Income :{" "}
                  <span className="text-2xl md:text-3xl">Rs. 20000</span>
                </p>
              </Card>
            </div>
            <div className="m-3 flex">
              <Card className="mx-2 bg-emerald-500 shadow-lg drop-shadow-xl dark:bg-emerald-500">
                <p className="font-medium">Online Payments</p>
                <p className="text-lg font-semibold sm:text-xl md:text-2xl">
                  Rs. 40000
                </p>
              </Card>
              <Card className="mx-2 bg-emerald-500 shadow-lg drop-shadow-xl dark:bg-emerald-500">
                <p className="font-medium">Offline Payments</p>
                <p className="text-lg font-semibold sm:text-xl md:text-2xl">
                  Rs. 160000
                </p>
              </Card>
            </div>
          </div>
        </div>
      </Card>
    </React.Fragment>
  );
};

export default OwnerHome;
