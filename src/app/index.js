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

document.addEventListener("DOMContentLoaded", fetchWeather);
