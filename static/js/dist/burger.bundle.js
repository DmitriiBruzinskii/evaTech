(()=>{const e=document.querySelector(".social-btn"),t=document.querySelector(".social__list"),s=document.querySelector("#arow"),a=document.querySelector(".header__menu-mobile");e.addEventListener("click",(()=>{t.classList.contains("fadeIn")?(t.classList.remove("fadeIn"),t.classList.add("fadeOut"),s.classList.remove("rotate")):(t.classList.remove("fadeOut"),t.classList.add("fadeIn"),s.classList.add("rotate"))})),document.addEventListener("click",(e=>{e.target.matches(".burger-btn")?(a.classList.add("header__menu-mobile--active"),document.body.style.overflow="hidden"):e.target.matches(".close-btn")&&(a.classList.remove("header__menu-mobile--active"),document.body.style.overflow="")}))})();
//# sourceMappingURL=burger.bundle.js.map