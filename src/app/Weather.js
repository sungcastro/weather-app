export class Weather {
  constructor(city, countryCode) {
    this.apiKey = "328d874cf805b68f6271e8f6454a53b3";
    this.city = city;
    this.countryCode = countryCode;
  }

  async getWeather() {
    const URI = `http://api.openweathermap.org/data/2.5/weather?q=${
      this.city
    },${this.countryCode}&appid=${this.apiKey}&units=metric`;
    const response = await fetch(URI);
    const data = await response.json();
    return data;
  }

  changeLocation(city, countryCode) {
    this.city = city;
    this.countryCode = countryCode;
  }
}
