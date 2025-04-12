let cityName = document.querySelector(".weather_city");
let dateTime = document.querySelector(".weather_date_time");
let w_forecast = document.querySelector(".weather_forecast");
let w_icon = document.querySelector(".weather_icon");
let w_temperature = document.querySelector(".weather_temperature");
let w_minTem = document.querySelector(".weather_min");
let w_maxTem = document.querySelector(".weather_max");

let w_feelsLike = document.querySelector(".weather_feelsLike");
let w_humidity = document.querySelector(".weather_humidity");
let w_wind = document.querySelector(".weather_wind");
let w_pressure = document.querySelector(".weather_pressure");

let citySearch = document.querySelector(".weather_search");

const getCountryName = (code) => {
  return new Intl.DisplayNames([code], { type: "region" }).of(code);
};

const getDateTime = (dt) => {
  const curDate = new Date(dt * 1000);

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  const formatter = new Intl.DateTimeFormat("en-US", options);
  return formatter.format(curDate);
};

let city = "patna,bihar";

citySearch.addEventListener("submit", (e) => {
  e.preventDefault();
  let cityName = document.querySelector(".city_name");
  city = cityName.value;
  getWeatherData();
  cityName.value = "";
});

const getWeatherData = async () => {
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=a0b06669a793506ae54060f7df8a5fb6`;

  try {
    const res = await fetch(weatherUrl);
    const data = await res.json();

    // console.log(data);
    const { main, name, wind, sys, weather, dt } = data;

    cityName.innerHTML = `${name}, ${getCountryName(sys.country)}`;
    dateTime.innerHTML = getDateTime(dt);

    w_forecast.innerHTML = weather[0].main;
    w_icon.innerHTML = `<img src="http://openweathermap.org/img/wn/${weather[0].icon}@4x.png" />`;

    const temperatureCelsius = Math.round(main.temp - 273.15); // Convert Kelvin to Celsius
    w_temperature.setAttribute("class", `temp ${weather[0].main}`);
    w_temperature.innerHTML = temperatureCelsius + "&deg;C"; // Display temperature in Celsius
    w_feelsLike.innerHTML =
      "Feels like " + Math.round(main.feels_like - 273.15) + "&deg;C";
    w_humidity.innerHTML = "Humidity: " + main.humidity + "%";
    w_pressure.innerHTML = "Pressure: " + main.pressure + "hPa";
    w_wind.innerHTML = "Wind: " + Math.round(wind.speed) + " km/h";
    w_minTem.innerHTML = `Min: ${Math.round(main.temp_min - 273.15)} &deg;C`;
    w_maxTem.innerHTML = `Max: ${Math.round(main.temp_max - 273.15)} &deg;C`;
  } catch (error) {
    console.log(error);
  }
};

document.body.addEventListener("load", getWeatherData());
