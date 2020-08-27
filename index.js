const { fetchMyIP, fetchGeoID, flyoverTimes } = require('./iss');


fetchMyIP((error, data) => {
  if (error) {
    console.log("IP lookup error:\m", error);
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
      if (error3){
        console.log("ISS flyover time lookup error:\n", error3)
        return;
      }
      console.log("flyover data: ", data3)
    })

  });
});

