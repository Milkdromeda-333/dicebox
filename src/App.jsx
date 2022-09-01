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

  return (
    <div className="container">
      <div className="dicebox--container">
        <Dicebox randomNum={num[0]} />
        <Dicebox randomNum={num[1]} />
        <Dicebox randomNum={num[2]} />
        <Dicebox randomNum={num[3]} />
        <Dicebox randomNum={num[4]} />
      </div>
      <div className="button--container">
        <Button clickHandler={generateRandomNum} />
      </div>
    </div>
  );
}
