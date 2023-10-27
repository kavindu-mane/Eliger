import React, { useCallback, useEffect, useState } from "react";

const Test = () => {
  const [coords, setCoords] = useState(null);
  const [iter, setIter] = useState(0);

  const getCurrentLocation = useCallback(() => {
    setInterval(() => {
    // check geolocatrion availability
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCoords(position.coords);
        setIter((prev) => prev + 1);
      });
    } else {
      console.log("Browser unsuppor");
    }
    },2000);
  }, []);

  useEffect(() => {
    getCurrentLocation();
  }, [getCurrentLocation]);

  return (
    <div>
      lat : {coords?.latitude}
      <br />
      lng : {coords?.longitude}
      <br />
      iterrations : {iter}
    </div>
  );
};

export default Test;
