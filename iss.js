const request = require("request");

const fetchMyIP = rqcallback => {
  request('https://api.ipify.org?format=json', (error, response, body) => {
    if (error) {
      //REMINDER: all end states need both err + data passed.
      rqcallback("Failed to get IP." + error, null);
      return;
    }
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      rqcallback(Error(msg), null);
      return;
    }
    rqcallback(null, JSON.parse(body).ip);
    return;
  });
};

const fetchGeoID = (ip, rqcallback) => {

  request(`https://ipvigilante.com/${ip}`, (error, response, body) => {
    if (error) {
      rqcallback("Failed to get Geo coordinates: " + error, null);
      return;
    }
    if (response.statusCode !== 200) {
      rqcallback(`HTTP error ${response.statusCode}. Response: \n${body}`);
      return;
    }

    const { latitude, longitude } = JSON.parse(body).data;

    rqcallback(null, {latitude, longitude});

  });
};


const flyoverTimes = (coordinates, rqcallback) => {
  request(`http://api.open-notify.org/iss-pass.json?lat=${coordinates.latitude}&lon=${coordinates.longitude}`, (error, response, body) => {
    if (error) {
      rqcallback("Failed to get passover times: " + error, null);
      return;
    }
    if (response.statusCode !== 200) {
      rqcallback(`HTTP error ${response.statusCode}. Response: \n${body}`);
      return;
    }
    const flyovers = JSON.parse(body).response;
    rqcallback(null, flyovers);
  });
};

const localTimes = (callback) => {
  fetchMyIP((error, data) => {
    if (error) {
      console.log("IP lookup error:\n", error);
      return;
    }
    console.log("IP: ", data);
  
    fetchGeoID(data, (error2, data2) =>{
      if (error2) {
        console.log("Geo coordinates lookup error:\n", error2);
        return;
      }
      console.log("data: ", data2);
  
      flyoverTimes(data2, (error3, data3) => {
        if (error3) {
          console.log("ISS flyover time lookup error:\n", error3);
          return;
        }
        callback(null, data3);
      });
    });
  });
}

module.exports = {
  fetchMyIP,
  fetchGeoID,
  flyoverTimes,
  localTimes
};