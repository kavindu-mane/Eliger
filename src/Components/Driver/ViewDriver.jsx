import React from "react";
import { Button, Label, Radio } from "flowbite-react";
import { Card } from "flowbite-react";

const ViewDriver = () => {
  return (
    <div className="pr-5 h-auto w-full p-4 font-Poppins">
      {/*change availability & request */}
      <Card className=" dark:bg-slate-900">
        <p className=" ml-10 text-2xl font-semibold tracking-wide">
          Booking Request
        </p>
        <div className="flex justify-end ">
          <Card className="mb-3 mt-3 h-20 w-full bg-slate-950/60">
            <div className="flex justify-end gap-9">
              <Button>Accept</Button>
              <Button>Reject</Button>
            </div>

            <p className="font-normal text-gray-700 dark:text-gray-400"></p>
          </Card>
        </div>
        <p className="ml-10 mt-4 text-2xl font-semibold tracking-wide">
          My Availability
        </p>
        <div className="flex justify-start ">
          <Card className="mb-3 mt-3 w-fit bg-slate-950/60 ">
            <div className="flex">
              <Radio
                defaultChecked
                id="Available"
                name="availability"
                value="Available"
              />
              <Label className="ml-4">Available</Label>
              <Radio
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
