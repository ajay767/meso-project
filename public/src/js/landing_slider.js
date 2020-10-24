const landingSlider = function() {
  console.log('connected!!');
  const slides = document.querySelectorAll('.landing__slider--item');
  const leftBtn = document.querySelector('.landing--prev-btn');
  const rightBtn = document.querySelector('.landing--nxt-btn');
  console.log(slides);
  let curSlide = 0;
  const maxSlide = slides.length;

  const goToSlide = function(slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };
  // Next slide
  const nextSlide = function() {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }
    goToSlide(curSlide);
  };

  const prevSlide = function() {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
  };

  rightBtn.addEventListener('click', nextSlide);
  leftBtn.addEventListener('click', prevSlide);

  // setInterval(() => {
  //   nextSlide();
  // }, 5000);
};

landingSlider();
