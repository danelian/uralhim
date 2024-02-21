$(document).ready(function () {

  // ---------------------- HEADER -----------------------
  const scrollHeader = () => {
    const header = document.getElementById('header')
    window.scrollY >= 300 ? header.classList.add('active') : header.classList.remove('active')
  }
  window.addEventListener('scroll', scrollHeader)

  // ------------------- BURGER MENU ---------------------
  const body = document.querySelector('body'),
        burgerMenu = document.querySelector('#burger-menu'),
        burgerOpen = document.querySelector('#burger-open'),
        burgerClose = document.querySelector('#burger-close'),
        burgerLinks = document.querySelectorAll('.nav-list>li>a, .nav-menu>a');
  burgerOpen.addEventListener('click', () => {
    burgerMenu.classList.add('show');
    body.classList.add('dis-scroll');
  })
  burgerClose.addEventListener('click', () => {
    burgerMenu.classList.remove('show');
    body.classList.remove('dis-scroll');
  })
  burgerLinks.forEach(n => n.addEventListener('click', () => {
    burgerMenu.classList.remove('show');
    body.classList.remove('dis-scroll');
  }))


});