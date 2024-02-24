// 1. Створи застосунок для пошуку погоди в своєму місті
// Використовуй API https://openweathermap.org/api
// (Current Weather Data -> Built-in API request by city name)
// створи файл api.js що робитиме запит на бек
// створи файл create-markup.js для створення розмітки (https://prnt.sc/LEataI862RLd)
// додай пошук погоди в конкретному місті використовуючи форму

// 2. Додай перемикач теми і реалізуй логіку переключення світлої-темної теми
// в окремому файлі theme-switcher.js
// якщо обрана темна тема, при оновленні сторінки вона має залишатись

// 4. Додай в картку з погодою кнопку Save для зберігання
// інформації про погоду в місті в localStorage, щоб при оновленні сторінки
// йшов запит за погодою в збереженому місті
// коли місто збережено, кнопка стає Delete і можна видалити місто, тоді запит
// не буде йти при оновленні сторінки

import { getWeather } from './js/api';
import { createMarkup } from './js/createMarkup';
import "./js/switcher";
import "./js/time";
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const weatherDetails = document.querySelector('#weatherDetails');
const searchForm = document.querySelector('#searchForm');
const savedCity = localStorage.getItem('city');

searchForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();

  weatherDetails.innerHTML = "";
  const query = e.target.name.value.trim();
  if (!query) {
    return iziToast.warning({ message: 'Enter city' });
  }
  getWeather(query).then(data => {
    if (!data) {
      return iziToast.error({ message: 'Enter correct city' });
    }
    weatherDetails.insertAdjacentHTML('beforeend', createMarkup(data));
    const saveButton = document.querySelector('.save-button');
    saveButton.addEventListener('click', saveCity);
    function saveCity() {
      localStorage.setItem('city', query);
    }
  });
}

if (savedCity) {
  getWeather(savedCity).then(data => weatherDetails.insertAdjacentHTML('beforeend', createMarkup(data)));
}