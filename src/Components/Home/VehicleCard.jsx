import React from "react";
import { Card } from "flowbite-react";
import { AiFillCheckCircle } from "react-icons/ai";

const VehicleCard = ({ Img, vehicle, start, passenger }) => {
  return (
    <Card
      data-aos="fade-up"
      className="relative m-3 flex w-[17rem] flex-col bg-transparent shadow-xl shadow-slate-400/50 drop-shadow-lg dark:bg-transparent dark:shadow-slate-900"
    >
      <div className="absolute start-0 top-0 -z-10 h-full w-full rounded-md bg-white dark:bg-gradient-to-br dark:from-[#212529] dark:to-[#415A77] dark:opacity-50"></div>
      <img
        src={Img}
        alt={vehicle}
        width={170}
        height={170}
        className=" place-self-center"
      />
      <div className="-mx-2">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {vehicle}
        </h5>
        <p className="mb-5 flex flex-col text-sm font-normal text-gray-700 dark:text-gray-300">
          <span className="my-1 flex items-center">
            <AiFillCheckCircle className="me-2 text-sky-400" /> Start at : Rs{" "}
            {start} per Kilometer.
          </span>
          <span className="my-1 flex items-center">
            <AiFillCheckCircle className="me-2 text-sky-400" /> Passenger :{" "}
            {passenger}
          </span>
        </p>
        <a
          href="/search"
          className="w-fit rounded-sm bg-emerald-500 px-3 py-2 text-sm font-bold text-white duration-300 ease-in hover:bg-orange-400"
        >
          Rent Now
        </a>
      </div>
    </Card>
  );
};

export default VehicleCard;
