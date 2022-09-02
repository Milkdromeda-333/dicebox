import Dicebox from "./Dicebox.jsx";
import Button from "./Button.jsx";
import React from "react";

export default function App() {

  const [num, setNum] = React.useState([0, 0, 0, 0, 0]);

  function generateRandomNum() {
    setNum([
      Math.ceil(Math.random() * 5),
      Math.ceil(Math.random() * 5),
      Math.ceil(Math.random() * 5),
      Math.ceil(Math.random() * 5),
      Math.ceil(Math.random() * 5)
    ]);
  }

  const diceboxes = num.map(number => <Dicebox randomNum={number} />);

  return (
    <div className="container">
      <div className="dicebox--container">
        {diceboxes}
      </div>
      <div className="button--container">
        <Button clickHandler={generateRandomNum} />
      </div>
    </div>
  );
}
