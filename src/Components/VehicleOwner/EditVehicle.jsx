import React from "react";
import { Card, Label, TextInput, Button } from "flowbite-react";

const EditVehicle = () => {
  return (
    <Card className="mt-8 dark:bg-slate-900">
      <div className="text-center text-2xl font-semibold tracking-wide  ">
        Edit Vehicle
      </div>
      <form className="flex flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="regno" value="Vehicle Reg.No" />
          </div>
          <TextInput id="regno" placeholder="ABC-4567" required type="text" />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="type" value="Vehicle Type" />
          </div>
          <TextInput
            id="type"
            placeholder="Car/Van/Bike/Tuk Tuk "
            required
            type="text"
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="amount" value="Pasenger Amount" />
          </div>
          <TextInput id="amount" placeholder="" required type="text" />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="pickup" value="Pickup Location" />
          </div>
          <TextInput
            id="pickup"
            placeholder="Passara Road,Badulla."
            required
            type="text"
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="documents" value="Vehicle Documentation" />
          </div>
          <input
            className="mb-5 block w-full cursor-pointer rounded-lg border border-gray-300 bg-gray-50 text-xs text-gray-900 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:placeholder-gray-400"
            id="small_size"
            type="file"
          />
        </div>
        <div className="flex w-full justify-center font-Poppins">
          <Button type="submit" className="w-full max-w-sm">
            Save Changes
          </Button>
        </div>
      </form>
    </Card>
  );
};
export default EditVehicle;
