const { Weather } = require("./Weather");
const { UI } = require("./Ui");

const weather = new Weather("Vilnius", "lt");
const ui = new UI();

require("./index.css");

async function fetchWeather() {
  const data = await weather.getWeather();
  console.log(data);
  ui.render(data);
}

document.getElementById("w-change-btn").addEventListener("click", e => {
  e.preventDefault();
  const city = document.getElementById("city").value;
  const countryCode = document.getElementById("countryCode").value;
  weather.changeLocation(city, countryCode);
  fetchWeather();
  console.log(city, countryCode);
});

document.addEventListener("DOMContentLoaded", fetchWeather);
