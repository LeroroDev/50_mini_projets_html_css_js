// Recupération des élements de la page
const body = document.body
const slides = document.querySelectorAll('.slide')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')
//initialisation de la slide active
let activeSlide = 0
//Event listener on click sur le rightbtn
rightBtn.addEventListener('click', () => {
  activeSlide++

  if (activeSlide > slides.length - 1) {
    activeSlide = 0
  }

  setBgToBody()
  setActiveSlide()
})
//Event listener on click sur le leftbtn
leftBtn.addEventListener('click', () => {
  activeSlide--

  if (activeSlide < 0) {
    activeSlide = slides.length - 1
  }

  setBgToBody()
  setActiveSlide()
})

setBgToBody()
// fonction qui applique la bg img du body sur le slider
function setBgToBody() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}
// fonction qui indique quel slide est actif et retire la classe 'active' des autres 
function setActiveSlide() {
  slides.forEach((slide) => slide.classList.remove('active'))

  slides[activeSlide].classList.add('active')
}