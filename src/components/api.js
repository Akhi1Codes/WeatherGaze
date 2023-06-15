import currweather from "./currentweather.js";
import dailyforecast from "./dailyforecast.js";
import hourlyforecast from "./hourlyforecast.js";

async function getWeather(value) {
  const url = `https://api.weatherapi.com/v1/forecast.json?key=${process.env.WEATHER_API_KEY}&q=${value}&days=3`;
  try {
    const weather = await fetch(url, { mode: "cors" });
    const weatherData = await weather.json();
    errormsg("false");
    currweather(
      weatherData.location.name,
      weatherData.location.region,
      weatherData.location.country,
      weatherData.current.condition.text,
      weatherData.current.temp_c,
      weatherData.current.wind_dir,
      weatherData.current.wind_kph,
      weatherData.location.localtime
    );
    dailyforecast(weatherData.forecast.forecastday);
    hourlyforecast(
      weatherData.forecast.forecastday[0].hour,
      weatherData.location.localtime
    );
  } catch (error) {
    if (error.message === "weatherData.location is undefined") {
      errormsg("true");
    }
  }
}
function errormsg(value) {
  if (value === "true") {
    const error_text = document.getElementById("error");
    error_text.style.display = "block";
  } else {
    const error_text = document.getElementById("error");
    error_text.style.display = "none";
  }
}
export default getWeather;
