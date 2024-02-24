import{i as a}from"./assets/vendor-ad859c2f.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();function d(t){const n=`https://api.openweathermap.org/data/2.5/weather?q=${t}&appid=117bcd5592950f9f701a11f5ab982de0&units=metric`;return fetch(n).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()}).catch(o=>console.log(o))}function u(t){return parseInt(t)}function m({name:t,main:{feels_like:n,temp:o,humidity:i,pressure:e},sys:{country:r},weather:c}){return`<div class="weather-card"><div><h2>${t}, ${r}</h2><img src="http://openweathermap.org/img/w/${c[0].icon}.png" width="80px"><p>${c[0].description}</p></div><div><p>Temperature: ${u(o)}&#8451;</p><p>Feels like: ${u(n)}&#8451;</p><p>Humidity: ${i}%</p><p>Pressure: ${e}</p></div>
      <button class="save-button" type="button">Save</button>
      </div>
      `}const f=document.querySelector(".switcher-toggle");f.addEventListener("change",h);function h(t){t.target.checked?(document.body.classList.replace("light","dark"),localStorage.setItem("theme","dark")):(document.body.classList.replace("dark","light"),localStorage.setItem("theme","light"))}const g=localStorage.getItem("theme");g==="dark"&&(f.checked=!0,document.body.classList.replace("light","dark"));const p=document.querySelector(".date span");p.textContent=new Date().toLocaleString();setInterval(()=>p.textContent=new Date().toLocaleString(),1e3);const s=document.querySelector("#weatherDetails"),y=document.querySelector("#searchForm"),l=localStorage.getItem("city");y.addEventListener("submit",v);function v(t){t.preventDefault(),s.innerHTML="";const n=t.target.name.value.trim();if(!n)return a.warning({message:"Enter city"});d(n).then(o=>{if(!o)return a.error({message:"Enter correct city"});s.insertAdjacentHTML("beforeend",m(o)),document.querySelector(".save-button").addEventListener("click",e);function e(){localStorage.setItem("city",n)}})}l&&d(l).then(t=>s.insertAdjacentHTML("beforeend",m(t)));
//# sourceMappingURL=commonHelpers.js.map
