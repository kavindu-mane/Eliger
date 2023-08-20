import React, { useState } from "react";
import { Button, Checkbox, Label, TextInput, Dropdown } from "flowbite-react";
import DatePicker from "react-datepicker";
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

const FindVehicles = () => {
  const [category, setCategory] = useState("Car");
  const [bookingMethod, setBookingMethod] = useState("Book Now");
  const [district, setDistrict] = useState("Colombo");
  const [driverNeeded, setDriverNeeded] = useState("With Driver");
  const [startDate, setStartDate] = useState(new Date());
  //   const [isPassedTime, setIsPassedTime] = useState(true);

  // filter times with comparing current time
  const filterPassedTime = (time) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);
    const isPassed = currentDate.getTime() < selectedDate.getTime();
    // setIsPassedTime(isPassed);
    return isPassed;
  };

  // change time to current, if user select wrong time

  // fields of book now option
  const bookNowFields = () => {
    return (
      <>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="pick-up" value="Pick up location" />
          </div>
          <TextInput id="pick-up" type="text" placeholder="Pickup address" />
        </div>

        <div className="-mt-1 flex items-center gap-2">
          <Checkbox
            id="current-location"
            className=" border-2 border-slate-700"
          />
          <Label htmlFor="current-location">Use my current location</Label>
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="destination" value="Destination location" />
          </div>
          <TextInput
            id="destination"
            type="text"
            placeholder="Destination address"
          />
        </div>

        <div>
          <div className="mb-2 flex flex-col">
            <Label htmlFor="pick-time" value="Pick-up time" />
            <DatePicker
              selected={startDate}
              onChange={(date) =>
                setStartDate(date > new Date() ? date : new Date())
              }
              showTimeSelect
              filterTime={filterPassedTime}
              minDate={new Date()}
              dateFormat="yyyy/MMMM/d , hh:mm aa"
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
        <div>
          <div className="mb-2 block">
            <Label htmlFor="driver" value="Driver" />
          </div>
          <Dropdown inline label={driverNeeded} id="driver">
            <Dropdown.Item onClick={() => setDriverNeeded("With Driver")}>
              With Driver
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setDriverNeeded("Without Driver")}>
              Without Driver
            </Dropdown.Item>
          </Dropdown>
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="district" value="District" />
          </div>
          <Dropdown
            inline
            label={district}
            id="district"
            className="h-44 overflow-y-scroll"
          >
            {districtArray.map((v) => {
              return (
                <Dropdown.Item key={v} onClick={() => setDistrict(v)}>
                  {v}
                </Dropdown.Item>
              );
            })}
          </Dropdown>
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="duration" value="Duration" />
          </div>
          <div
            id="duration"
            className="flex flex-col items-center justify-between md:flex-row"
          >
            <span className="my-1 w-full text-start md:me-2 md:max-w-[3rem]">
              From :
            </span>

            <span className="mx-2 my-1 w-full text-start md:max-w-[2rem]">
              To :
            </span>
          </div>
        </div>
      </>
    );
  };

  return (
    <React.Fragment>
      <div
        data-aos="fade-up"
        className="w-full max-w-xl rounded-md border border-slate-600 bg-gray-200 p-8 shadow-lg drop-shadow-lg dark:bg-gray-800 sm:w-2/3 lg:w-1/2"
      >
        <h1 className="mx-1 mb-10 ps-2 text-center font-noto text-2xl text-slate-900 dark:text-white md:ps-5 md:text-3xl">
          Find Vehicles
        </h1>
        <form className="flex w-full max-w-lg flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="category" value="Vehicle Category" />
            </div>
            <Dropdown inline label={category} id="category">
              <Dropdown.Item onClick={() => setCategory("Bike")}>
                Bike
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setCategory("Tuk Tuk")}>
                Tuk Tuk
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setCategory("Car")}>
                Car
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setCategory("Van")}>
                Van
              </Dropdown.Item>
            </Dropdown>
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="b-method" value="Booking Method" />
            </div>
            <Dropdown inline label={bookingMethod} id="b-method">
              <Dropdown.Item onClick={() => setBookingMethod("Book Now")}>
                Book Now
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setBookingMethod("Rentout")}>
                Rentout
              </Dropdown.Item>
            </Dropdown>
          </div>

          {bookingMethod === "Book Now" ? bookNowFields() : rentOutFields()}

          <Button type="submit">Find</Button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default FindVehicles;
