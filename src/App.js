import { useState } from "react";
import "./App.css";
import QuoteCard from "./components/QuoteCard/QuoteCard";
import { colors } from "./assets/utilities/colors";

const App = () => {
  //state for the color theme
  const [color, setColor] = useState("#37323E");

  //function that handles color changes
  const changeColor = () => {
    let newColor = colors[Math.floor(Math.random() * colors.length)];
    setColor((prev) => {
      while (prev === newColor) {
        newColor = colors[Math.floor(Math.random() * colors.length)];
      }
      return newColor;
    });
  };

  return (
    <div className="App" style={{ backgroundColor: color }}>
      <QuoteCard color={color} onColor={changeColor} />
      <span>by Dunklenn</span>
    </div>
  );
};

export default App;
