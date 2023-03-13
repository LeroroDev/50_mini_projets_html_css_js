// On récupère la navbar
const nav = document.querySelector('.nav')

// Eventlistener on scroll sur la page qui fait appel a la fonction animNav
window.addEventListener('scroll', animNav)

function animNav() {
    // On vérifie la position de défilement de la page navbar + 150px 
    if(window.scrollY > nav.offsetHeight + 150) {
        // Si c'est le cas, on ajoute une classe "active" à la barre de navigation
        nav.classList.add('active')
    } else {
        // Sinon, on retire la classe "active" 
        nav.classList.remove('active')
    }
}
