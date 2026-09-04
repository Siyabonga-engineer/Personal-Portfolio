// Smooth scroll for navigation links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Mobile menu toggle
const navbar = document.querySelector('.navbar');
const menuToggle = document.createElement('button');
menuToggle.textContent = '☰';
menuToggle.classList.add('menu-toggle');
navbar.prepend(menuToggle);

menuToggle.addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('active');
});

// Scroll animations
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
  sections.forEach(sec => {
    const position = sec.getBoundingClientRect().top;
    if (position < window.innerHeight - 100) {
      sec.classList.add('visible');
    }
  });
});
