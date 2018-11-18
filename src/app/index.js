const { Weather } = require("./Weather");
const { UI } = require("./Ui");
const { Store } = require("./Store");

const store = new Store();
const { city, countryCode } = store.getLocationData();

const weather = new Weather(city, countryCode);
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
  store.setLocationData(city, countryCode);
});

document.addEventListener("DOMContentLoaded", fetchWeather);
