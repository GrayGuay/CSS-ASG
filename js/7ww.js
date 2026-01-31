
// ===============
// Image slidre
// ===============

// Select all images in the slider
const slides = document.querySelectorAll('.slider-images img');
// Start at the first slide
let current = 0;


// Make the first slide visible initially
slides[current].classList.add('active');

const showSlide = (index) => {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[index].classList.add('active');
};




// ================================
// AUTO-SLIDE FUNCTIONALITY
// ================================

// Auto-slide every 5 seconds
let autoSlide = setInterval(() => {
  current = (current + 1) % slides.length;
  showSlide(current);
}, 5000);




// ================================
// MANUAL NAVIGATION
// ================================

// Next button click
document.querySelector('.next').onclick = () => {
  current = (current + 1) % slides.length;
  showSlide(current);
  resetInterval();
};

// Previous button click

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


// ================================
// SECTION FADE-IN ANIMATION ON SCROLL
// ================================

// Select all sections on the page
const sections = document.querySelectorAll("section");


// Create an IntersectionObserver to detect when sections enter the viewport
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.15 });

sections.forEach(section => observer.observe(section));








