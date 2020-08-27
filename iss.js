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

module.exports = {
  fetchMyIP
};