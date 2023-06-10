import day_time from "./dayandtime";

export default function hourlyforecast(data) {
  const container = document.getElementById("hrforecast");

  while (container.lastChild) {
    container.removeChild(container.lastChild);
  }

  for (let key in data) {
    const innercontainer = document.createElement("div");
    innercontainer.classList.add("hrforecast_container");

    const time = document.createElement("div");
    time.classList.add("hr_time");
    let [day, hrtime] = day_time(data[key].time);
    time.innerText = hrtime;
    innercontainer.appendChild(time);

    const img = document.createElement("img");
    img.setAttribute("src", data[key].condition.icon);
    img.classList.add("hr_img");
    innercontainer.appendChild(img);

    const temp = document.createElement("div");
    temp.classList.add("hr_temp");
    temp.innerText = data[key].temp_c + "°C";
    innercontainer.appendChild(temp);

    container.appendChild(innercontainer);
  }
}
