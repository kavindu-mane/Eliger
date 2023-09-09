import { Button, Label, TextInput, Select, FileInput } from "flowbite-react";
import { useCallback, useState, useEffect, lazy } from "react";
import { MdOutlineError } from "react-icons/md";
import ErrorData from "../../Data/ErrorData";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useNavigate } from "react-router-dom";
const LoadingSpinner = lazy(() => import("../Common/LoadingSpinner"));

// create sweet alert object
const Alert = withReactContent(Swal);

const AddVehicle = () => {
  const [errorCode, setErrorCode] = useState(null);
  const [isBookNow, setIsBookNow] = useState(true);
  const [isWithDriver, setIsWithDriver] = useState(true);
  const [drivers, setDrivers] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // custom allert function with sweet alert 2
  const setAlert = (icon, title, desc) => {
    return Alert.fire({
      icon: icon,
      title: title,
      text: desc,
    });
  };

  // submit registration form
  const handleSubmit = async (e) => {
    // clear previous errors
    setErrorCode(null);
    // remove default form submission
    e.preventDefault();
    // get data from form fields as FormData object
    const formData = new FormData(e.target);
    // change loading state to true
    setIsLoading(true);
    // send data using axios post function
    await axios
      .post("/add_vehicle", formData)
      .then((response) => {
        if (response.status === 200) {
          if (response.data === 200)
            setAlert(
              "success",
              "Registration success",
              "Successfully sent the email verification message to given email."
            );
          else if (response.data === 14) navigate("/login");
          setIsLoading(false);
          setErrorCode(response.data);
        } else {
          setAlert("error", "Registration failed", ErrorData[500]);
          setIsLoading(false);
        }
      })
      .catch((error) => {
        setAlert("error", "Registration failed", ErrorData[500]);
        setIsLoading(false);
      });
  };

  // error messages
  const errorContainer = (errCode) => {
    return (
      <p className="flex items-center gap-x-1 font-Poppins text-sm font-semibold text-red-500">
        <MdOutlineError /> {ErrorData[errCode]}
      </p>
    );
  };

  // load data function
  const fetch = useCallback(async () => {
    setDrivers(null);
    const formData = new FormData();
    formData.append("type", "driver");
    formData.append("status", "verified");
    await axios
      .post("/load_owner_property", formData)
      .then((response) => {
        if (response.data.length !== 0) {
          setDrivers(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // load data function run in component mount
  useEffect(() => {
    fetch();
  }, [fetch]);

  return (
    <div className="w-full max-w-4xl">
      {/* loading */}
      {isLoading && <LoadingSpinner />}
      <div className="mb-9 font-Poppins text-2xl font-medium">Add Vehicle</div>
      <form className="flex flex-col gap-4" onSubmit={(e) => handleSubmit(e)}>
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
            className="inputs"
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
            className="inputs"
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
              className="inputs"
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
            className="inputs"
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
            className="inputs"
          />
          {/* error text */}
          {errorCode === 11 && errorContainer(errorCode)}
        </div>
        {/* price */}
        <div>
          {isBookNow ? (
            <Label
              htmlFor="price"
              value="Price per Km(LKR)"
              className="after:ml-0.5 after:text-red-500 after:content-['*']"
            />
          ) : (
            <Label
              htmlFor="price"
              value="Price per day(LKR)"
              className="after:ml-0.5 after:text-red-500 after:content-['*']"
            />
          )}

          <TextInput
            id="price"
            name="price"
            defaultValue={"0.00"}
            required
            type="number"
            min={0}
            step={0.01}
            className="inputs"
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
              className="inputs"
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

            <Select
              id="assign-driver"
              name="assign-driver"
              required
              className="inputs"
              disabled={drivers === null}
            >
              {drivers?.map((data, i) => {
                return (
                  <option value={data?.Driver_Id} key={i}>
                    {data?.Driver_firstname} {data?.Driver_lastname}
                  </option>
                );
              })}
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

          <FileInput
            id="insurance"
            name="insurance"
            accept=".png,.jpeg,.jpg"
            className="inputs"
            helperText="Accept png , jpg , jpeg only.File size should be less than 2MB."
          />
        </div>
        {/* ownership doc */}
        <div>
          <Label
            htmlFor="ownership"
            value="Ownership Document"
            className="after:ml-0.5 after:text-red-500 after:content-['*']"
          />

          <FileInput
            id="ownership"
            name="ownership"
            className="inputs"
            accept=".png,.jpeg,.jpg"
            helperText="Accept png , jpg , jpeg only.File size should be less than 2MB."
          />
        </div>

        <div className="mt-5 flex w-full justify-center font-Poppins">
          <Button type="submit" className="w-full max-w-sm">
            Add Vehicle
          </Button>
        </div>
      </form>
    </div>
  );
};
export default AddVehicle;
