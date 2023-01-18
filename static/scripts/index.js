const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// Show active menu when scrolling
const highlightMenu = () => {
  const elem = document.querySelector('.highlight');
  const homeMenu = document.querySelector('#home-page');
  const skillsMenu = document.querySelector('#skills-page');
  const worksMenu = document.querySelector('#work-page'); 
  let scrollPos = window.scrollY;
  // console.log(scrollPos);

  // adds 'highlight' class to my menu items
  if (window.innerWidth > 960 && scrollPos < 450) {
    homeMenu.classList.add('highlight');
    skillsMenu.classList.remove('highlight');
    worksMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 900) {
    skillsMenu.classList.add('highlight');
    homeMenu.classList.remove('highlight');
    worksMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1300) {
    worksMenu.classList.add('highlight');
    homeMenu.classList.remove('highlight');
    skillsMenu.classList.remove('highlight');
    return;
  }

  if ((elem && window.innerWidth < 960 && scrollPos < 600) || elem) {
    elem.classList.remove('highlight');
  }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

//  Close mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
  const menuBars = document.querySelector('.is-active');
  if (window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle('is-active');
    menuLinks.classList.remove('active');
  }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);