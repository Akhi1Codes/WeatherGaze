export default function day_time(value) {
  const separate = value.split(" ");
  const [dateArray, whole_time] = separate;

  //   ---------------Date---------------
  const date = dateArray.split("-").reverse().join("-");

  //   ---------------Time---------------
  const timesplit = whole_time.split(":");
  const [hr, min] = timesplit;
  let h = hr % 12;
  if (h === 0) h = 12;
  const time = (h < 10 ? "0" : "") + h + ":" + min + (hr < 12 ? "AM" : "PM");
  return [date, time];
}
