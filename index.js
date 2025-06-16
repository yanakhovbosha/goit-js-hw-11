import{a as d,S as f,i as l}from"./assets/vendor-vwbIfzmB.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function h(s){return d("https://pixabay.com/api/",{params:{key:"50825646-7ffda2e7b5c30b92a9f1b68eb",q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"}})}const n=document.querySelector(".gallery"),c=document.querySelector(".loader");function p(s){return s.map(({webformatURL:i,largeImageURL:o,tags:r,likes:e,views:t,comments:a,downloads:m})=>`
        <li class="gallery-list-item">
          <a href="${o}">
            <img src="${i}" alt="${r}"/>
          </a>
          <ul class="list-item">
            <li class="item">
              <h3 class="list-item-title">Likes</h3>
              <p class="list-item-text">${e}</p>
            </li>
            <li class="item">
              <h3 class="list-item-title">Views</h3>
              <p class="list-item-text">${t}</p>
            </li>
            <li class="item">
              <h3 class="list-item-title">Comments</h3>
              <p class="list-item-text">${a}</p>
            </li>
            <li class="item">
              <h3 class="list-item-title">Downloads</h3>
              <p class="list-item-text">${m}</p>
            </li>
          </ul>
        </li>
        `).join("")}function y(s){n.insertAdjacentHTML("beforeend",p(s)),new f(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250}).refresh()}function g(){n.innerHTML=""}function b(){c.classList.remove("hidden")}function L(){c.classList.add("hidden")}const S=document.querySelector(".form"),u=document.querySelector('input[name="search-text"]'),x=document.querySelector('button[type="submit"]');u.classList.add("input-form");x.classList.add("btn-form");S.addEventListener("submit",q);function q(s){s.preventDefault();const i=u.value.toLowerCase().trim();if(i===""){l.show({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"pink",position:"topRight"});return}g(),b(),h(i).then(o=>{if(console.log(o),o.data.hits.length===0||i===""){l.show({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"pink",position:"topRight"});return}y(o.data.hits)}).catch(o=>{console.log(o)}).finally(()=>{L()}),s.target.reset()}
//# sourceMappingURL=index.js.map
