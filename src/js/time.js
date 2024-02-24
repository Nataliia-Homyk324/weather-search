// 3. Додай відображення дати і часу в реальному часі

const date = document.querySelector('.date span');
date.textContent = new Date().toLocaleString();
setInterval(() => date.textContent = new Date().toLocaleString(), 1000);

