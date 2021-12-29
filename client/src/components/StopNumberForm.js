import { useState } from "react";
import apiClient from "../lib/apiClient";

const StopNumberForm = ({ setBuses }) => {
  const [ stopNumber, setStopNumber ] = useState(null);

  return (
    <>
      <label htmlFor="stop-number"><h3>Stop ID:</h3></label>
      <input type="text" id="stop-number" name="stop-number" onChange={(e) => setStopNumber(e.target.value)} />
      <button onClick={() => apiClient.getRouteEstimates(stopNumber, setBuses)}>find</button>
    </>
  )
};

export default StopNumberForm;