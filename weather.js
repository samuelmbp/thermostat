import got from 'got';
import 'dotenv/config';
const API_KEY = process.env.WEATHER_API_KEY;

class WeatherApi {
  fetchWeatherApi(city, callbackWeatherData) {
    got(
      `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${API_KEY}`
    ).then((response) => {
      const weatherData = JSON.parse(response.body);
      callbackWeatherData(weatherData);
    });
  }
}

const weather = new WeatherApi();
weather.fetchWeatherApi('Brindisi', (callbackWeatherData) => {
  console.log(callbackWeatherData.main);
});
