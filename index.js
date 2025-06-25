import{a as p,i as l,S as d}from"./assets/vendor-Dy2ZTtfi.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function m(r){return p.get("https://pixabay.com/api/",{params:{key:"51039483-d1ef6922b01cd3fd853d7df89",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(g)}function g(r){const n=r.data.hits;if(n.length===0){l.warning({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"red"});return}return n}const o={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")},y=new d(".gallery a",{});function h(r){const n=r.map(({webformatURL:i,largeImageURL:a,tags:e,likes:t,views:s,comments:u,downloads:f})=>`<li class='gallery-item'>
         <a href='${a}'>
         <img src='${i}' alt='${e}' width='360'
         />
         </a>
      <ul class='info-list'>
      
      <li class='info-item'>
         <span>Likes</span>
         <span>${t}</span>
        </li>

        <li class='info-item'>
          <span>views</span>
         <span>${s}</span>
         </li>

         <li class='info-item'>
          <span>comments</span>
         <span>${u}</span>
         </li>

         <li class='info-item'>
          <span>downloads</span>
         <span>${f}</span>
         </li>
       </ul>
      </li>`).join("");o.gallery.insertAdjacentHTML("beforeend",n),y.refresh()}function c(){o.loader.style.display="none"}function L(){o.loader.style.display="block"}function b(){o.gallery.innerHTML=""}c();o.form.addEventListener("submit",w);function w(r){r.preventDefault();const n=r.currentTarget.elements.search.value.trim();if(n===""){l.warning({message:"The input is empty",position:"topRight"}),r.currentTarget.reset();return}L(),b(),m(n).then(h).catch(i=>l.warning({message:`${i}`,position:"topRight"})).finally(c),r.currentTarget.reset()}
//# sourceMappingURL=index.js.map
