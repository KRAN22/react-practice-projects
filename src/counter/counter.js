import { useEffect } from "react";
import { useState } from "react/cjs/react.development";

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {});
  return (
    <div style={{ width: "500px", margin: "auto", paddingTop: "40px" }}>
      <h1 style={{ color: "red" }}>Counter : {counter}</h1>
      <h2>you clicked {counter} times</h2>
      <button
        style={{
          fontSize: "20px",
          backgroundColor: "black",
          color: "white",
          padding: "15px",
          border: "black",
        }}
        onClick={() => {
          setCounter(counter + 3);
        }}
      >
        Send Data
      </button>
    </div>
  );
};
