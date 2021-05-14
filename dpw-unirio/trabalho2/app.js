const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

// menu do celular
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// Mostra o menú ativo quando rola a pag
const highlightMenu = () => {
  const elem = document.querySelector('.highlight');
  const homeMenu = document.querySelector('#home-page');
  const aboutMenu = document.querySelector('#about-page');
  const servicesMenu = document.querySelector('#services-page');
  let scrollPos = window.scrollY;
  // console.log(scrollPos);

  // add 'highlight' no item de menus
  if (window.innerWidth > 960 && scrollPos < 600) {
    homeMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1400) {
    aboutMenu.classList.add('highlight');
    homeMenu.classList.remove('highlight');
    servicesMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 2345) {
    servicesMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    return;
  }

  if ((elem && window.innerWIdth < 960 && scrollPos < 600) || elem) {
    elem.classList.remove('highlight');
  }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

//  Fecha o menu para cel 
const hideMobileMenu = () => {
  const menuBars = document.querySelector('.is-active');
  if (window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle('is-active');
    menuLinks.classList.remove('active');
  }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);

// carousel
var slides = document.querySelectorAll('.slide');
var botaos = document.querySelectorAll('.botao');
let currentSlide = 1;

//js para nav da imagem manual
var manualNav = function(manual){
  slides.forEach((slide) => {
    slide.classList.remove('active');

    botaos.forEach((botao) => {
      botao.classList.remove('active');
    });
  });

  slides[manual].classList.add('active');
  botaos[manual].classList.add('active');
}

botaos.forEach((botao, i) => {
  botao.addEventListener("click", () =>{
    manualNav(i);
    currentSlide = i;
  });
});

//cor de background 
function wallpaper(){
  hj = new Date();
  dia = hj.getDate();
  mes = hj.getMonth();

  if (mes == 0 || mes == 2|| mes == 3 || mes == 4 || mes == 5 || mes == 6 || mes == 7 || mes == 8 || mes == 9 || mes == 10 || mes == 11)
  {
    if (dia >= 20 && dia < 29) {
     document.body.style.backgroundColor = "#ff1100c4";
    }
    if (dia >= 10 && dia < 20) {
     document.body.style.backgroundColor = "#872bbdc5";
    }
    if ( dia < 10) {
     document.body.style.backgroundColor = "#030966c5";
    }

  if (mes == 1) {  
    if (dia >= 20 && dia < 29) {   
     document.body.style.backgroundColor = "#ff1100c4";
    }
    if (dia >= 10 && dia < 20) {
     document.body.style.backgroundColor = "#872bbdc5";
    }
    if ( dia < 10) {
     document.body.style.backgroundColor = "#030966c5";
    }

  }
}

//imagem do carousel passar sozinha
var repeat = function(activeClass){
  let active = document.getElementsByClassName('active');
  let i = 1;

  var repeater = () => {
    setTimeout(function(){
      [...active].forEach((activeSlide) => {
        activeSlide.classList.remove('active');
      });
    slides[i].classList.add('active');
    botaos[i].classList.add('active');
    i++;

    if(slides.length == i){
      i = 0;
    }
    if(i >= slides.length){
      return;
    }

    repeater();
    }, 10000);
  }
  repeater();
}
repeat();

}
