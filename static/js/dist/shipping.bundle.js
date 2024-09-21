/*! For license information please see shipping.bundle.js.LICENSE.txt */
(()=>{var t={881:()=>{const t=document.querySelector(".social-btn"),e=document.querySelector(".social__list"),o=document.querySelector("#arow"),s=document.querySelector(".header__menu-mobile");t.addEventListener("click",(()=>{e.classList.contains("fadeIn")?(e.classList.remove("fadeIn"),e.classList.add("fadeOut"),o.classList.remove("rotate")):(e.classList.remove("fadeOut"),e.classList.add("fadeIn"),o.classList.add("rotate"))})),document.addEventListener("click",(t=>{t.target.matches(".burger-btn")?(s.classList.add("header__menu-mobile--active"),document.body.style.overflow="hidden"):t.target.matches(".close-btn")&&(s.classList.remove("header__menu-mobile--active"),document.body.style.overflow="")}))},157:function(t){var e;e=function(t){var e=function(t){return new e.lib.init(t)};function o(t,e){return e.offset[t]?isNaN(e.offset[t])?e.offset[t]:e.offset[t]+"px":"0px"}function s(t,e){return!(!t||"string"!=typeof e||!(t.className&&t.className.trim().split(/\s+/gi).indexOf(e)>-1))}return e.defaults={oldestFirst:!0,text:"Toastify is awesome!",node:void 0,duration:3e3,selector:void 0,callback:function(){},destination:void 0,newWindow:!1,close:!1,gravity:"toastify-top",positionLeft:!1,position:"",backgroundColor:"",avatar:"",className:"",stopOnFocus:!0,onClick:function(){},offset:{x:0,y:0},escapeMarkup:!0,ariaLive:"polite",style:{background:""}},e.lib=e.prototype={toastify:"1.12.0",constructor:e,init:function(t){return t||(t={}),this.options={},this.toastElement=null,this.options.text=t.text||e.defaults.text,this.options.node=t.node||e.defaults.node,this.options.duration=0===t.duration?0:t.duration||e.defaults.duration,this.options.selector=t.selector||e.defaults.selector,this.options.callback=t.callback||e.defaults.callback,this.options.destination=t.destination||e.defaults.destination,this.options.newWindow=t.newWindow||e.defaults.newWindow,this.options.close=t.close||e.defaults.close,this.options.gravity="bottom"===t.gravity?"toastify-bottom":e.defaults.gravity,this.options.positionLeft=t.positionLeft||e.defaults.positionLeft,this.options.position=t.position||e.defaults.position,this.options.backgroundColor=t.backgroundColor||e.defaults.backgroundColor,this.options.avatar=t.avatar||e.defaults.avatar,this.options.className=t.className||e.defaults.className,this.options.stopOnFocus=void 0===t.stopOnFocus?e.defaults.stopOnFocus:t.stopOnFocus,this.options.onClick=t.onClick||e.defaults.onClick,this.options.offset=t.offset||e.defaults.offset,this.options.escapeMarkup=void 0!==t.escapeMarkup?t.escapeMarkup:e.defaults.escapeMarkup,this.options.ariaLive=t.ariaLive||e.defaults.ariaLive,this.options.style=t.style||e.defaults.style,t.backgroundColor&&(this.options.style.background=t.backgroundColor),this},buildToast:function(){if(!this.options)throw"Toastify is not initialized";var t=document.createElement("div");for(var e in t.className="toastify on "+this.options.className,this.options.position?t.className+=" toastify-"+this.options.position:!0===this.options.positionLeft?(t.className+=" toastify-left",console.warn("Property `positionLeft` will be depreciated in further versions. Please use `position` instead.")):t.className+=" toastify-right",t.className+=" "+this.options.gravity,this.options.backgroundColor&&console.warn('DEPRECATION NOTICE: "backgroundColor" is being deprecated. Please use the "style.background" property.'),this.options.style)t.style[e]=this.options.style[e];if(this.options.ariaLive&&t.setAttribute("aria-live",this.options.ariaLive),this.options.node&&this.options.node.nodeType===Node.ELEMENT_NODE)t.appendChild(this.options.node);else if(this.options.escapeMarkup?t.innerText=this.options.text:t.innerHTML=this.options.text,""!==this.options.avatar){var s=document.createElement("img");s.src=this.options.avatar,s.className="toastify-avatar","left"==this.options.position||!0===this.options.positionLeft?t.appendChild(s):t.insertAdjacentElement("afterbegin",s)}if(!0===this.options.close){var n=document.createElement("button");n.type="button",n.setAttribute("aria-label","Close"),n.className="toast-close",n.innerHTML="&#10006;",n.addEventListener("click",function(t){t.stopPropagation(),this.removeElement(this.toastElement),window.clearTimeout(this.toastElement.timeOutValue)}.bind(this));var i=window.innerWidth>0?window.innerWidth:screen.width;("left"==this.options.position||!0===this.options.positionLeft)&&i>360?t.insertAdjacentElement("afterbegin",n):t.appendChild(n)}if(this.options.stopOnFocus&&this.options.duration>0){var a=this;t.addEventListener("mouseover",(function(e){window.clearTimeout(t.timeOutValue)})),t.addEventListener("mouseleave",(function(){t.timeOutValue=window.setTimeout((function(){a.removeElement(t)}),a.options.duration)}))}if(void 0!==this.options.destination&&t.addEventListener("click",function(t){t.stopPropagation(),!0===this.options.newWindow?window.open(this.options.destination,"_blank"):window.location=this.options.destination}.bind(this)),"function"==typeof this.options.onClick&&void 0===this.options.destination&&t.addEventListener("click",function(t){t.stopPropagation(),this.options.onClick()}.bind(this)),"object"==typeof this.options.offset){var r=o("x",this.options),c=o("y",this.options),l="left"==this.options.position?r:"-"+r,d="toastify-top"==this.options.gravity?c:"-"+c;t.style.transform="translate("+l+","+d+")"}return t},showToast:function(){var t;if(this.toastElement=this.buildToast(),!(t="string"==typeof this.options.selector?document.getElementById(this.options.selector):this.options.selector instanceof HTMLElement||"undefined"!=typeof ShadowRoot&&this.options.selector instanceof ShadowRoot?this.options.selector:document.body))throw"Root element is not defined";var o=e.defaults.oldestFirst?t.firstChild:t.lastChild;return t.insertBefore(this.toastElement,o),e.reposition(),this.options.duration>0&&(this.toastElement.timeOutValue=window.setTimeout(function(){this.removeElement(this.toastElement)}.bind(this),this.options.duration)),this},hideToast:function(){this.toastElement.timeOutValue&&clearTimeout(this.toastElement.timeOutValue),this.removeElement(this.toastElement)},removeElement:function(t){t.className=t.className.replace(" on",""),window.setTimeout(function(){this.options.node&&this.options.node.parentNode&&this.options.node.parentNode.removeChild(this.options.node),t.parentNode&&t.parentNode.removeChild(t),this.options.callback.call(t),e.reposition()}.bind(this),400)}},e.reposition=function(){for(var t,e={top:15,bottom:15},o={top:15,bottom:15},n={top:15,bottom:15},i=document.getElementsByClassName("toastify"),a=0;a<i.length;a++){t=!0===s(i[a],"toastify-top")?"toastify-top":"toastify-bottom";var r=i[a].offsetHeight;t=t.substr(9,t.length-1),(window.innerWidth>0?window.innerWidth:screen.width)<=360?(i[a].style[t]=n[t]+"px",n[t]+=r+15):!0===s(i[a],"toastify-left")?(i[a].style[t]=e[t]+"px",e[t]+=r+15):(i[a].style[t]=o[t]+"px",o[t]+=r+15)}return this},e.lib.init.prototype=e.lib,e},t.exports?t.exports=e():this.Toastify=e()}},e={};function o(s){var n=e[s];if(void 0!==n)return n.exports;var i=e[s]={exports:{}};return t[s].call(i.exports,i,i.exports,o),i.exports}o.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},o.d=(t,e)=>{for(var s in e)o.o(e,s)&&!o.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";var t=o(157),e=o.n(t);o(881);const s=JSON.parse(localStorage.getItem("counstructorUserData"));document.addEventListener("DOMContentLoaded",(function(){const t=()=>{let t=parseInt(localStorage.getItem("orderNumber"))||100;return localStorage.setItem("orderNumber",++t),t},o=document.getElementById("province"),n=document.getElementById("shipping"),i=document.querySelector("#subtotal"),a=document.querySelector("#total"),r=document.querySelector("#orderType"),c=document.querySelector("#orderCar"),l=document.querySelector("#orderCarYear"),d=document.querySelector(".order__product-sum"),u=document.querySelector(".order__product-img"),p=document.querySelector(".modalBuy__form-textarea"),m=()=>{const t=parseFloat(o.value)||0,e=parseFloat(i.innerHTML)||0,s=(h||e)+t;n.innerHTML=t,i.innerHTML=h||e,a.innerHTML=s};let h=0;(()=>{const t={standart:{price:s.price,imgUrl:"static/images/price-constructor/sets/set-2.jpg"},economy:{price:s.price,imgUrl:"static/images/price-constructor/sets/set-1.jpg"},premium:{price:s.price,imgUrl:"static/images/price-constructor/sets/set-3.jpg"}}[s.setType];t&&(u.src=t.imgUrl,d.innerHTML=t.price,i.innerHTML=t.price),r.innerHTML=s.setType,l.innerHTML=s.carYear,c.innerHTML=s.carMake})(),m(),NiceSelect.bind(o),o.addEventListener("change",m),document.getElementById("phone").addEventListener("input",(function(){this.value=this.value.replace(/[^\d+]/g,"")})),document.getElementById("first-name").addEventListener("input",(function(){this.value=this.value.replace(/[^a-zA-Z]/g,"")})),document.getElementById("last-name").addEventListener("input",(function(){this.value=this.value.replace(/[^a-zA-Z]/g,"")}));const f=document.querySelector(".promo__btn");let y=!1,v="",b="0%";f.addEventListener("click",(async()=>{const t=document.querySelector("#promo"),e=t.value,o=i.innerHTML;document.querySelector(".promoInvalid").classList.add("hidden");try{const s=await fetch("promo.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({promoCode:e,totalAmount:o})}),n=await s.json();n.success?(h=parseFloat(n.newTotal),m(),v=t.value,t.value="",f.disabled=!0,y=!0,b=n.discount,f.classList.add("promoValid"),f.innerHTML="Promocode valid!"):document.querySelector(".promoInvalid").classList.remove("hidden")}catch(t){console.error("Error:",t)}}));const g=document.querySelector(".modalBuy__form"),w={text:"Your message was sent successfully!",duration:-1,close:!0,gravity:"bottom",position:"center",stopOnFocus:!0,offset:{y:100},className:"order-toast"},L=()=>{const t=new Date;return new Intl.DateTimeFormat("en-GB",{dateStyle:"short",timeStyle:"short",timeZone:"America/Toronto"}).format(t)};g.addEventListener("submit",(async i=>{i.preventDefault();const r=new FormData(g),c=Object.fromEntries(r.entries()),l=`${document.querySelector("#first-name").value} ${document.querySelector("#last-name").value}`,u=o.options[o.selectedIndex].text,m=a.innerHTML,h=n.innerHTML,f=d.innerHTML,E=v,T=p.value,S=b;await(async(t,o)=>{const s=(t=>{const e=t.querySelector('[type="submit"]'),o=e.textContent;return e.textContent="Sending...",t.classList.add("form--pending-order"),o})(t);try{const n=await fetch("action.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)});if(((t,e="Send")=>{t.querySelector('[type="submit"]').textContent=e,t.classList.remove("form--pending-order")})(t,s),!n.ok)throw new Error("Something went wrong");{const t=document.createElement("div");t.innerHTML=`\n            Hi ${o.userName},<br>\n            Thanks for your order. It’s on-hold until we confirm that payment has been received.<br>\n            Please send your payment total amount to <span class="bold">info@eva-tech.ca</span> by E-transfer.<br>No need to write anything in the message.<br><span class="bold">Secret Question:</span> My order number ${o.orderNumber}<br>\n            <span class="bold">Secret Answer:</span> Evatech<br>\n            <br>\n            Product:<br>\n            Car make - ${o.carMake}<br>\n            Car model - ${o.carModel}<br>\n            Car year - ${o.carYear}<br>\n            Mat color - ${o.rugBackgroundColor}<br>\n            Trim color - ${o.rugOutlineColor}<br>\n            Set name - ${o.setType} (+ Footrest for a driver mat as a gift!)<br>\n            <span class="bold">Subtotal price - ${o.totalPrice} $</span>;\n        `,e()({...w,node:t}).showToast()}}catch(t){console.error(t),e()({...w,text:"Something went wrong!"}).showToast()}})(g,{...s,...c,userName:l,totalPrice:m,province:u,promoCodeValue:E,textareaValue:T,discountValue:S,subtotalPrice:f,shippingPrice:h,promoCode:y?"yes":"no",orderNumber:t(),date:L()})}))}))})()})();
//# sourceMappingURL=shipping.bundle.js.map