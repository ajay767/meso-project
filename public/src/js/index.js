import { showAlert } from './alert';
import { navbarToggler } from './navbarToggler';
import { landingSlider } from './landing_slider.js';
import { reviewSlider } from './reviewSlider';

// --previous page button
const goToPreviousPage = () => {
  let backPageBtn = document.querySelector('.goBackButton');
  backPageBtn.addEventListener('click', () => {
    window.history.back();
  });
};

if (document.querySelector('.goBackButton')) goToPreviousPage();

if (document.querySelector('.reviews.slider')) reviewSlider();

if (document.querySelectorAll('.landing__slider--item').length !== 0)
  landingSlider();

navbarToggler();
