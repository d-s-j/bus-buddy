import axios from "axios";

const apiClient = {
  getRouteEstimates(stopNumber, callback) {
    axios
      .get(`https://api.translink.ca/rttiapi/v1/stops/${stopNumber}/estimates?apikey=${process.env.REACT_APP_TRANSLINK_API}`)
      .then(response => {
        callback(response.data);
      });
  },
};

export default apiClient;