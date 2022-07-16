function toggleMenu() {
  const toggleMenu = document.querySelector('.toggleMenu');
  const navbar = document.querySelector('.navbar');
  const btns = document.querySelector('.btns');

  toggleMenu.classList.toggle("active");
  navbar.classList.toggle("active");
  btns.classList.toggle("active");
}