lucide.createIcons();

const header = document.getElementById('header');
window.addEventListener('scroll', function () {
    header.classList.toggle('scrolled', window.scrollY > 40);
});

const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
menuToggle.addEventListener('click', function () {
    mobileMenu.classList.toggle('open');
});
