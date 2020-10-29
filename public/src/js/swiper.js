// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from 'swiper';

// configure Swiper to use modules
Swiper.use([Navigation, Pagination]);

// init Swiper:
const mySponsers = new Swiper('.swiper-container-sponser', {
  // Optional parameters
  // direction: 'horizontal',
  loop: false,

  // spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next-sponser',
    prevEl: '.swiper-button-prev-sponser'
  }
});

// init Swiper:
const mySwiper = new Swiper('.swiper-container-1', {
  // Optional parameters
  // direction: 'horizontal',
  loop: false,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination'
  },
  // slideClass: '.swiper-slide',
  slidesPerView: 'auto',
  // spaceBetween: 5,
  pagination: {
    el: '.swiper-pagination-1',
    clickable: true
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next-1',
    prevEl: '.swiper-button-prev-1'
  }
});

const mySwiper2 = new Swiper('.swiper-container-2', {
  // Optional parameters
  // direction: 'horizontal',
  loop: false,

  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination'
  // slideClass: '.swiper-slide-2',
  // },
  slidesPerView: 'auto',
  // spaceBetween: 5,
  pagination: {
    el: '.swiper-pagination-2',
    clickable: true
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next-2',
    prevEl: '.swiper-button-prev-2'
  }
});
const mySwiper3 = new Swiper('.swiper-container-3', {
  loop: false,
  slidesPerView: 'auto',
  pagination: {
    el: '.swiper-pagination-3',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next-3',
    prevEl: '.swiper-button-prev-3'
  }
});
const mySwiper4 = new Swiper('.swiper-container-4', {
  // Optional parameters
  // direction: 'horizontal',
  loop: false,

  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination'
  // slideClass: '.swiper-slide-2',
  // },
  slidesPerView: 'auto',
  // spaceBetween: 5,
  pagination: {
    el: '.swiper-pagination-4',
    clickable: true
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next-4',
    prevEl: '.swiper-button-prev-4'
  }
});
