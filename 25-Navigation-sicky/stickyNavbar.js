// On récupère la navbar
const nav = $('.nav');

// Eventlistener on scroll sur la page qui fait appel a la fonction animNav
$(window).scroll(animNav);

function animNav() {
  // On vérifie la position de défilement de la page navbar + 150px 
  if($(window).scrollTop() > nav.outerHeight() + 150) {
    // Si c'est le cas, on ajoute une classe "active" à la barre de navigation
    nav.addClass('active');
  } else {
    // Sinon, on retire la classe "active" 
    nav.removeClass('active');
  }
}
