"use strict";(self.blocksyJsonP=self.blocksyJsonP||[]).push([[36],{9036:function(t,e,o){o.r(e),o.d(e,{mount:function(){return u}});var n=o(2194),c=o.n(n),r=o(1601),i=o.n(r),a=o(3846);let s=!1,d=!1;const u=function(t,e){let{event:o}=e;if(!c())return;const n=t.querySelector(".ct-cart-item");if(n&&!n.classList.contains("ct-offcanvas-trigger")&&(0,a.b)()&&"mouseover"!==(null==o?void 0:o.type))return void(location.href=n.getAttribute("href"));const r='.ct-header-cart, .ct-shortcuts-bar [data-id="cart"]';if(s)return;s=!0,c()(document.body).on("adding_to_cart",(function(){return[...document.querySelectorAll(r)].map((function(t){t.closest(".ct-shortcuts-bar")||(t=t.firstElementChild),t.classList.remove("ct-added"),t.classList.add("ct-adding")}))})),c()(document.body).on("wc_fragments_loaded",(function(){setTimeout((function(){return i().trigger("blocksy:frontend:init")}))})),c()(document.body).on("wc_cart_button_updated",(function(t,e){if(window.wc_add_to_cart_params&&window.wc_add_to_cart_params.i18n_view_cart_with_icon&&e&&e.length>0){const t=e[0];t.closest("[data-products]")&&(t.nextElementSibling.innerHTML=wc_add_to_cart_params.i18n_view_cart_with_icon)}}));const u=function(){[...document.querySelectorAll(r)].map((function(t,e){e>0||document.querySelector("#ct-compare-modal.active")||document.querySelector(".quick-view-modal.active")||document.querySelector("#woo-cart-panel.active")||!(!document.body.classList.contains("single-product")&&t.querySelector('[data-auto-open*="archive"]')||document.body.classList.contains("single-product")&&t.querySelector('[data-auto-open*="product"]'))||(t.querySelector("[data-auto-open]").focusDisabled=!0,t.querySelector("[data-auto-open]").click())}))};c()(document.body).on("added_to_cart",(function(t,e,o,n,c){n=n[0],[...document.querySelectorAll(r)].map((function(t,e){let o=t;t.closest(".ct-shortcuts-bar")||(o=t.firstElementChild),o.classList.remove("ct-adding"),o.classList.add("ct-added")})),Object.keys(e).length>0?u():d=!0})),c()(document.body).on("wc_fragments_refreshed",(function(){d&&u(),d=!1,setTimeout((function(){i().trigger("blocksy:frontend:init"),l()}))})),c()(document).on("uael_quick_view_loader_stop",(function(){i().trigger("ct:add-to-cart:quantity")})),c()(document).on("facetwp-loaded",(function(){i().trigger("ct:custom-select:init")}));const l=function(){let t=document.querySelector(".ct-header-cart .ct-cart-content");t&&t.removeAttribute("style")};c()(document.body).on("wc_fragments_loaded",(function(){setTimeout((function(){i().trigger("blocksy:frontend:init"),l()}))})),c()(document.body).on("click",".remove_from_cart_button",{},(function(t){const e=t.target.closest(".woocommerce-mini-cart-item");e&&e.classList.add("processing")})),c()(document.body).on("removed_from_cart",(function(t,e,o,n){[...document.querySelectorAll(r)].map((function(t){if(n)try{n[0].closest(".updating")&&n[0].closest(".updating").classList.remove("updating"),n[0].closest("li").remove()}catch(t){}}))})),c()(document.body).on("click",".remove_from_cart_button",(function(t){t.target.closest("[data-placement]")&&(window.blocksySkippedFragments=[t.target.closest("[data-placement]")])}));const m=jQuery.fn.replaceWith;jQuery.fn.replaceWith=function(){var t=this;if(window.blocksySkippedFragments&&window.blocksySkippedFragments.includes(this[0])){const e=document.createElement("div");return e.innerHTML=arguments[0],this[0].innerHTML=e.firstElementChild.innerHTML,[...e.firstElementChild.attributes].map((function(e){let{name:o,value:n}=e;t[0].setAttribute(o,n)})),this}return m.apply(this,arguments)}}}}]);