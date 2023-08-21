import React, { lazy, useState } from "react";
import { GoogleMap, MarkerF } from "@react-google-maps/api";
const Header = lazy(() => import("../components/common/Header"));
const Footer = lazy(() => import("../components/common/Footer"));
const FindVehicles = lazy(() => import("../components/common/FindVehicles"));

// colombo location
const center = { lat: 6.927, lng: 80.001 };

const Search = () => {
  const [directions, setDirections] = useState(null);
  const [durations, setDurations] = useState("");
  const [distance, setDistance] = useState("");

  return (
    <React.Fragment>
      <div className="flex min-h-screen flex-col items-center justify-between bg-slate-200 dark:bg-gray-800">
        {/* header */}
        <Header />
        {/* container */}
        <div className="flex w-full flex-col-reverse py-10 xl:flex-row">
          {/* search and results */}
          <div className="flex w-full flex-col items-center justify-center xl:w-1/2">
              <FindVehicles isEmbed={true} />
          </div>
          <div className="h-[50vh] w-full px-5 xl:h-auto xl:w-1/2">
            {/* map */}
            <Map />
          </div>
        </div>
        {/* footer */}
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Search;

const Map = () => {
  return (
    <GoogleMap
      center={center}
      zoom={11}
      mapContainerClassName="w-full h-full"
      options={{
        fullscreenControl: false,
        mapTypeControl: false,
        streetViewControl: false,
      }}
    >
      <MarkerF position={center} />
    </GoogleMap>
  );
};
