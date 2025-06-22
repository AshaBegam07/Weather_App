const api = {
  key: "fcc8de7015bbb202209bbf0261babf4c",
  base: "https://api.openweathermap.org/data/2.5/"
}

const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    getWeather(searchbox.value);
  }
});

function getWeather(query) {
  fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(res => res.json())
    .then(showWeather)
    .catch(() => alert("City not found"));
}

function showWeather(weather) {
  document.querySelector('.city').innerText = `${weather.name}, ${weather.sys.country}`;
  document.querySelector('.date').innerText = buildDate(new Date());
  document.querySelector('.temp').innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;
  document.querySelector('.weather').innerText = weather.weather[0].main;
  document.querySelector('.hi-low').innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`;
}

function buildDate(d) {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", 
                  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return `${days[d.getDay()]} ${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
}
