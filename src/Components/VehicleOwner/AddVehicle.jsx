import { Button, Card, Label, TextInput, Select } from "flowbite-react";
import { useState } from "react";
import { MdOutlineError } from "react-icons/md";
import ErrorData from "../../Data/ErrorData";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";
// import withReactContent from "sweetalert2-react-content";

const AddVehicle = () => {
  const [errorCode] = useState(null);
  const [isBookNow, setIsBookNow] = useState(true);
  const [isWithDriver, setIsWithDriver] = useState(true);

  // error messages
  const errorContainer = (errCode) => {
    return (
      <p className="flex items-center gap-x-1 font-Poppins text-sm font-semibold text-red-500">
        <MdOutlineError /> {ErrorData[errCode]}
      </p>
    );
  };
  return (
    <Card className="w-full max-w-4xl shadow-xl dark:bg-slate-900">
      <div className="mb-3 text-center font-Poppins text-2xl font-medium tracking-wide">
        Add Vehicle
      </div>
      <form className="flex flex-col gap-4">
        {/* rent type */}
        <div>
          <Label
            htmlFor="rent-type"
            value="Rent Type"
            className="after:ml-0.5 after:text-red-500 after:content-['*']"
          />
          <Select
            id="rent-type"
            name="rent-type"
            required
            defaultValue="book-now"
            onChange={() => setIsWithDriver(true)}
          >
            <option value="rent-out" onClick={() => setIsBookNow(false)}>
              Rent-out
            </option>
            <option value="book-now" onClick={() => setIsBookNow(true)}>
              Book-now
            </option>
          </Select>
          {/* error text */}
          {errorCode === 11 && errorContainer(errorCode)}
        </div>
        {/* vehicle type */}
        <div>
          <Label
            htmlFor="vehicle-type"
            value="Vehicle Type"
            className="after:ml-0.5 after:text-red-500 after:content-['*']"
          />

          <Select
            id="vehicle-type"
            name="vehicle-type"
            required
            defaultValue={"car"}
          >
            <option value="car">Car</option>
            <option value="bike">Bike</option>
            <option value="tuk-tuk">Tuk-Tuk</option>
            <option value="van">Van</option>
          </Select>
          {/* error text */}
          {errorCode === 11 && errorContainer(errorCode)}
        </div>
        {/* driver */}
        {!isBookNow && (
          <div>
            <Label htmlFor="driver" value="Driver" />
            <Select
              id="driver"
              name="driver"
              required
              defaultValue={"with-driver"}
            >
              <option value="with-driver" onClick={() => setIsWithDriver(true)}>
                With Driver
              </option>
              <option
                value="without-driver"
                onClick={() => setIsWithDriver(false)}
              >
                Without Driver
              </option>
            </Select>
            {/* error text */}
            {errorCode === 11 && errorContainer(errorCode)}
          </div>
        )}
        {/* register number */}
        <div>
          <Label
            htmlFor="regno"
            value="Vehicle Reg.No"
            className="after:ml-0.5 after:text-red-500 after:content-['*']"
          />
          <TextInput
            id="regno"
            placeholder="ABC-4567"
            required
            type="text"
            name="regno"
          />
          {/* error text */}
          {errorCode === 11 && errorContainer(errorCode)}
        </div>
        {/* passenger amount */}
        <div>
          <Label
            htmlFor="amount"
            value="Passenger Amount"
            className="after:ml-0.5 after:text-red-500 after:content-['*']"
          />

          <TextInput
            id="amount"
            name="amount"
            defaultValue={1}
            required
            type="number"
            min={1}
          />
          {/* error text */}
          {errorCode === 11 && errorContainer(errorCode)}
        </div>
        {/* nearest city */}
        {!isBookNow && (
          <div>
            <Label
              htmlFor="nearest-city"
              value="Nearest City"
              className="after:ml-0.5 after:text-red-500 after:content-['*']"
            />

            <TextInput
              id="nearest-city"
              name="nearest-city"
              placeholder="Badulla"
              required
              type="text"
            />
            {/* error text */}
            {errorCode === 11 && errorContainer(errorCode)}
          </div>
        )}
        {/* assign driver */}
        {isWithDriver && (
          <div>
            <Label
              htmlFor="assign-driver"
              value="Assign Driver"
              className="after:ml-0.5 after:text-red-500 after:content-['*']"
            />

            <Select id="assign-driver" name="assign-driver" required>
              <option value="car">Car</option>
              <option value="bike">Bike</option>
              <option value="tuk-tuk">Tuk-Tuk</option>
              <option value="van">Van</option>
            </Select>
            {/* error text */}
            {errorCode === 11 && errorContainer(errorCode)}
          </div>
        )}
        {/* insurance */}
        <div>
          <Label
            htmlFor="insurance"
            value="Insurance Document"
            className="after:ml-0.5 after:text-red-500 after:content-['*']"
          />

          <input
            className="block w-full cursor-pointer rounded-lg border border-gray-300 bg-gray-50 text-xs text-gray-900 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:placeholder-gray-400"
            id="insurance"
            name="insurance"
            type="file"
            accept=".png,.jpeg,.jpg"
          />
          <p className="text-end font-Poppins text-xs font-medium">
            Accept png , jpg , jpeg only.File size should be less than 2MB.
          </p>
        </div>
        {/* ownership doc */}
        <div>
          <Label
            htmlFor="ownership"
            value="Ownership Document"
            className="after:ml-0.5 after:text-red-500 after:content-['*']"
          />

          <input
            className="block w-full cursor-pointer rounded-lg border border-gray-300 bg-gray-50 text-xs text-gray-900 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:placeholder-gray-400"
            id="ownership"
            name="ownership"
            type="file"
            accept=".png,.jpeg,.jpg"
          />
          <p className="text-end font-Poppins text-xs font-medium">
            Accept png , jpg , jpeg only.File size should be less than 2MB.
          </p>
        </div>

        <div className="mt-5 flex w-full justify-center font-Poppins">
          <Button type="submit" className="w-full max-w-sm">
            Add Vehicle
          </Button>
        </div>
      </form>
    </Card>
  );
};
export default AddVehicle;
