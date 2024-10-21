import React, { useContext, useRef } from "react";
import { colorContext } from "./useContext";

const UseRef = () => {
  const inputValue = useRef(null);
  const { color, changeColor } = useContext(colorContext);
  function focus() {
    inputValue.current.focus();
    console.log(inputValue.current.value);
    changeColor(inputValue.current.value);
  }
  return (
    <div>
      <input type="text" ref={inputValue} />
      <button onClick={focus}>focus</button>
    </div>
  );
};

export default UseRef;
