"use strict";

function toggleMenu() {
  var toggleMenu = document.querySelector('.toggleMenu');
  var navbar = document.querySelector('.navbar');
  var btns = document.querySelector('.btns');
  toggleMenu.classList.toggle("active");
  navbar.classList.toggle("active");
  btns.classList.toggle("active");
}