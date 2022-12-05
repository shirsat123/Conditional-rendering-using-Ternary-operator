import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [toggle, setToggle] = useState(false);
  // Conditional rendering using Function
  function getComponent() {
    if (toggle) {
      return <Timer />;
    } else {
      return <Dates />;
    }
  }
  return (
    <div className="App">
      {getComponent()}
      <br /> <br />
      <button id="btn" onClick={() => setToggle(!toggle)}>
        Switch
      </button>
    </div>
  );
}

const Timer = () => {
  const [timer, setTimer] = useState(new Date().toLocaleTimeString());
  const update = () => {
    let times = new Date().toLocaleTimeString();
    setTimer(times);
  };
  setInterval(update, 1);

  return (
    <div>
      <h1>Times</h1>
      {timer}
      <br />
      <br />
    </div>
  );
};

const Dates = () => {
  const [cdate, setCdate] = useState(new Date().toLocaleDateString());
  const udateDate = () => {
    let Dates = new Date().toLocaleDateString();
    setCdate(Dates);
  };
  setInterval(udateDate, 1000);
  return (
    <div>
      <h1>Dates</h1>
      {cdate}
    </div>
  );
};
