const API_KEY = "1e11d73aaacb86a003692c09f5eab5bb";
function onGeoOK(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  console.log(lat, lng);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const weatherContainer = document.querySelector(
        "#weather span:first-child"
      );
      const cityContainer = document.querySelector("#weather span:last-child");
      const name = data.name;
      const weather = data.weather[0].main;
      weatherContainer.innerText = `${weather} / ${data.main.temp}`;
      cityContainer.innerText = data.name;
    });
}
function onGeoError(err) {
  alert("Can`t find you. No weather for you..");
  console.log(err);
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
