import React from "react";
import { Button, Label, Checkbox } from "flowbite-react";
import { Card } from "flowbite-react";

const ViewDriver = () => {
  return (
    <div className="h-auto w-full p-4 pr-5 font-Poppins">
      {/*change availability & request */}
      <Card className=" dark:bg-slate-900">
        <p className=" ml-10 text-2xl font-semibold tracking-wide">
          Booking Request
        </p>
        <div className="flex w-full ">
          <div className="w-full">
            <div className="hidden rounded-t-md bg-gray-400 px-4 py-1 ring-[0.5px] ring-gray-400 dark:bg-gray-700 dark:ring-gray-600 md:flex">
              <div className="w-full text-start">
                <span className="">Name</span>
              </div>
              <div className="w-full text-start">
                <span className="">Contact No:</span>
              </div>
              <div className="w-full text-start ">
                <span className="">Pick up location</span>
              </div>
              <div className="mr-7 w-full text-start">
                <span className="">Destination</span>
              </div>
              <div className="w-full text-start">
                <span className="">Date</span>
              </div>
              <div className="mr-2 w-full text-start">
                <span className="">Time</span>
              </div>
              <div className="w-full text-start">
                <span className="">Reply</span>
              </div>
            </div>
            <div className="text-md group flex flex-col justify-center space-y-2 rounded-sm bg-white ring-[0.5px] ring-gray-400 hover:bg-gray-200 dark:bg-slate-950 dark:ring-gray-600 dark:hover:bg-gray-800 md:flex-row md:items-center md:justify-between md:space-y-0">
              <p className="flex w-full truncate px-4 py-2">
                <span className="block md:hidden">Name :&ensp;</span>
                Meri Silva
              </p>
              <p className="flex w-full truncate bg-slate-100 px-4 py-2 group-hover:bg-gray-200 dark:bg-slate-900 group-hover:dark:bg-gray-800">
                <span className="block md:hidden">Tel :&ensp;</span>
                0704512641
              </p>
              <p className="flex w-full truncate px-4 py-2">
                <span className="block md:hidden">Source :&ensp;</span>
                Maharagama
              </p>
              <p className="flex w-full truncate px-4 py-2">
                <span className="block md:hidden">Destination :&ensp;</span>
                Panadura
              </p>
              <p className="flex w-full truncate px-4 py-2">
                <span className="block md:hidden">Date :&ensp;</span>
                23/10/2023
              </p>
              <p className="flex w-full truncate px-4 py-2">
                <span className="block md:hidden">Time :&ensp;</span>
                5.30 a.m
              </p>
              <div className="flex gap-2 px-2 pb-2 pt-2">
                <Button>Accept</Button>
                <Button>Reject</Button>
              </div>
            </div>
          </div>

          <p className="font-normal text-gray-700 dark:text-gray-400"></p>
        </div>
        <p className="ml-10 mt-4 text-2xl font-semibold tracking-wide">
          My Availability
        </p>
        <div className="flex justify-start ">
          <Card className=" bg-white dark:border-gray-700 dark:bg-gray-700">
            <div className="flex">
              <Checkbox
                defaultChecked
                id="Available"
                name="availability"
                value="Available"
              />
              <Label className="ml-4">Available</Label>
              <Checkbox
                className="ml-20"
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
      </Card>
    </div>
  );
};
export default ViewDriver;
