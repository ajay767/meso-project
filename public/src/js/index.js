function navbarToggle() {
  const navOpen = document.querySelector('.navigation__link--item');
  const navClose = document.querySelector('.sidebar__btn--close-nav ');
  const sideBar = document.querySelector('.sidebar');

  navOpen.addEventListener('click', e => {
    sideBar.classList.add('active');
  });

  navClose.addEventListener('click', e => {
    sideBar.classList.remove('active');
  });
}

const slider = function() {
  const slides = document.querySelectorAll('.slide');
  const nextBtn = document.querySelector('.slider__btn--right');
  const prevBtn = document.querySelector('.slider__btn--left');
  const dotContainer = document.querySelector('.dots');

  function createDot() {
    slides.forEach((_, i) => {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  }

  function activateDot(slide) {
    document.querySelectorAll('.dots__dot').forEach(e => {
      e.classList.remove('dots__dot--active');
    });
    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  }

  slides.forEach((e, i) => {
    e.style.transform = `translateX(${100 * i}%)`;
  });

  const totalSlides = slides.length;
  let curSlide = 0;

  function goToSlide(slide) {
    slides.forEach((s, i) => {
      s.style.transform = `translateX(${100 * (i - slide)}%)`;
    });
  }

  function goToNextSlide(s, i) {
    if (curSlide === totalSlides - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }
    activateDot(curSlide);
    goToSlide(curSlide);
  }

  function goToPrevSlide(s, i) {
    if (curSlide === 0) {
      curSlide = totalSlides - 1;
    } else {
      curSlide--;
    }
    activateDot(curSlide);
    goToSlide(curSlide);
  }

  nextBtn.addEventListener('click', () => {
    goToNextSlide();
  });

  prevBtn.addEventListener('click', () => {
    goToPrevSlide();
  });

  window.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') {
      goToNextSlide();
      activateDot(curSlide);
    }

    if (e.key === 'ArrowLeft') {
      goToPrevSlide();
      activateDot(curSlide);
    }
  });

  dotContainer.addEventListener('click', function(e) {
    if (e.target.classList.contains('dots__dot')) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });

  createDot();
  activateDot(0);
};

navbarToggle();
slider();
