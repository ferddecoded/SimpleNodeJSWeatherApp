// used to make an http request in node
//npm install request --save
let request = require("request");

//install yargs to define variables from the command line
//npm install yargs --save
const argv = require("yargs").argv;

//we let our city variable equal argv.c or default to toronto
//to call for a varaible, istead of node index.js, we do node index.js -c Vancouver
//we use -c since we identifed it as that in city
let city = argv.c || "toronto";
let apiKey = "094b397f833fd95d9f99827fd400a62c";
//we add &units=imperial to convert to celcius
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;


//pass our target url and it returns a callback function
request(url, function(err, response, body) {
  if (err) {
     //if it errors out, log the error
    console.log("error:", error);
  } else {
     //if successful, log the body of the response
      let weather = JSON.parse(body);
      let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
      console.log(message);
  }
});
