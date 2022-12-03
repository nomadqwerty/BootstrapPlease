import React, { createContext, useState } from "react";

const globalState = createContext();

const GlobalProvider = ({ children }) => {
  const [service, setService] = useState({});

  const store = {
    services: { service, setService },
  };

  return <globalState.Provider value={store}>{children}</globalState.Provider>;
};

export { GlobalProvider };
export default globalState;
