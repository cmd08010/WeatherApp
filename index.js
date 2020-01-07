console.log("Javascript Starting")

const submitButton = document.querySelector("#get-that-weather")
const weatherDisplay = document.querySelector(".weather")
const app = document.querySelector(".banner")
const ApiKey = "f13b434582160eb894cf5bec696ade75"

let input

function fetchData(input) {
  if (typeof input === "number") {
    const zipCodeData = axios.get(
      `api.openweathermap.org/data/2.5/weather?zip=${input}&APPID=${ApiKey}`
    )
    return zipCodeData.catch(err => err)
  }

  if (typeof input === "string") {
    const cityNameData = axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${input}&APPID=${ApiKey}`
    )
    return cityNameData.catch(err => err)
  }
}

function getWeather(input) {
  console.log("get weather func", input)
  return fetchData(input).then(function(response) {
    // console.log("getweather ", response)
    return response
  })
}

function renderHTML(weather) {
  console.log("render HTML")

  const descData = weather.weather[0]
  const tempData = weather.main
  console.log(descData)
  weatherDisplay.innerHTML = `<i class="owf owf-${descData.id} owf-5x"></i>
  <div class="Sky">
      <h5>Sky</h5>
      <p>${descData.description}</p>
  </div>
  <div class="sub-info">
      <h5>Temperature</h5>
      <p>${tempData.temp}°F</p>
      <h7>High</h7>
      <p>${tempData.temp_max}°F</p>
      <h7>Low</h7>
      <p>${tempData.temp_min}°F</p>
      <h6><b>Feels Like</b></h6>
      <p>${tempData.feels_like}°F</p>
  </div>`

  if (descData.main === "Clouds") {
    app.style.backgroundRepeat = "no-repeat"
    app.style.backgroundImage =
      "url('https://s3.envato.com/files/135987809/Image%20Preview.jpg')"
  }
}

function showWeather() {
  input = document.querySelector("#zip-city-latlong").value
  getWeather(input)
    .then(response => response)
    .then(data => data.data)
    .then(weather => renderHTML(weather))
}

submitButton.addEventListener("click", showWeather)
