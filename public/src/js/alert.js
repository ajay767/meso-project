const alertMarkup = `<div class="alert__box alert__warning"><svg class="warning"><use xlink:href="src/img/icon-pack-2.svg#danger"></use></svg><p class="primary__heading">Sorry the service is corrently disabled!</p></div>`;

function showAlert() {
  const header = document.querySelector('.navigation');
  header.insertAdjacentHTML('beforeend', alertMarkup);
  document.querySelector('.alert__box').classList.add('showAlert');
}

function hideAlert() {
  const el = document.querySelector('.alert__box');
  if (el) el.parentElement.removeChild(el);
}

document
  .querySelector('.navigation__searchbar--input-link')
  .addEventListener('click', () => {
    const value = document.querySelector('.navigation__searchbar--input').value;
    console.log(value);
    showAlert();
    setTimeout(() => {
      hideAlert();
    }, 3000);
  });
