import React, { createContext } from "react";

// 1- create context
const colorContext = createContext();
// 2- create provider
const UseContextProvider = ({ children }) => {
  const [color, setColor] = React.useState("red");

  function changeColor(newColor) {
    setColor(newColor);
  }
  return (
    <colorContext.Provider value={{ color, changeColor }}>
      {children}
    </colorContext.Provider>
  );
};
// 3- export context to use , provider to wrap all componants
export { UseContextProvider, colorContext };
// 4- wrap all app with provider on index.js
