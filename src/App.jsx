import { useState } from "react";
import Numpad from "./Numpad/Numpad";
import "./App.css";

let numbersString = "";

function App() {
  const [numberView, setNumberView] = useState("");
  const [operator, setOperator] = useState(null);
  const [number, setNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");

  function clear() {
    setNumberView("");
    setOperator(null);
    setNumber(0);
    numbersString = "";
  }

  function mathOperation(o) {
    if (operator == null) {
      numbersString += o;
      setNumberView(numbersString);
      setOperator(o);
    } else {
      return;
    }
  }

  function numberAdd(n) {
    if (operator === null) {
      numbersString += n;
      setNumber((prevNumber) => prevNumber + n);
      setNumberView(numbersString);
    } else {
      numbersString += n;
      setSecondNumber((prevNumber) => prevNumber + n);
      setNumberView(numbersString);
    }
  }

  function calculate() {
    let sum;
    const firstNumberValue = parseInt(number);
    const secondNumberValue = parseInt(secondNumber);

    switch (operator) {
      case "x":
        sum = firstNumberValue * secondNumberValue;
        break;
      case "÷":
        sum = firstNumberValue / secondNumberValue;
        break;
      case "+":
        sum = firstNumberValue + secondNumberValue;
        break;
      case "-":
        sum = firstNumberValue - secondNumberValue;
        break;
    }

    const sumToString = sum.toString();

    setNumberView(sum);
    setOperator(null);
    setNumber(sumToString);
    setSecondNumber("");
    numbersString = sumToString;
  }

  return (
    <>
      <div className="mx-auto grid grid-cols-4 w-75 gap-1 ">
        <div className=" bg-white col-span-full border-2 h-16">
          <span>{numberView}</span>
        </div>
        <Numpad onClick={() => numberAdd("7")}>7</Numpad>
        <Numpad onClick={() => numberAdd("8")}>8</Numpad>
        <Numpad onClick={() => numberAdd("9")}>9</Numpad>
        <Numpad onClick={() => mathOperation("x")}>x</Numpad>

        <Numpad onClick={() => numberAdd("4")}>4</Numpad>
        <Numpad onClick={() => numberAdd("5")}>5</Numpad>
        <Numpad onClick={() => numberAdd("6")}>6</Numpad>
        <Numpad onClick={() => mathOperation("÷")}>÷</Numpad>

        <Numpad onClick={() => numberAdd("1")}>1</Numpad>
        <Numpad onClick={() => numberAdd("2")}>2</Numpad>
        <Numpad onClick={() => numberAdd("3")}>3</Numpad>
        <Numpad onClick={() => mathOperation("+")}>+</Numpad>

        <Numpad onClick={clear}>C</Numpad>
        <Numpad onClick={() => numberAdd("0")}>0</Numpad>
        <Numpad onClick={calculate}>=</Numpad>
        <Numpad onClick={() => mathOperation("-")}>-</Numpad>
        
      </div>
    </>
  );
}

export default App;
