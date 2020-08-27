const { fetchMyIP, fetchGeoID } = require('./iss');


fetchMyIP((error, data) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }
  console.log("IP: ", data);
  
  fetchGeoID(data, (error2, data2) =>{
    if(error2){
      console.log("err: ", error2)
      return;
    }
    console.log("data: ", data2)
  })
});

