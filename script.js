const btn = document.getElementById('hamburger-btn');
const mobileMenu = document.getElementById('mobile-menu');

function menuToggle() {
  btn.classList.toggle('active');
  mobileMenu.classList.toggle('hidden');
  // document.body.classList.toggle('no-scroll');
}

btn.addEventListener('click', menuToggle);