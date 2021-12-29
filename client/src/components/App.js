import "../assets/stylesheets/App.css";
import logo from "../assets/images/logo.png";
import { useState } from "react";

import StopNumberForm from "./StopNumberForm";
import ScheduleList from "./ScheduleList";

const App = () => {
  const [ buses, setBuses ] = useState([]);

  return (
    <div>
      <header>
        <img src={logo} alt="A icon of a bus" />
        <h1>BUS•BUDDY</h1>
      </header>
      <main>
        <div className="input-container">
          <StopNumberForm setBuses={setBuses} />
        </div>

        <div className="list-container">
          <ScheduleList buses={buses} />
        </div>
      </main>
    </div>
  );
};

export default App;
