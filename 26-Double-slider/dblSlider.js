// Récupération des éléments du slider
const $sliderContainer = $('.slider-container');
const $slideRight = $('.right-slide');
const $slideLeft = $('.left-slide');
const $upButton = $('.up-button');
const $downButton = $('.down-button');

// Obtenir le nb de slides contenu dans le slider
const slidesLength = $slideRight.find('div').length;

// Initialisation l'index de la slide active
let activeSlideIndex = 0;

// Déplace la left-slide vers le haut pour être alignée avec la right-slide
$slideLeft.css('top', `-${(slidesLength - 1) * 100}vh`);

// Eventlistener onClick sur les btn qui appelle changeSlide()
$upButton.on('click', () => changeSlide('up'));
$downButton.on('click', () => changeSlide('down'));

// Définit la fonction qui est appelée lorsqu'un bouton est cliqué pour changer de slide
const changeSlide = (direction) => {
// Obtient la hauteur du slider pour savoir combien de px il faut déplacer les 2 parties du slider
const sliderHeight = $sliderContainer.height();
// Incrémente ou décrémente l'index de la slide active en fonction de la direction 
if(direction === 'up') {
    activeSlideIndex++;
    if(activeSlideIndex > slidesLength - 1) {
        // Si l'index de la slide active > nb de slide retour de l'index à 0 pour revenir eu début
        activeSlideIndex = 0;
    }
} else if(direction === 'down') {
    activeSlideIndex--;
    if(activeSlideIndex < 0) {
        // Si l'index de la slide active < 0  l'index prend la valeur de la derniere slide
        activeSlideIndex = slidesLength - 1;
    }
}

// Déplace les parties du slider en fonction de l'index et de la hauteur du slider
$slideRight.css('transform', `translateY(-${activeSlideIndex * sliderHeight}px)`);
$slideLeft.css('transform', `translateY(${activeSlideIndex * sliderHeight}px)`);
}