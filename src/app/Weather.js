export class Weather {
  constructor(city, countryCode) {
    this.apiKey = "328d874cf805b68f6271e8f6454a53b3";
    this.city = city;
    this.countryCode = countryCode;
  }

  async getWeather() {
    const URI = `http://api.openweathermap.org/data/2.5/weather?q=${
      this.city
    },${this.countryCode}&appid=${this.apiKey}`;
    const data = await fetch(URI);
    return data;
  }
}
