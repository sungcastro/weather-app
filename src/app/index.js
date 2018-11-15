const { Weather } = require("./Weather");
const weather = new Weather("Vilnius", "lt");
require("./index.css");

async function fetchWeather() {
  const data = await weather.getWeather();
  console.log(data);
}

document.addEventListener("DOMContentLoaded", fetchWeather);
