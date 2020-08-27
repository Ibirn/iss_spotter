const request = require("request");

const fetchMyIP = rqcallback => {
  request('https://api.ipify.org?format=json', (error, response, body) => {
    if(error) {
      //all end states need pass/fail
      rqcallback("Failed to get IP." + error, null)
      //console.log("err", error)
    }
    rqcallback(null, body)
    //console.log(body)
  })
}

module.exports = {
  fetchMyIP
}