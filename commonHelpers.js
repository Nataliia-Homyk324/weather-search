var m=(r,e,t)=>{if(!e.has(r))throw TypeError("Cannot "+t)};var o=(r,e,t)=>(m(r,e,"read from private field"),t?t.call(r):e.get(r)),c=(r,e,t)=>{if(e.has(r))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(r):e.set(r,t)},f=(r,e,t,a)=>(m(r,e,"write to private field"),a?a.call(r,t):e.set(r,t),t);import"./assets/styles-b1bdd309.js";import{a as P,i,P as $}from"./assets/vendor-438c2869.js";var g,p,u,h;class M{constructor(){c(this,g,"https://api.unsplash.com/search/photos");c(this,p,"gcevo00lZKvSMKLnZZJPKYS5xNbpbsP_4i6E-BVlG58");c(this,u,"");c(this,h,new URLSearchParams({per_page:12,orientation:"portrait",client_id:o(this,p)}))}async fetchPopularPhotos(e){const t=`${o(this,g)}?query=popular&page=${e}&${o(this,h)}`;try{const{data:a}=await P.get(t);return a}catch{i.error({title:"Error",message:"Something went wrong. Try again later"})}}async fetchFotosByQuery(e){const t=`${o(this,g)}?query=${o(this,u)}&page=${e}&${o(this,h)}`;try{const{data:a}=await P.get(t);return a}catch{i.error({title:"Error",message:"Something went wrong. Try again later"})}}set query(e){f(this,u,e)}}g=new WeakMap,p=new WeakMap,u=new WeakMap,h=new WeakMap;function y(r){return r.map(({urls:e,alt_description:t})=>`<li class='gallery__item'><img src='${e.small}' alt='${t}'></li>`).join("")}const n={gallery:document.querySelector(".js-gallery"),paginationContainer:document.querySelector(".tui-pagination"),searchForm:document.querySelector(".js-search-form")},S={totalItems:0,itemsPerPage:12,visiblePages:5,page:1},s=new $(n.paginationContainer,S),w=s.getCurrentPage(),l=new M;l.fetchPopularPhotos(w).then(({total:r,results:e})=>{const t=y(e);n.gallery.innerHTML=t,s.reset(r)});s.on("afterMove",q);function q(r){const e=r.page;l.fetchPopularPhotos(e).then(({results:t})=>{const a=y(t);n.gallery.innerHTML=a})}n.searchForm.addEventListener("submit",C);function C(r){r.preventDefault();const e=r.target.elements.query.value.trim();if(!e){i.warning({title:"Caution",message:"Please enter query word"});return}s.off("afterMove",q),s.off("afterMove",d),l.query=e,l.fetchFotosByQuery(w).then(({total:t,results:a})=>{if(a.length===0){i.warning({title:"Caution",message:"Please try another word"});return}t<=12?n.paginationContainer.style.display="none":n.paginationContainer.style.display="block";const v=y(a);n.gallery.innerHTML=v,i.success({title:"OK",message:`We found ${t} images`}),s.reset(t)}).catch(t=>{i.error({title:"Error",message:"Illegal operation"})}),s.on("afterMove",d),searchForm.reset()}function d(r){const e=r.page;l.fetchFotosByQuery(e).then(({results:t})=>{const a=y(t);n.gallery.innerHTML=a})}
//# sourceMappingURL=commonHelpers.js.map
