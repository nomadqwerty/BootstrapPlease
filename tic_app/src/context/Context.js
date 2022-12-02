import React, { createContext, useState } from "react";

const globalState = createContext();

const GlobalProvider = ({ children }) => {
  const [service, setService] = useState({});
  const [training, setTraining] = useState({});
  const [form, setForm] = useState({});

  const store = {
    services: { service, setService },
    trainings: { training, setTraining },
    forms: { form, setForm },
  };

  return <globalState.Provider value={store}>{children}</globalState.Provider>;
};

export { GlobalProvider };
export default globalState;
