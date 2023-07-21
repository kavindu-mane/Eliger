import React, { lazy, useState } from "react";
import {
  Button,
  Checkbox,
  Label,
  TextInput,
  Dropdown,
  Carousel,
} from "flowbite-react";

const VehicleCard = lazy(() => import("../components/Home/VehicleCard"));
const HomeHeader = lazy(() => import("../components/Home/HomeHeader"));
const Footer = lazy(() => import("../components/Footer"));

const currentTime = () => {
  let currentTime = new Date();
  let ISTTime = new Date(currentTime.getTime() + 330 * 60000)
    .toISOString()
    .slice(0, -8);
  return ISTTime;
};

const today = () => {
  return new Date().toJSON().slice(0, 10);
};

const importAll = (r) => {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
};

const Home = () => {
  const [category, setCategory] = useState("Car");
  const [bookingMethod, setBookingMethod] = useState("Book Now");
  const [district, setDistrict] = useState("Colombo");
  const [driverNeeded, setDriverNeeded] = useState("With Driver");

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

  const images = importAll(
    require.context("../resources/", false, /.(png|jpe?g|svg)$/)
  );

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
          <Checkbox id="current-location" />
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
          <div className="mb-2 block">
            <Label htmlFor="pick-time" value="Pick-up time" />
          </div>
          <TextInput
            id="pick-time"
            type="datetime-local"
            defaultValue={currentTime()}
            min={currentTime()}
          />
        </div>
      </>
    );
  };

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
                <Dropdown.Item onClick={() => setDistrict(v)}>
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
            className="flex flex-col items-center justify-between sm:flex-row"
          >
            <span className="my-1 me-2">From : </span>
            <TextInput
              id="duration-from"
              type="date"
              defaultValue={today()}
              min={today()}
            />
            <span className="mx-2 my-1">To :</span>
            <TextInput
              id="duration-to"
              type="date"
              defaultValue={today()}
              min={today()}
            />
          </div>
        </div>
      </>
    );
  };

  return (
    <React.Fragment>
      <HomeHeader />
      <div className="my-10">
        <div className="relative my-10 -mt-[50vh] flex h-[150vh] w-full flex-col justify-center">
          <div className="absolute h-[150vh] w-full bg-slate-900">
            <Carousel leftControl rightControl>
              <img
                alt="..."
                src={images["carousel-1.jpg"]}
                className="h-[150vh] w-full object-cover opacity-60"
              />
              <img
                alt="..."
                src={images["carousel-2.jpg"]}
                className="h-[150vh] w-full object-cover opacity-60"
              />
              <img
                alt="..."
                src={images["carousel-3.jpg"]}
                className="h-[150vh] w-full object-cover opacity-60"
              />
              <img
                alt="..."
                src={images["carousel-4.jpg"]}
                className="h-[150vh] w-full object-cover opacity-60"
              />
              <img
                alt="..."
                src={images["carousel-5.jpg"]}
                className="h-[150vh] w-full object-cover opacity-60"
              />
            </Carousel>
          </div>

          {/* search */}
          <div className="relative translate-y-1/3">
            <h1 className="mx-1 my-5 ps-2 text-center font-noto text-2xl text-white md:ps-5 md:text-3xl">
              Find Vehicles.
            </h1>
            <div className="mb-10 flex w-full justify-center px-3">
              <div className="w-full max-w-xl rounded-md bg-gray-200 p-8 shadow-md drop-shadow-md dark:bg-gray-800 sm:w-2/3 md:w-1/2">
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
                      <Dropdown.Item
                        onClick={() => setBookingMethod("Book Now")}
                      >
                        Book Now
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => setBookingMethod("Rentout")}
                      >
                        Rentout
                      </Dropdown.Item>
                    </Dropdown>
                  </div>

                  {bookingMethod === "Book Now"
                    ? bookNowFields()
                    : rentOutFields()}

                  <Button type="submit">Find</Button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* vehicle types */}
        <div className="bg-gradient-to-br from-sky-700 to-emerald-500 pb-16 pt-10 ">
          <h1 className="mx-1 my-5 ps-2 text-center text-2xl text-white md:ps-5 md:text-3xl">
            Explore Our Top Picks: Featured Vehicles.
          </h1>
          <div className="mt-10 flex flex-wrap justify-center">
            <VehicleCard
              vehicle={"Bikes"}
              Img={images["bike.jpg"]}
              start={69}
              passenger={1}
            />
            <VehicleCard
              vehicle={"Tuk Tuk"}
              Img={images["tuk.jpg"]}
              start={99}
              passenger={3}
            />
            <VehicleCard
              vehicle={"Cars"}
              Img={images["car.jpeg"]}
              start={149}
              passenger={4}
            />
            <VehicleCard
              vehicle={"Vans"}
              Img={images["van.jpg"]}
              start={220}
              passenger={"6 to up"}
            />
          </div>
        </div>
      </div>

      {/* sign ups */}
      <div className="my-10 flex justify-center">
        <a
          className="mx-5 rounded-md bg-[#22B84C] px-3 py-2 font-noto text-white duration-300 ease-in hover:bg-orange-600"
          href="/rent"
        >
          Sign up to Rent
        </a>
        <a
          className="mx-5 rounded-md bg-[#22B84C] px-3 py-2 font-noto text-white duration-300 ease-in hover:bg-orange-600"
          href="/ride"
        >
          Sign up to Ride
        </a>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Home;
