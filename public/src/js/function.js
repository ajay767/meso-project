const goToPreviousPage = () => {
  let btn = document.querySelector('.goBackButton');
  btn.addEventListener('click', () => {
    window.history.back();
  });
};

let backPageBtn = document.querySelector('.goBackButton');

if (backPageBtn) {
  goToPreviousPage();
}
