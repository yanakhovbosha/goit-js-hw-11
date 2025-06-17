import{a as f,S as h,i as l}from"./assets/vendor-vwbIfzmB.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function p(o){return f("https://pixabay.com/api/",{params:{key:"50825646-7ffda2e7b5c30b92a9f1b68eb",q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"}}).then(i=>i.data)}const n=document.querySelector(".gallery"),c=document.querySelector(".loader"),y=new h(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});function g(o){const i=o.map(({webformatURL:s,largeImageURL:r,tags:e,likes:t,views:a,comments:m,downloads:d})=>`
        <li class="gallery-list-item">
          <a href="${r}">
            <img src="${s}" alt="${e}"/>
          </a>
          <ul class="list-item">
            <li class="item">
              <h3 class="list-item-title">Likes</h3>
              <p class="list-item-text">${t}</p>
            </li>
            <li class="item">
              <h3 class="list-item-title">Views</h3>
              <p class="list-item-text">${a}</p>
            </li>
            <li class="item">
              <h3 class="list-item-title">Comments</h3>
              <p class="list-item-text">${m}</p>
            </li>
            <li class="item">
              <h3 class="list-item-title">Downloads</h3>
              <p class="list-item-text">${d}</p>
            </li>
          </ul>
        </li>
        `).join("");n.insertAdjacentHTML("beforeend",i),y.refresh()}function b(){n.innerHTML=""}function L(){c.classList.remove("hidden")}function S(){c.classList.add("hidden")}const q=document.querySelector(".form"),u=document.querySelector('input[name="search-text"]'),x=document.querySelector('button[type="submit"]');u.classList.add("input-form");x.classList.add("btn-form");q.addEventListener("submit",w);function w(o){o.preventDefault();const i=u.value.toLowerCase().trim();if(i===""){l.show({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"pink",position:"topRight"});return}b(),L(),p(i).then(s=>{if(console.log(s),s.hits.length===0||i===""){l.show({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"pink",position:"topRight"});return}g(s.hits)}).catch(s=>{console.log(s)}).finally(()=>{S()}),o.target.reset()}
//# sourceMappingURL=index.js.map
