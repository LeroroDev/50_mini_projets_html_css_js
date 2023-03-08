// Sélection de l'élément bouton
const button = $('.ripple');

// Eventlistener on click sur le bouton
button.on('click', function (e) {
    // Récupération des coordonnées x et y du clic
    const x = e.pageX;
    const y = e.pageY;

    // Récupération de la position du bouton sur la page
    const buttonTop = $(this).offset().top;
    const buttonLeft = $(this).offset().left;

    // Calcul de la position relative du clic à l'intérieur du bouton
    const xInside = x - buttonLeft;
    const yInside = y - buttonTop;

    // Création d'un élément pour afficher l'ondulation'
    const circle = $('<span></span>').addClass('circle');
    circle.css({'top': yInside + 'px', 'left': xInside + 'px'});

    // Ajout de l'animation dans le bouton
    $(this).append(circle);

    // Suppression de l'effet après 0.5s
    setTimeout(() => circle.remove(), 500);
});
