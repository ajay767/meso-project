// document.querySelector('body').addEventListener('load', () => {
//   document.querySelector('.loader__container').style.display = 'none';
// });

window.onload = () => {
  document.querySelector('body').classList.remove('no-scroll');
  document.querySelector('.loader__container').style.display = 'none';
};
