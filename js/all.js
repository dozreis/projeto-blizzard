"use strict";var slide_thumbnail=new Swiper(".slide-thumbnail",{slidesPerView:5,direction:"vertical",spaceBetween:20,watchSlidesProgress:!0,breakpoints:{320:{direction:"horizontal"},1150:{direction:"vertical"}}}),progressSlide=document.querySelector(".js-progress"),slide_hero=new Swiper(".slide-principal",{effect:"fade",thumbs:{swiper:slide_thumbnail},autoplay:{delay:5e3,disableOnInteraction:!1},on:{init:function(){progressSlide.classList.remove("animate"),progressSlide.classList.remove("active"),progressSlide.classList.add("animate"),progressSlide.classList.add("active")},slideChangeTransitionStart:function(){progressSlide.classList.remove("animate"),progressSlide.classList.remove("active"),progressSlide.classList.add("active")},slideChangeTransitionEnd:function(){progressSlide.classList.add("animate")}}}),header=document.getElementById("js-header");function fixedMenu(){96<window.pageYOffset?header.classList.add("fixed-menu"):header.classList.remove("fixed-menu")}document.addEventListener("scroll",fixedMenu);var allFilters=document.querySelectorAll(".js-nav-games li a"),tabPane=document.querySelectorAll(".tab-pane-games"),btnOpenModal=(allFilters.forEach(function(t,s){t.addEventListener("click",function(e){e.preventDefault(),allFilters.forEach(function(e){e.classList.remove("active")}),tabPane.forEach(function(e){e.classList.remove("active")}),tabPane[s].classList.add("active"),t.classList.add("active")})}),document.querySelector(".js-open-modal")),btnCloseModal=document.querySelector(".js-close"),btnMenu=(btnOpenModal.addEventListener("click",function(e){e.preventDefault(),document.documentElement.classList.add("show-modal")}),btnCloseModal.addEventListener("click",function(){document.documentElement.classList.remove("show-modal")}),document.querySelectorAll(".js-btn-menu")),menuSite=document.querySelectorAll(".js-menu");btnMenu.forEach(function(t,s){t.addEventListener("click",function(e){e.preventDefault(),menuSite.forEach(function(e){e.classList.remove("active"),e.addEventListener("mouseleave",function(){e.classList.remove("active"),btnMenu.forEach(function(e){e.classList.remove("active")})})}),btnMenu.forEach(function(e){e.classList.remove("active")}),t.classList.add("active"),menuSite[s].classList.add("active")})});