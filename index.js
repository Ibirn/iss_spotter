const { fetchMyIP } = require('./iss');

fetchMyIP((error, data) => {
  if (error) {
    console.log("It didn't work!", error)
    return;
  }

  console.log("IP: ", data)
});