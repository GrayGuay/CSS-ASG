const slides = document.querySelectorAll('.slider-images img');
let current = 0;

slides[current].classList.add('active');

document.querySelector('.next').onclick = () => {
  slides[current].classList.remove('active');
  current = (current + 1) % slides.length;
  slides[current].classList.add('active');
};

document.querySelector('.prev').onclick = () => {
  slides[current].classList.remove('active');
  current = (current - 1 + slides.length) % slides.length;
  slides[current].classList.add('active');
};
