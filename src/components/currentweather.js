import day_time from "./dayandtime.js";

function currweather(
  curr_place,
  curr_condition,
  curr_temperature,
  curr_airdirection,
  curr_airspeed,
  curr_dateandtime
) {
  const place = document.getElementById("place");
  place.textContent = curr_place;

  const condition = document.getElementById("condition");
  condition.textContent = curr_condition;

  const temperature = document.getElementById("temperature");
  temperature.textContent = curr_temperature + "°C";

  const wind = document.getElementById("wind");
  wind.textContent = curr_airdirection + " " + curr_airspeed + "kph";

  const [date, time] = day_time(curr_dateandtime);
  const date_value = document.getElementById("date");
  date_value.textContent = date;

  const time_value = document.getElementById("time");
  time_value.textContent = time;
}
export default currweather;

// North (N)
// North Northeast (NNE)
// Northeast (NE)
// East Northeast (ENE)
// East (E)
// East Southeast (ESE)
// Southeast (SE)
// South Southeast (SSE)
// South (S)
// South Southwest (SSW)
// Southwest (SW)
// West Southwest (WSW)
// West Northwest -(WNW)
// Northwest (NW)
// North Northwest (NNW)
// North (N)
