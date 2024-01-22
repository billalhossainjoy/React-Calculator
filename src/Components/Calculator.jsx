import React, { useState } from "react";

function Calculator() {
  const [state, setState] = useState("0");
  const ac = () => {
    setState("0");
  };
  const backSpace = () => {};
  const Plus = () => {};
  const Minus = () => {};
  const Multi = () => {};
  const clicked = (num) => {
    console.log(num);
    if (num == "0" && state[0] == "0" && state.length == 1) setState((prev) => `0`);
    else if (num == ".") setState((prev) => `${prev}${num}`);
    else
      for (let i = 0; i <= 9; i++) {
        if (num == i) setState((prev) => `${prev}${num}`);
      }
  };

  return (
    <>
      <div className=" w-[80%] lg:w-80 bg-gray-800 h-[80%] p-5 rounded-lg flex flex-col justify-center gap-3">
        <div className="display bg-gray-300 rounded-lg ">
          <div className=" p-5 text-4xl font-bold">{state}</div>
          <div className=" p-5 pt-0 text-gray-500">answer</div>
        </div>
        <div className="buttons rounded-lg  h-full flex flex-row">
          <div className="numbers w-full h-full grid grid-cols-3">
            <button onClick={() => clicked("Ac")}>Ac</button>
            <button onClick={() => clicked("b")}>b</button>
            <button onClick={() => clicked("%")}>%</button>
            <button onClick={() => clicked("1")}>1</button>
            <button onClick={() => clicked("2")}>2</button>
            <button onClick={() => clicked("3")}>3</button>
            <button onClick={() => clicked("4")}>4</button>
            <button onClick={() => clicked("5")}>5</button>
            <button onClick={() => clicked("6")}>6</button>
            <button onClick={() => clicked("7")}>7</button>
            <button onClick={() => clicked("8")}>8</button>
            <button onClick={() => clicked("9")}>9</button>
            <button onClick={() => clicked(".")}>.</button>
            <button onClick={() => clicked("0")}>0</button>
          </div>
          <div className="instractions grid grid-cols-1 ">
            <button onClick={() => clicked("+")}>+</button>
            <button onClick={() => clicked("-")}>-</button>
            <button onClick={() => clicked("*")}>*</button>
            <button onClick={() => clicked("/")}>/</button>
            <button onClick={() => clicked("=")}>=</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Calculator;
