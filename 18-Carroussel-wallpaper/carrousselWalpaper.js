// Recupération des élements de la page
const body = $('body');
const slides = $('.slide');
const leftBtn = $('#left');
const rightBtn = $('#right');

//initialisation de la slide active
let activeSlide = 0;

//Event listener on click sur le rightbtn
rightBtn.on('click', () => {
  activeSlide++;

  if (activeSlide > slides.length - 1) {
    activeSlide = 0;
  }

  setBgToBody();
  setActiveSlide();
});

//Event listener on click sur le leftbtn
leftBtn.on('click', () => {
  activeSlide--;

  if (activeSlide < 0) {
    activeSlide = slides.length - 1;
  }

  setBgToBody();
  setActiveSlide();
});

setBgToBody();

// fonction qui applique la bg img du body sur le slider
function setBgToBody() {
  body.css('backgroundImage', slides[activeSlide].style.backgroundImage);
}

// fonction qui indique quel slide est actif et retire la classe 'active' des autres 
function setActiveSlide() {
  slides.removeClass('active');
  slides.eq(activeSlide).addClass('active');
}
