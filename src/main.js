// 1. Створи застосунок для пошуку погоди в своєму місті
// Використовуй API https://openweathermap.org/api
// (Current Weather Data -> Built-in API request by city name)
// створи файл api.js що робитиме запит на бек
// створи файл create-markup.js для створення розмітки (https://prnt.sc/LEataI862RLd)
// додай пошук погоди в конкретному місті використовуючи форму

import { getWeather } from "./js/api";
import { createMarkup } from "./js/createMarkup";

const weatherDetails = document.querySelector('#weatherDetails');



getWeather()
    .then((data) => weatherDetails.insertAdjacentHTML('beforeend', createMarkup(data)))







