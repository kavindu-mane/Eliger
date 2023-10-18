import { Button, Label, TextInput, Select, FileInput } from "flowbite-react";
import { useCallback, useState, useEffect, lazy } from "react";
import { MdOutlineError } from "react-icons/md";
import { CgSpinnerTwoAlt } from "react-icons/cg";
import ErrorData from "../../Data/ErrorData";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useNavigate } from "react-router-dom";
import districtArray from "../../Data/DistrictArray";
import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";
const LoadingSpinner = lazy(() => import("../Common/LoadingSpinner"));

// create sweet alert object
const Alert = withReactContent(Swal);

// colombo location
const center = { lat: 6.927, lng: 80.001 };
// google map libraries
const libs = ["places"];

const AddVehicle = ({ owner }) => {
  // load map api
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY,
    libraries: libs,
  });

  const [errorCode, setErrorCode] = useState(null);
  const [isBookNow, setIsBookNow] = useState(true);
  const [drivers, setDrivers] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [rentLocation, setRentLocation] = useState(null);
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
    formData.append("owner", owner);
    // check map location added or not
    if (rentLocation === null && !isBookNow) {
      setErrorCode(46);
      return;
    } else if (!isBookNow) {
      formData.append("lat", rentLocation.split(",")[0]);
      formData.append("long", rentLocation.split(",")[1]);
    }
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
              "Your vehicle successfully registered."
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

  // return loading spinner while google map loading
  if (!isLoaded)
    return (
      <div className="flex h-screen w-screen flex-col items-center justify-center">
        <CgSpinnerTwoAlt className="h-20 w-20 animate-spin text-emerald-400" />
        <h1 className="mt-8 font-Poppins text-2xl font-medium italic">
          Map is loading..
        </h1>
      </div>
    );

  return (
    <div className="w-full max-w-4xl">
      {/* loading */}
      {isLoading && <LoadingSpinner />}
      <div className="mb-9 font-Poppins text-2xl font-medium">Add Vehicle</div>
      <form
        className="flex flex-col gap-4"
        onSubmit={(e) => handleSubmit(e)}
        encType="multipart/form-data"
      >
        <div className="flex flex-col gap-4 md:flex-row">
          {/* rent type */}
          <div className="w-full">
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
              onChange={() => setIsBookNow(!isBookNow)}
            >
              <option value="rent-out">Rent-out</option>
              <option value="book-now">Book-now</option>
            </Select>
            {/* error text */}
            {[25, 31].includes(errorCode) && errorContainer(errorCode)}
          </div>
          {/* vehicle type */}
          <div className="w-full">
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
            {[26, 32].includes(errorCode) && errorContainer(errorCode)}
          </div>
        </div>
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
          {[27, 33].includes(errorCode) && errorContainer(errorCode)}
        </div>
        <div className="flex flex-col gap-4 md:flex-row">
          {/* passenger amount */}
          <div className="w-full">
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
            {[28, 34].includes(errorCode) && errorContainer(errorCode)}
          </div>
          {/* price */}
          <div className="w-full">
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
              defaultValue={99.99}
              required
              type="number"
              min={0}
              step={0.01}
              className="inputs"
            />
            {/* error text */}
            {[29, 35].includes(errorCode) && errorContainer(errorCode)}
          </div>
        </div>
        {/* assign driver */}
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
            disabled={drivers === null && isBookNow}
          >
            {drivers?.map((data, i) => {
              return (
                <option value={data?.Driver_Id} key={i}>
                  {data?.Driver_firstname} {data?.Driver_lastname}
                </option>
              );
            })}
            {!isBookNow && <option value={-99}>Without driver</option>}
            {isBookNow && drivers === null && (
              <option value={-100}>No any drivers found.</option>
            )}
          </Select>
          {/* error text */}
          {errorCode === 30 && errorContainer(errorCode)}
        </div>
        {/* district */}
        {!isBookNow && (
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="district"
                value="District"
                className="after:ml-0.5 after:text-red-500 after:content-['*']"
              />
            </div>
            <Select
              id="district"
              name="district"
              required
              defaultValue={"Colombo"}
            >
              {districtArray.map((district, i) => {
                return (
                  <option key={i} value={district}>
                    {district}
                  </option>
                );
              })}
            </Select>
            {/* error text */}
            {errorCode === 36 && errorContainer(errorCode)}
          </div>
        )}
        {/* map */}
        {!isBookNow && (
          <div className="mb-8 h-[50vh] w-full">
            <Label
              htmlFor="map"
              className="after:ml-0.5 after:text-red-500 after:content-['*']"
              value=" Select rent out location"
            />
            <GoogleMap
              id="map"
              center={center}
              zoom={11}
              mapContainerClassName="w-full h-full rounded-md"
              options={{
                fullscreenControl: false,
                mapTypeControl: false,
                streetViewControl: false,
              }}
            >
              <MarkerF
                position={center}
                draggable={true}
                onDragEnd={(event) =>
                  setRentLocation(event.latLng.toUrlValue())
                }
              />
            </GoogleMap>
            {/* error text */}
            {errorCode === 46 && errorContainer(errorCode)}
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
            required
            helperText="Accept png , jpg , jpeg only.File size should be less than 2MB."
          />
          {/* error text */}
          {[37, 38, 39, 40].includes(errorCode) && errorContainer(errorCode)}
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
            required
            helperText="Accept png , jpg , jpeg only.File size should be less than 2MB."
          />
          {/* error text */}
          {[41, 42, 43, 44].includes(errorCode) && errorContainer(errorCode)}
        </div>
        <div className="mt-5 flex w-full justify-center font-Poppins">
          <Button
            type="submit"
            className="w-full max-w-sm"
            disabled={drivers === null && isBookNow}
          >
            Add Vehicle
          </Button>
        </div>
      </form>
    </div>
  );
};
export default AddVehicle;
