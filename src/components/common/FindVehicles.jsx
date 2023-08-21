import React, { useState } from "react";
import {
  Button,
  Checkbox,
  Label,
  TextInput,
  Radio,
  Select,
} from "flowbite-react";
import DatePicker from "react-datepicker";
import { AiFillCheckCircle } from "react-icons/ai";
import "react-datepicker/dist/react-datepicker.css";

// district list
const districtArray = [
  "Ampara",
  "Anuradhapura",
  "Badulla",
  "Batticaloa",
  "Colombo",
  "Galle",
  "Gampaha",
  "Hambanthota",
  "Jaffna",
  "Kalutara",
  "Kandy",
  "Kegalle",
  "Kilinochchi",
  "Kurunegala",
  "Mannar",
  "Matale",
  "Matara",
  "Moneragala",
  "Mulaitivu",
  "Nuwara Eliya",
  "Polonnamruwa",
  "Puttalam",
  "Rathnapura",
  "Trincomalee",
  "Vauniya",
];

// get tommorow
const getTomorrow = () => {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  return tomorrow;
};

const FindVehicles = () => {
  const [bookingMethod, setBookingMethod] = useState("Book Now");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(getTomorrow());

  // filter times with comparing current time
  const filterPassedTime = (time) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);
    const isPassed = currentDate.getTime() < selectedDate.getTime();
    return isPassed;
  };

  // fields of book now option
  const bookNowFields = () => {
    return (
      <>
        {/* pick up location */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="pick-up" value="Pick up location" />
          </div>
          <TextInput
            id="pick-up"
            type="text"
            placeholder="Pickup address"
            name="pick-up"
          />
        </div>

        {/* current location checkbox */}
        <div className="-mt-1 flex items-center gap-2">
          <Checkbox
            id="current-location"
            className=" border-2 border-slate-700"
            name="currenrt-location"
          />
          <Label htmlFor="current-location">Use my current location</Label>
        </div>

        {/* destination location */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="destination" value="Destination location" />
          </div>
          <TextInput
            id="destination"
            type="text"
            placeholder="Destination address"
            name="destination"
          />
        </div>

        {/* pick up time */}
        <div>
          <div className="flex flex-col">
            <Label htmlFor="pick-time" value="Pick-up time" />
            <DatePicker
              id="pick-time"
              selected={startDate}
              onChange={(date) =>
                setStartDate(date > new Date() ? date : new Date())
              }
              showTimeSelect
              filterTime={filterPassedTime}
              minDate={new Date()}
              dateFormat="yyyy/MMMM/d , hh:mm aa"
              name="start-time"
              required
              timeIntervals={10}
              className="mt-3 w-full rounded-md border-none py-2.5 font-Poppins text-sm text-slate-800 ring-1 ring-gray-300 focus:ring-2 focus:ring-sky-400 dark:bg-gray-700 dark:text-white dark:ring-gray-600"
            />
          </div>
        </div>
      </>
    );
  };

  // fields of rent out option
  const rentOutFields = () => {
    return (
      <>
        {/* driver */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="driver" value="Driver" />
          </div>
          <Select id="driver" name="driver" required>
            <option value="with-driver">With Driver</option>
            <option value="without-driver">Without Driver</option>
          </Select>
        </div>
        {/* district */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="district" value="District" />
          </div>
          <Select id="district" name="district" required>
            {districtArray.map((district, i) => {
              return (
                <option key={i} value={district}>
                  {district}
                </option>
              );
            })}
          </Select>
        </div>

        {/* duration */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="duration" value="Duration" />
          </div>
          <div
            id="duration"
            className="flex flex-col items-center justify-between gap-y-1 space-y-1 md:flex-row md:gap-x-2"
          >
            {/* start date */}
            <div className="flex w-full items-center gap-x-2">
              <span className="my-1 w-12 text-start font-Poppins text-sm font-semibold md:min-w-fit">
                From :
              </span>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                minDate={new Date()}
                dateFormat="yyyy / MMMM / dd"
                name="from-date"
                required
                className="w-full rounded-md border-none py-2.5 font-Poppins text-sm text-slate-800 ring-1 ring-gray-300 focus:ring-2 focus:ring-sky-400 dark:bg-gray-700 dark:text-white dark:ring-gray-600"
              />
            </div>
            {/* end date */}
            <div className="flex w-full items-center gap-x-2">
              <span className="my-1 w-12 text-start font-Poppins text-sm font-semibold md:min-w-fit">
                To :
              </span>
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                minDate={getTomorrow()}
                dateFormat="yyyy / MMMM / dd"
                name="to-date"
                required
                className="w-full rounded-md border-none py-2.5 font-Poppins text-sm text-slate-800 ring-1 ring-gray-300 focus:ring-2 focus:ring-sky-400 dark:bg-gray-700 dark:text-white dark:ring-gray-600"
              />
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <React.Fragment>
      <div
        className="w-full max-w-xl rounded-md border border-slate-600 bg-gray-200 p-8 shadow-lg drop-shadow-lg dark:bg-gray-800"
      >
        <h1 className="mx-1 mb-10 ps-2 text-center font-noto text-2xl text-slate-900 dark:text-white md:ps-5 md:text-3xl">
          Find Vehicles
        </h1>
        <form className="flex w-full max-w-lg flex-col gap-4">
          {/* booking method */}
          <div>
            <div className="mb-2 block">
              <Label htmlFor="b-method" value="Booking Method" />
            </div>

            {/* radio buttons */}
            <div className="flex gap-1" id="b-method">
              {["Book Now", "Rentout"].map((method, i) => {
                return (
                  <Label className="w-full cursor-pointer" key={i}>
                    <Radio
                      name="booking-type"
                      value={method}
                      className="inputs peer sr-only"
                      defaultChecked={method === "Book Now"}
                      onClick={() => setBookingMethod(method)}
                    />
                    <div className="flex h-14 w-full items-center justify-center rounded-md bg-gray-500 text-transparent peer-checked:bg-green-400 peer-checked:text-white">
                      <AiFillCheckCircle className="h-5 w-5" />
                      <span className="mx-2 font-semibold text-white">
                        {method}
                      </span>
                    </div>
                  </Label>
                );
              })}
            </div>
          </div>

          {/* vehicle category */}
          <div>
            <div className="mb-2 block">
              <Label htmlFor="v-method" value="Vehicle Category" />
            </div>
            <div className="grid grid-cols-2 gap-1 sm:flex" id="v-method">
              {["Car", "Bike", "Tuk Tuk", "Van"].map((vehicle, i) => {
                return (
                  <Label className="w-full cursor-pointer" key={i}>
                    <Radio
                      name="vehicle-category"
                      value={vehicle}
                      className="inputs peer sr-only"
                      defaultChecked={vehicle === "Car"}
                    />
                    <div className="flex h-14 w-full items-center justify-center rounded-md bg-gray-500 text-gray-400 peer-checked:bg-indigo-500 peer-checked:text-white">
                      <AiFillCheckCircle className="h-5 w-5" />
                      <span className="mx-2 font-semibold text-white">
                        {vehicle}
                      </span>
                    </div>
                  </Label>
                );
              })}
            </div>
          </div>

          {bookingMethod === "Book Now" ? bookNowFields() : rentOutFields()}
          <Button type="submit" className="mt-3">
            Find
          </Button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default FindVehicles;
