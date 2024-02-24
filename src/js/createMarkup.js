import {formatTemperature} from "./helpers"

export function createMarkup({name, main: {feels_like, temp, humidity, pressure}, sys: {country}, weather}){
    return `<div class="weather-card"><div><h2>${name}, ${
        country
      }</h2><img src="http://openweathermap.org/img/w/${
        weather[0].icon
      }.png" width="80px"><p>${
        weather[0].description
      }</p></div><div><p>Temperature: ${formatTemperature(
        temp
      )}&#8451;</p><p>Feels like: ${formatTemperature(
        feels_like
      )}&#8451;</p><p>Humidity: ${humidity}%</p><p>Pressure: ${pressure}</p></div>
      </div>
      `;
}

