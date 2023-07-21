import React from "react";
import { Card } from "flowbite-react";

const VehicleCard = ({ Img, vehicle, start , passenger}) => {
  return (
    <Card
      imgAlt={vehicle}
      imgSrc={Img}
      className="m-3 max-w-xs shadow-lg drop-shadow-lg bg-slate-300"
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {vehicle}
      </h5>
      <p className="flex flex-col font-normal text-gray-700 dark:text-gray-400">
        Start at : Rs {start} per Kilometer. Passenger : {passenger}
      </p>
    </Card>
  );
};

export default VehicleCard;
