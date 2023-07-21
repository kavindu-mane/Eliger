import React, { lazy, useState } from "react";
import Footer from "../components/Footer";
import Bike from "../resources/bike.jpeg";
import Tuk from "../resources/tuk.jpg";
import Cars from "../resources/car.jpg";
import Van from "../resources/van.jpg";
import { Button, Checkbox, Label, TextInput, Dropdown } from "flowbite-react";
const VehicleCard = lazy(() => import("../components/Home/VehicleCard"));
const HomeHeader = lazy(() => import("../components/Home/HomeHeader"));
const currentTime = () => {
  let currentTime = new Date();
  let ISTTime = new Date(currentTime.getTime() + 330 * 60000)
    .toISOString()
    .slice(0, -8);
  return ISTTime;
};
const Home = () => {
  const [category, setCategory] = useState("Car");
  const [bookingMethod, setBookingMethod] = useState("Book Now");
  return (
    <React.Fragment>
      <HomeHeader />
      <div className="my-10">
        {/* search */}
        <div>
          <h1 className="mx-1 my-5 ps-2 text-center text-2xl text-white md:ps-5 md:text-3xl">
            Find Vehicles.
          </h1>
          <div className="mb-10 flex w-full justify-center px-3">
            <div className="w-full max-w-xl rounded-md bg-gray-200 p-8 shadow-md drop-shadow-md dark:bg-gray-800 sm:w-2/3 md:w-1/2">
              <form className="flex max-w-lg flex-col gap-4 sm:w-96 md:w-auto">
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

                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="pick-up" value="Pick up location" />
                  </div>
                  <TextInput
                    id="pick-up"
                    type="text"
                    placeholder="Pickup address"
                  />
                </div>

                <div className="-mt-1 flex items-center gap-2">
                  <Checkbox id="current-location" />
                  <Label htmlFor="current-location">
                    Use my current location
                  </Label>
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
                    value={currentTime()}
                    min={currentTime()}
                  />
                </div>

                <Button type="submit">Find</Button>
              </form>
            </div>
          </div>
        </div>

        {/* vehicle types */}
        <div className="bg-sky-700 py-10">
          <h1 className="mx-1 my-5 ps-2 text-center text-2xl text-white md:ps-5 md:text-3xl">
            Explore Our Top Picks: Featured Vehicles.
          </h1>
          <div className="mt-10 flex flex-wrap justify-center">
            <VehicleCard
              vehicle={"Bikes"}
              Img={Bike}
              start={69}
              passenger={1}
            />
            <VehicleCard
              vehicle={"Tuk Tuk"}
              Img={Tuk}
              start={99}
              passenger={3}
            />
            <VehicleCard
              vehicle={"Cars"}
              Img={Cars}
              start={149}
              passenger={4}
            />
            <VehicleCard
              vehicle={"Vans"}
              Img={Van}
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
