import currweather from "./currentweather.js";
import dailyforecast from "./dailyforecast.js";
import hourlyforecast from "./hourlyforecast.js";

async function getWeather(value) {
  const url = `http://api.weatherapi.com/v1/forecast.json?key=${process.env.WEATHER_API_KEY}&q=${value}&days=3`;
  try {
    const weather = await fetch(url, { mode: "cors" });
    const weatherData = await weather.json();
    console.log(weatherData);
    currweather(
      weatherData.location.name,
      weatherData.current.condition.text,
      weatherData.current.temp_c,
      weatherData.current.wind_dir,
      weatherData.current.wind_kph,
      weatherData.location.localtime
    );
    dailyforecast(weatherData.forecast.forecastday);
    hourlyforecast(weatherData.forecast.forecastday[0].hour);
  } catch (error) {
    console.log(error);
  }
}
export default getWeather;
