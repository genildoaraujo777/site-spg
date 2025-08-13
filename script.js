document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    const href = link.getAttribute('href');

    // Só intercepta links com href que começa com #
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);

      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});


const toggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

toggle.addEventListener('click', () => {
  menu.classList.toggle('show');
});