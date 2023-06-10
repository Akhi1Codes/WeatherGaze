export default function dailyforecast(value) {
  const container = document.getElementById("dy_container");

  while (container.lastChild) {
    container.removeChild(container.lastChild);
  }

  for (let key in value) {
    const outercontainer = document.createElement("div");
    outercontainer.classList.add("dyforecast_container");

    // image

    const img = document.createElement("img");
    img.setAttribute("src", value[key].day.condition.icon);
    img.classList.add("dy_img");
    outercontainer.appendChild(img);

    // conatiner with date and condition
    const innercontainer = document.createElement("div");
    innercontainer.classList.add("dyforecast_innercontainer");

    const date = document.createElement("div");
    date.classList.add("dy_date");
    date.innerText = value[key].date;
    innercontainer.appendChild(date);

    const condition = document.createElement("div");
    condition.classList.add("dy_condition");
    condition.innerText = value[key].day.condition.text;
    innercontainer.appendChild(condition);

    outercontainer.appendChild(innercontainer);

    // container with mintemp and maxtemp
    const innercontainer1 = document.createElement("div");
    innercontainer1.classList.add("dyforecast_innercontainer1");

    const mintemp = document.createElement("div");
    mintemp.classList.add("dy_mintemp");
    mintemp.innerText = value[key].day.mintemp_c + "°C";
    mintemp.setAttribute("title", "minimum temperature");
    innercontainer1.appendChild(mintemp);

    const maxtemp = document.createElement("div");
    maxtemp.classList.add("dy_maxtemp");
    maxtemp.innerText = value[key].day.maxtemp_c + "°C";
    maxtemp.setAttribute("title", "maximum temperature");
    innercontainer1.appendChild(maxtemp);

    outercontainer.appendChild(innercontainer1);

    container.appendChild(outercontainer);
  }
}
