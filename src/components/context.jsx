import React, { createContext } from "react";

export const ToggleContext = createContext({});

export const ToggleContextProvider = ({ children }) => {
  return <ToggleContext.Provider>{children}</ToggleContext.Provider>;
};
