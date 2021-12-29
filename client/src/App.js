import './App.css';
import axios from "axios";
import { useState } from "react";
import logo from "./logo.png"

function App() {
  const [ buses, setBuses ] = useState([]);
  const [ stopNumber, setStopNumber ] = useState(null);

  const onClick = (e) => {
    e.preventDefault();
    axios.get(`https://api.translink.ca/rttiapi/v1/stops/${stopNumber}/estimates?apikey=2jSHMOpJwVzvTGqhWnqS`).then(response => {
      setBuses(response.data);
    });
  };

  return (
    <div>
      <header>
        <img src={logo} alt="A icon of a bus" />
        <h1>BUS•BUDDY</h1>
      </header>
      <main>
        <div className="input-container">
          <label htmlFor="stop-number"><h3>Stop ID:</h3></label>
          <input type="text" id="stop-number" name="stop-number" onChange={(e) => setStopNumber(e.target.value)} />
          <button onClick={onClick}>find</button>
        </div>

        <div className="list-container">
          <h3>Schedule:</h3>
          <ul>
            {buses.map(bus => (
              <li key={bus.RouteNo} className="route-container">
                <p className="route-title"><b>#{bus.RouteNo}</b> ( {bus.RouteName} )</p>
                <ul>
                  {bus.Schedules.map(schedule => (
                    <li>
                      <p className="route-info">~ {schedule.ExpectedLeaveTime}</p>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;
