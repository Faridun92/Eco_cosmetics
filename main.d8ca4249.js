parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var e=document.querySelectorAll(".about-our-brand__description"),t=document.querySelector("#button-more-brand"),r=document.querySelector(".slider__content"),o=document.querySelector("#shop-view"),n=document.querySelectorAll(".about-the-creators__description"),i=document.querySelector("#button-more-creators"),s=document.querySelector(".form-field");function d(){if(window.innerWidth<1280)for(var t=1;t<e.length;t++)e[t].classList.add("about-our-brand__description--hidden");else for(var r=2;r<e.length;r++)e[r].classList.add("about-our-brand__description--hidden")}function a(){if(window.innerWidth<1280)for(var e=2;e<n.length;e++)n[e].classList.add("about-the-creators__description--hidden");else for(var t=3;t<n.length;t++)n[t].classList.add("about-the-creators__description--hidden")}window.addEventListener("hashchange",function(){"#side-navigation"===window.location.hash?document.body.classList.add("page__body--with-menu"):document.body.classList.remove("page__body--with-menu")}),s.addEventListener("submit",function(e){e.preventDefault();var t=s.querySelectorAll(".form-field__input,\n  .form-field__textarea");t.forEach(function(e){""===e.value?(e.classList.add("form-field__error"),e.classList.remove("form-field__success")):(e.classList.remove("form-field__error"),e.classList.add("form-field__success"))}),e.target.reset(),t.forEach(function(e){e.classList.remove("error"),e.classList.remove("success")})}),t.addEventListener("click",function(){if(window.innerWidth<1280)for(var t=1;t<e.length;t++)e[t].classList.toggle("about-our-brand__description--hidden");else for(var r=2;r<e.length;r++)e[r].classList.toggle("about-our-brand__description--hidden")}),i.addEventListener("click",function(){if(window.innerWidth<1280)for(var e=2;e<n.length;e++)n[e].classList.toggle("about-the-creators__description--hidden");else for(var t=3;t<n.length;t++)n[t].classList.toggle("about-the-creators__description--hidden")}),o.addEventListener("click",function(){"wrap"===r.style.flexWrap?(r.style.flexWrap="nowrap",o.innerHTML="All products"):(r.style.flexWrap="wrap",o.innerHTML="Hidden products")}),d(),a();
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.d8ca4249.js.map