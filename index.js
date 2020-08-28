const { localTimes } = require('./iss');


const prettyPrint = passArr => {
  for (let i = 0; i < passArr.length; i++) {
    let bizzareUnixtime = passArr[i]["risetime"];
    let muchBetter = new Date(bizzareUnixtime * 1000);
    console.log(`A pass at ${muchBetter} will occur and last ${passArr[i]["duration"]} seconds.`);
  }
};

localTimes((error, data) => {
  if (error) {
    console.log("Somethings gone wrong.", error);
  }
  prettyPrint(data);
});

