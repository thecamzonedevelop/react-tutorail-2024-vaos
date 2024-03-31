import React, { useContext } from "react";

const TestContext = React.createContext();

export const useTestContext = () => {
  return useContext(TestContext);
};
