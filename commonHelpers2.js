import"./assets/styles-c850a7ca.js";import{i}from"./assets/vendor-438c2869.js";function d(e){const r=`https://api.openweathermap.org/data/2.5/weather?q=${e}&appid=117bcd5592950f9f701a11f5ab982de0&units=metric`;return fetch(r).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).catch(t=>console.log(t))}function s(e){return parseInt(e)}function l({name:e,main:{feels_like:r,temp:t,humidity:o,pressure:n},sys:{country:p},weather:c}){return`<div class="weather-card"><div><h2>${e}, ${p}</h2><img src="http://openweathermap.org/img/w/${c[0].icon}.png" width="80px"><p>${c[0].description}</p></div><div><p>Temperature: ${s(t)}&#8451;</p><p>Feels like: ${s(r)}&#8451;</p><p>Humidity: ${o}%</p><p>Pressure: ${n}</p></div>
      <button class="save-button" type="button">Save</button>
      </div>
      `}const m=document.querySelector(".switcher-toggle");m.addEventListener("change",g);function g(e){e.target.checked?(document.body.classList.replace("light","dark"),localStorage.setItem("theme","dark")):(document.body.classList.replace("dark","light"),localStorage.setItem("theme","light"))}const f=localStorage.getItem("theme");f==="dark"&&(m.checked=!0,document.body.classList.replace("light","dark"));const h=document.querySelector(".date span");h.textContent=new Date().toLocaleString();setInterval(()=>h.textContent=new Date().toLocaleString(),1e3);const a=document.querySelector("#weatherDetails"),v=document.querySelector("#searchForm"),u=localStorage.getItem("city");v.addEventListener("submit",y);function y(e){e.preventDefault(),a.innerHTML="";const r=e.target.name.value.trim();if(!r)return i.warning({message:"Enter city"});d(r).then(t=>{if(!t)return i.error({message:"Enter correct city"});a.insertAdjacentHTML("beforeend",l(t)),document.querySelector(".save-button").addEventListener("click",n);function n(){localStorage.setItem("city",r)}})}u&&d(u).then(e=>a.insertAdjacentHTML("beforeend",l(e)));
//# sourceMappingURL=commonHelpers2.js.map
