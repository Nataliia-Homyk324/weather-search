// 1. Створи застосунок для пошуку погоди в своєму місті
// Використовуй API https://openweathermap.org/api
// (Current Weather Data -> Built-in API request by city name)
// створи файл api.js що робитиме запит на бек
// створи файл create-markup.js для створення розмітки (https://prnt.sc/LEataI862RLd)
// додай пошук погоди в конкретному місті використовуючи форму

import { getWeather } from './js/api';
import { createMarkup } from './js/createMarkup';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const weatherDetails = document.querySelector('#weatherDetails');
const searchForm = document.querySelector('#searchForm');

searchForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();

  const query = e.target.name.value.trim();
  if (!query) {
    return iziToast.warning({ message: 'Enter city' });
  }
  getWeather(query).then(data => {
    if (!data) {
      return iziToast.error({ message: 'Enter correct city' });
    }
    weatherDetails.insertAdjacentHTML('beforeend', createMarkup(data));
  });
}
