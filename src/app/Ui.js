export class UI {
  constructor() {
    this.location = document.getElementById("weather-location");
    this.day = document.getElementById("weather-day");
    this.description = document.getElementById("weather-description");
    this.string = document.getElementById("weather-string");
    this.humidity = document.getElementById("weather-humidity");
    this.wind = document.getElementById("weather-wind");
  }

  render(weather) {
    this.location.textContent = weather.name + "/" + weather.sys.country;
    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth() + 1;
    this.day.textContent = `${day} / ${month}`;
    this.description.textContent = weather.weather[0]["description"];
    this.string.textContent = weather.main.temp + `°C`;
    this.humidity.textContent = `Humidity ` + weather.main.humidity;
    this.wind.textContent = `Wind: ` + weather.wind.speed + ` m/s`;
  }
}
