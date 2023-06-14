import day_time from "./dayandtime.js";

function currweather(
  curr_place,
  curr_region,
  curr_country,
  curr_condition,
  curr_temperature,
  curr_airdirection,
  curr_airspeed,
  curr_dateandtime
) {
  const place = document.getElementById("place");
  place.textContent = "Name: " + curr_place;

  const region = document.getElementById("region");
  region.textContent = "Region: " + curr_region;

  const country = document.getElementById("country");
  country.textContent = "Country: " + curr_country;

  const condition = document.getElementById("condition");
  condition.textContent = curr_condition;

  const temperature = document.getElementById("temperature");
  temperature.textContent = curr_temperature + "°C";

  const wind = document.getElementById("wind");
  wind.textContent = expand(curr_airdirection) + ", " + curr_airspeed + "kph";

  const [date, time] = day_time(curr_dateandtime);
  const date_value = document.getElementById("date");
  date_value.textContent = date;

  const time_value = document.getElementById("time");
  time_value.textContent = time;
}
export default currweather;

function expand(condition) {
  switch (condition) {
    case "N":
      return "North";
    case "NNE":
      return "North-NorthEast";
    case "NE":
      return "NorthEast";
    case "ENE":
      return "East-NorthEast";
    case "E":
      return "East";
    case "ESE":
      return "East-SouthEast";
    case "SE":
      return "SouthEast";
    case "SSE":
      return "South SouthEast";
    case "S":
      return "South";
    case "SSW":
      return "South-SouthWest";
    case "SW":
      return "SouthWest";
      break;
    case "WSW":
      return "West-SouthWest";
    case "WNW":
      return "West-NorthWest";
    case "NW":
      return "NorthWest";
    case "NNW":
      return "North-NorthWest";
    case "W":
      return "West";
  }
}
