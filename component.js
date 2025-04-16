const menu = document.querySelector('#menu-bar');
const navbarEl = document.querySelector('.navbar-menu');
const cover = document.querySelector('.cover');
const eventSection = document.querySelector('.event-section');


var swiper = new Swiper("#card-content", {
    effect: "cube",
    grabCursor: true,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },
});

var swiper = new Swiper("#menu-content", {
    slidesPerView: 4,
    spaceBetween: 25,
    loop: true,
    centerSlide:true,
    fade: true,
    grabCursor: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },
    pagination: {
      el: "swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  
    breakpoints:{
      0: {
        slidesPerView: 1,
      },
      520: {
        slidesPerView: 2,
      },
      950: {
        slidesPerView: 3,
      },
    }
  });