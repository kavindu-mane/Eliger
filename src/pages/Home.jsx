import React, { lazy } from "react";
import { Carousel } from "flowbite-react";
import images from "../components/Data/ImageLoader";
const VehicleCard = lazy(() => import("../components/Home/VehicleCard"));
const HomeHeader = lazy(() => import("../components/Home/HomeHeader"));
const Footer = lazy(() => import("../components/common/Footer"));
const FindVehicles = lazy(() => import("../components/common/FindVehicles"));

const Home = () => {
  // carosel images
  const carouselImages = (i) => {
    return (
      <img
        alt="carousel items"
        src={images[`carousel-${i}.jpg`]}
        className="h-[180vh] max-h-[120rem] min-h-[60rem] w-full object-cover opacity-40"
        key={i}
      />
    );
  };

  return (
    <React.Fragment>
      {/* home page hero section */}
      <HomeHeader />
      {/* carousel with find form */}
      <div className="relative my-10 -mt-[50vh] flex h-[180vh] max-h-[120rem] min-h-[60rem] w-full flex-col justify-center md:-mt-[30vh]">
        {/* carousel */}
        <div className="absolute h-[180vh] max-h-[120rem] min-h-[60rem] w-full bg-slate-950">
          <Carousel leftControl rightControl indicators={true}>
            {[1, 2, 3, 4, 5].map((i) => {
              return carouselImages(i);
            })}
          </Carousel>
        </div>

        {/* search */}
        <div className="relative z-50 mb-10 flex w-full translate-y-[20vh] justify-center px-3 md:translate-y-1/4">
          {/* find form */}
          <div
            data-aos="fade-up"
            className="flex w-full justify-center xl:justify-end"
          >
            <FindVehicles />
          </div>
          {/* find form text */}
          <div className="relative ms-20 hidden w-full items-center xl:flex">
            <h1 className="flex flex-col text-8xl font-bold uppercase text-white">
              <span data-aos="fade-left" className="w-fit">
                Find
                <br />
                Vehicle
              </span>
              <span
                data-aos="fade-right"
                className="font-outline text-transparent"
              >
                Anytime
                <br />
                Anywhere
              </span>
            </h1>
            {/* blur effect */}
            <div className="absolute -z-10 h-full w-full bg-slate-950 opacity-40 blur-3xl"></div>
          </div>
        </div>
      </div>

      {/* vehicle types */}
      <div className="relative z-0 my-10 pb-16 pt-5">
        {/* left matrix */}
        <img
          src={images["matrix.svg"]}
          alt="matrix"
          className="absolute left-0 top-14 -z-10 -translate-x-1/2 opacity-80 dark:opacity-50"
        />

        {/* top matrix */}
        <img
          src={images["matrix.svg"]}
          alt="matrix"
          className="animation-delay-2 absolute left-1/3 top-5 -z-0 -translate-x-1/2 animate-upDown opacity-50 dark:opacity-20"
        />

        {/* right large matrix */}
        <img
          src={images["matrix.svg"]}
          alt="matrix"
          className="absolute right-[15%] top-1/4 -z-0 -translate-x-1/2 animate-upDown opacity-50 dark:opacity-20"
        />
        <h1 className="mx-1 my-5 flex items-center justify-center text-center text-slate-900 dark:text-white">
          <span
            data-aos="fade-right"
            className="z-0 pe-5 text-end font-sans text-2xl italic md:text-5xl lg:pe-10"
          >
            Explore Our
            <br />
            Top Picks
          </span>
          <span
            data-aos="fade-left"
            className="font-outline-2 text-3xl font-bold text-transparent md:text-6xl"
          >
            Featured Vehicles
          </span>
        </h1>
        <div className="mt-10 flex flex-wrap justify-center">
          <VehicleCard
            vehicle={"Bikes"}
            Img={images["bike.png"]}
            start={69}
            passenger={1}
          />
          <VehicleCard
            vehicle={"Tuk Tuk"}
            Img={images["tuk.png"]}
            start={99}
            passenger={3}
          />
          <VehicleCard
            vehicle={"Cars"}
            Img={images["car.png"]}
            start={149}
            passenger={4}
          />
          <VehicleCard
            vehicle={"Vans"}
            Img={images["van.png"]}
            start={220}
            passenger={"6 to up"}
          />
        </div>
        {/* bottom large matrix */}
        <img
          src={images["matrix.svg"]}
          alt="matrix"
          className="animation-delay-1 absolute bottom-14 left-1/3 -z-10 -translate-x-1/2 animate-upDown opacity-50 dark:opacity-20"
        />

        {/* right small matrix */}
        <img
          src={images["matrix.svg"]}
          alt="matrix"
          className="absolute bottom-0 right-0 -z-0 translate-x-1/2 opacity-70 dark:opacity-40"
        />
      </div>

      {/* bottom image area */}
      <div className="h-fix relative w-full bg-slate-950">
        <img
          src={images["carousel-3.jpg"]}
          alt="bottom button area"
          className="h-[400px] w-screen rounded-t-lg border-t border-slate-400 object-cover opacity-40 md:h-[500px]"
        />

        {/* caption text */}
        <div className="absolute start-0 top-0 flex h-full w-screen flex-col items-center justify-center">
          <h1
            data-aos="fade-down"
            className="my-5 text-5xl text-white md:text-6xl"
          >
            Any doubt ?
          </h1>
          <div className="flex items-center font-bold">
            <a
              data-aos="fade-right"
              href="/faq"
              className="text-3xl text-orange-400 duration-300 ease-in hover:text-emerald-400 md:text-4xl"
            >
              Visit FAQ
            </a>
            <p data-aos="fade-up" className="mx-3 text-2xl text-white">
              or
            </p>
            <a
              data-aos="fade-left"
              href="/contact"
              className="text-3xl text-emerald-400 duration-300 ease-in hover:text-orange-400 md:text-4xl"
            >
              Contact Us
            </a>
          </div>
        </div>
        {/* battons */}
        <div
          data-aos="fade-up"
          className="absolute bottom-10 mt-20 flex w-screen justify-center"
        >
          <a
            className="mx-5 rounded-md bg-emerald-500 px-3 py-2 text-center font-noto text-white duration-300 ease-in hover:bg-orange-400"
            href="/rent"
          >
            Sign up to Rent
          </a>
          <a
            className="mx-5 rounded-md bg-emerald-500 px-3 py-2 text-center font-noto text-white duration-300 ease-in hover:bg-orange-400"
            href="/ride"
          >
            Sign up to Ride
          </a>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Home;
