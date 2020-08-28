const request = require('request-promise-native');

const fetchMyIP = () => {
<<<<<<< 4d1b5db63c53c5fe55ddc191b3004901db077db2
  return request('https://api.ipify.org?format=json')
}

const fetchGeoID = (data) => {
  let ip = JSON.parse(data).ip
  return request(`https://ipvigilante.com/${ip}`)
}
=======
  return request('https://api.ipify.org?format=json');
};

const fetchGeoID = (data) => {
  let ip = JSON.parse(data).ip;
  return request(`https://ipvigilante.com/${ip}`);
};
>>>>>>> commiting completed promise version of ISS tracker.

const flyoverTimes = (data) => {
  const { latitude, longitude } = JSON.parse(data).data;
  return request(`http://api.open-notify.org/iss-pass.json?lat=${latitude}&lon=${longitude}`
<<<<<<< 4d1b5db63c53c5fe55ddc191b3004901db077db2
  )
}
=======
  );
};
>>>>>>> commiting completed promise version of ISS tracker.

const localTimes = () => {
  fetchMyIP()
    .then(fetchGeoID)
    .then(flyoverTimes)
    .then((data) => {
<<<<<<< 4d1b5db63c53c5fe55ddc191b3004901db077db2
      let flyovers = JSON.parse(data).response
=======
      let flyovers = JSON.parse(data).response;
>>>>>>> commiting completed promise version of ISS tracker.
      for (let i = 0; i < flyovers.length; i++) {
        let bizzareUnixtime = flyovers[i]["risetime"];
        let muchBetter = new Date(bizzareUnixtime * 1000);
        console.log(`A pass at ${muchBetter} will occur and last ${flyovers[i]["duration"]} seconds.`);
      }
<<<<<<< 4d1b5db63c53c5fe55ddc191b3004901db077db2
      }
=======
    }
>>>>>>> commiting completed promise version of ISS tracker.
    )
    .catch((error) => {
      console.log("Something went wrong:\n", error.message);
    });
<<<<<<< 4d1b5db63c53c5fe55ddc191b3004901db077db2
}

    module.exports = {
      localTimes
    }
=======
};

module.exports = {
  localTimes
};
>>>>>>> commiting completed promise version of ISS tracker.
