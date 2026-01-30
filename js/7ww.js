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



const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.15 });

sections.forEach(section => observer.observe(section));



document.addEventListener("DOMContentLoaded", () => {
  const timeline = document.querySelector('.timeline');
  const items = document.querySelectorAll('.timeline-item');

  if (!timeline || items.length === 0) return;

  // prepare items for animation
  items.forEach(item => item.classList.add('animate'));

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    {
      root: timeline,
      threshold: 0.15
    }
  );

  items.forEach(item => observer.observe(item));
});