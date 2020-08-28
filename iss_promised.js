const request = require('request-promise-native');

const fetchMyIP = () => {
  return request('https://api.ipify.org?format=json')
}

const fetchGeoID = (data) => {
  let ip = JSON.parse(data).ip
  return request(`https://ipvigilante.com/${ip}`)
}

const flyoverTimes = (data) => {
  const { latitude, longitude } = JSON.parse(data).data;
  return request(`http://api.open-notify.org/iss-pass.json?lat=${latitude}&lon=${longitude}`
  )
}

const localTimes = () => {
  fetchMyIP()
    .then(fetchGeoID)
    .then(flyoverTimes)
    .then((data) => {
      let flyovers = JSON.parse(data).response
      for (let i = 0; i < flyovers.length; i++) {
        let bizzareUnixtime = flyovers[i]["risetime"];
        let muchBetter = new Date(bizzareUnixtime * 1000);
        console.log(`A pass at ${muchBetter} will occur and last ${flyovers[i]["duration"]} seconds.`);
      }
      }
    )
    .catch((error) => {
      console.log("Something went wrong:\n", error.message);
    });
}

    module.exports = {
      localTimes
    }