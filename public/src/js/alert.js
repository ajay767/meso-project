function alertDesign(alertMarkup, msg) {
  alertMarkup = alertMarkup.replace('MESSAGE', msg);
  const header = document.querySelector('header');
  header.insertAdjacentHTML('beforeend', alertMarkup);
  setTimeout(() => {
    document.querySelector('.alert__box').classList.add('showAlert');
  }, 400);
}

function hideAlert() {
  const el = document.querySelector('.alert__box');
  if (el) el.parentElement.removeChild(el);
}

export const showAlert = (alertType, alertMsg) => {
  const warningMarkup = `<div class="alert__box alert__warning"><svg><use xlink:href="src/img/icon-pack-2.svg#danger"></use></svg><p class="alert__text">MESSAGE</p></div>`;
  const successMarkup = `<div class="alert__box alert__success"><svg><use xlink:href="src/img/icon-pack-2.svg#happy"></use></svg><p class="alert__text">MESSAGE</p></div>`;
  const errorMarkup = `<div class="alert__box alert__error"><svg><use xlink:href="src/img/icon-pack-2.svg#sad"></use></svg><p class="alert__text">MESSAGE</p></div>`;

  alertType === 'success'
    ? alertDesign(successMarkup, alertMsg)
    : alertType === 'error'
    ? alertDesign(errorMarkup, alertMsg)
    : alertDesign(warningMarkup, alertMsg);

  setTimeout(() => {
    hideAlert();
  }, 3000);
};

// to use alert use   --showAlert('alertType', 'alert message');  --alertType = ['success', 'error', 'warning]
// please wait for '3sec'  before showing another alert for better user experience
