window.addEventListener('scroll', () => {
  document.querySelectorAll('nav a').forEach(link => {
    const section = document.querySelector(link.getAttribute('href'));
    const rect = section.getBoundingClientRect();
    link.style.opacity = (rect.top >= 0 && rect.top < window.innerHeight/2) ? '1' : '0.6';
  });
});
