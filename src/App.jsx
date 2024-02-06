import { useReducer, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Product from "./component/Product";
import Cycle from "./component/cycle";
import CombineArray from "./component/CombineArray";

function App() {
  const reducer = (currentState, action) => {
    switch (action.type) {
      case "dec":
        return { number: currentState.number - action.payload };

      case "inc":
        return { number: currentState.number + action.payload };

      // if (action.hasOwnProperty("payload")) {
      //   return { number: currentState.number + action.payload };
      // }
      // return { number: currentState.number + 1 };

      default:
        return currentState;
    }
  };
  const [laststate, dispatch] = useReducer(reducer, { number: 10 });

  // const decHandler = () => {
  //   dispatch({ type: "dec" });
  // };
  // const incHandler = () => {
  //   dispatch({ type: "inc" });
  // };

  const buttonHandler = (actionType, payload) => {
    dispatch({ type: actionType, payload: payload });
  };

  return (
    <>
      <button onClick={() => buttonHandler("dec", 1)}>-</button>
      <label>{laststate.number}</label>
      <button onClick={() => buttonHandler("inc", 1)}>+</button>
      <button onClick={() => buttonHandler("inc", 3)}>++</button>
      <Product />
      {/* <Cycle /> */}
    </>
  );
}

export default App;
