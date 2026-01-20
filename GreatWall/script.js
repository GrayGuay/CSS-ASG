document.querySelectorAll('.fact-card').forEach(card => {
  card.addEventListener('mouseover', () => {
    card.style.transform = "scale(1.05)";
  });
  card.addEventListener('mouseout', () => {
    card.style.transform = "scale(1)";
  });
});

const cards = document.querySelectorAll('.testimonial-card');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

cards.forEach(card => observer.observe(card));