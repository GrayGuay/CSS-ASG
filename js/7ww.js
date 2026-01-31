const slides = document.querySelectorAll('.slider-images img');
let current = 0;

slides[current].classList.add('active');

const showSlide = (index) => {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[index].classList.add('active');
};

// Auto-slide every 5 seconds
let autoSlide = setInterval(() => {
  current = (current + 1) % slides.length;
  showSlide(current);
}, 5000);

// Manual navigation
document.querySelector('.next').onclick = () => {
  current = (current + 1) % slides.length;
  showSlide(current);
  resetInterval();
};

document.querySelector('.prev').onclick = () => {
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
  resetInterval();
};

// Reset auto-slide interval when manually clicking
function resetInterval() {
  clearInterval(autoSlide);
  autoSlide = setInterval(() => {
    current = (current + 1) % slides.length;
    showSlide(current);
  }, 5000);
}



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




