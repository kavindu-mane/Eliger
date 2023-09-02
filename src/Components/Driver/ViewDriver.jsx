import React from "react";
import { Button, Label, Radio } from "flowbite-react";
import { Card } from "flowbite-react";

const ViewDriver = () => {
  return (
    <div className="h-auto w-full p-4 font-Poppins">
      {/*change availability & request */}
      <div className="rounded-xl p-1 px-2 py-4 pb-4 pt-4 shadow-md drop-shadow-lg dark:bg-slate-700">
        <p className=" ml-10 text-2xl font-semibold tracking-wide">
          Booking Request
        </p>
        <div className="flex justify-end ">
          <Card className="mb-3 mt-3 w-full bg-slate-950/60">
            <div className="flex justify-end gap-9">
              <Button>Accept</Button>
              <Button>Reject</Button>
            </div>

            <p className="font-normal text-gray-700 dark:text-gray-400"></p>
          </Card>
        </div>
        <p className="ml-10 mt-4 text-2xl font-semibold tracking-wide">
          Change the Availability
        </p>
        <div className="flex justify-end">
          <Card className="mb-3 mt-3 w-full bg-slate-950/60">
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
    </div>
  );
};
export default ViewDriver;
