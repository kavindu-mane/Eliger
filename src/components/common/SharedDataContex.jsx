import React, { createContext, useContext, useState } from "react";

const SharedDataContext = createContext();

export const SharedDataProvider = ({ children }) => {
  const [sharedData, setSharedData] = useState("");

  return (
    <SharedDataContext.Provider value={{ sharedData, setSharedData }}>
      {children}
    </SharedDataContext.Provider>
  );
};

export const useSharedData = () => {
  return useContext(SharedDataContext);
};
