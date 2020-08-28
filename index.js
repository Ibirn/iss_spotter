const { localTimes } = require('./iss');


const prettyPrint = passArr => {
  for (let i = 0; i < passArr.length; i++) {
    console.log(`A pass at ${passArr[i]["risetime"]} will occur and last ${passArr[i]["duration"]} seconds.`)
    
  }
}

localTimes((error, data) => {
  if (error) {
    console.log("Somethings gone wrong.", error)
  }
  prettyPrint(data)
});

