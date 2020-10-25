const warningMarkup = `<div class="alert__box alert__warning"><svg><use xlink:href="src/img/icon-pack-2.svg#danger"></use></svg><p class="primary__heading">MESSAGE</p></div>`;
const successMarkup = `<div class="alert__box alert__success"><svg><use xlink:href="src/img/icon-pack-2.svg#happy"></use></svg><p class="primary__heading">MESSAGE</p></div>`;
const errorMarkup = `<div class="alert__box alert__error"><svg><use xlink:href="src/img/icon-pack-2.svg#sad"></use></svg><p class="primary__heading">MESSAGE</p></div>`;

function showAlert(typeOfAlert, msg) {
  const alertMsg = typeOfAlert.replace('MESSAGE', msg);
  const header = document.querySelector('header');
  header.insertAdjacentHTML('beforeend', alertMsg);
  setTimeout(() => {
    document.querySelector('.alert__box').classList.add('showAlert');
  }, 400);
}

function hideAlert() {
  const el = document.querySelector('.alert__box');
  if (el) el.parentElement.removeChild(el);
}

document.querySelector('header').addEventListener('submit', e => {
  const value = document.querySelector('.navigation__searchbar--input').value;
  console.log(value);

  value === 'success'
    ? showAlert(successMarkup, 'hum honge kamyabbb ek din!!')
    : value === 'error'
    ? showAlert(errorMarkup, 'Beta ERROR aarha h!!')
    : showAlert(warningMarkup, 'Hey! you have got a warning!');

  setTimeout(() => {
    hideAlert();
  }, 3000);
  e.preventDefault();
});
