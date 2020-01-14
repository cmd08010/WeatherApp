console.log("Javascript Starting")

const submitButton = document.querySelector("#get-that-weather")
const weatherDisplay = document.querySelector(".weather")
const app = document.querySelector(".banner")
const ApiKey = "f13b434582160eb894cf5bec696ade75"

const weatherData = {}

function getWeatherData(e) {
  console.log(e.target.value)
  //using zipcode

  //using lat and long

  //using cityname
}

function displayWeatherData() {
  return null
}

submitButton.addEventListener("click", displayWeatherData)
