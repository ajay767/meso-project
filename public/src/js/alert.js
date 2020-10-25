const warningMarkup = `<div class="alert__box alert__warning"><svg><use xlink:href="src/img/icon-pack-2.svg#danger"></use></svg><p class="primary__heading">Sorry the service is corrently disabled!</p></div>`;
const successMarkup = `<div class="alert__box alert__success"><svg><use xlink:href="src/img/icon-pack-2.svg#happy"></use></svg><p class="primary__heading">Yeahh now you are part of our family.</p></div>`;
const errorMarkup = `<div class="alert__box alert__error"><svg><use xlink:href="src/img/icon-pack-2.svg#sad"></use></svg><p class="primary__heading">Something wrong has happened!</p></div>`;

function showAlert(typeOfAlert) {
  const header = document.querySelector('.navigation');
  header.insertAdjacentHTML('beforeend', typeOfAlert);
  setTimeout(() => {
    document.querySelector('.alert__box').classList.add('showAlert');
  }, 400);
}

function hideAlert() {
  const el = document.querySelector('.alert__box');
  if (el) el.parentElement.removeChild(el);
}

document
  .querySelector('.navigation__searchbar')
  .addEventListener('submit', e => {
    const value = document.querySelector('.navigation__searchbar--input').value;
    console.log(value);

    value === 'success'
      ? showAlert(successMarkup)
      : value === 'error'
      ? showAlert(errorMarkup)
      : showAlert(warningMarkup);

    setTimeout(() => {
      hideAlert();
    }, 3000);
    e.preventDefault();
  });
