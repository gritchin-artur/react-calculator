import { useState } from "react";
import "./App.css";
import { Button } from "./components/Button/Button";
import { Display } from "./components/Display/Display";
import { Title } from "./components/Title/Title";

function App() {
  const buttonSymbols = [
    "C",
    "+",
    "9",
    "8",
    "7",
    "/",
    "6",
    "5",
    "4",
    "*",
    "3",
    "2",
    "1",
    "-",
    "0",
    "=",
    ".",
  ];

  const [display, setDisplay] = useState("0");

  const handlerClass = (symb, index) => {
    let baseClass = "";

    if (symb === "C") baseClass = "resetBtn";
    else if (symb === "=") baseClass = "equalBtn";
    else if (["/", "*", "-", ".", "+"].includes(symb)) baseClass = "symbolBtn";
    else baseClass = "numberBtn";

    if (
      (symb === "C" && (index === 0 || index === 1)) ||
      (symb === "=" && (index === 15 || index === 16)) ||
      (symb === "+" && (index === 1 || index === 2))
    ) {
      baseClass += " double-width";
    }

    return baseClass;
  };

  const handleCount = (text) => {
    if (text === "C") {
      return setDisplay("0");
    }
    if (text === "=") {
      return setDisplay((prevDisplay) => eval(prevDisplay).toString());
    } else {
      setDisplay((prev) => {
        if (prev[prev.length - 1] === "0" && text !== ".")
          return prev.slice(0, -1) + text;
        return prev + text;
      });
    }
  };

  return (
    <div className="calculator">
      <Title />
      <Display display={display} />
      <div className="button-grid">
        {buttonSymbols.map((buttonSymbol, i) => (
          <Button
            text={buttonSymbol}
            className={handlerClass(buttonSymbol, i)}
            handler={handleCount}
            key={i}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
