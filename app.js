const userInput = document.querySelector("#user-input");
const submitBtn = document.querySelector(".submit-btn");
const city = document.querySelector(".city");
const country = document.querySelector(".country");
const main = document.querySelector(".main");
const temp = document.querySelector(".temp");
const gif = document.querySelector(".gif");

submitBtn.addEventListener("click", async function () {
  showWeather();
});

function showWeather() {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${userInput.value}&APPID=e97c3890ada5296b4d96db996f0996f1`,
    { mode: "cors" }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      city.innerText = response.name;
      country.innerText = response.sys.country;
      main.innerText = response.weather[0].main;
      temp.innerText = Math.floor(response.main.temp - 273.15) + " °C";

      console.log(response);
    });
  // .catch(alert("error"));
}

//   city = response.name
//  country = response.sys.country
// main = response.weather.main
// temp = response.main.temp-273,15 (this temperature is in kelvin) K -273,15 = C
