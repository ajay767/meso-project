import { showAlert } from './alert';
import { navbarToggler } from './navbarToggler';
import { landingSlider } from './landing_slider.js';
import { reviewSlider } from './reviewSlider';

if (document.querySelector('.navigation__searchbar')) {
  const form = document.querySelector('.navigation__searchbar');
  form.addEventListener('submit', e => {
    const value = document.querySelector('.navigation__searchbar--input').value;
    showAlert(value, `you search for ${value}`);
    e.preventDefault();
  });
}

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
