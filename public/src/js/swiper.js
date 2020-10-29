import Swiper, { Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);

var swiper = new Swiper('.swiper-container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});

const mySponsers = new Swiper('.swiper-container-sponser', {
  loop: true,

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

const mySwiper = new Swiper('.swiper-container-1', {
  loop: false,
  pagination: {
    el: '.swiper-pagination'
  },
  slidesPerView: 'auto',
  pagination: {
    el: '.swiper-pagination-1',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next-1',
    prevEl: '.swiper-button-prev-1'
  }
});

const mySwiper2 = new Swiper('.swiper-container-2', {
  loop: false,

  slidesPerView: 'auto',

  pagination: {
    el: '.swiper-pagination-2',
    clickable: true
  },

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
  loop: false,
  slidesPerView: 'auto',
  pagination: {
    el: '.swiper-pagination-4',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next-4',
    prevEl: '.swiper-button-prev-4'
  }
});
