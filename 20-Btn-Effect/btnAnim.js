const button = document.querySelector('.ripple')

// Eventlistener on click sur le bouton
button.addEventListener('click', function (e) {
    // Récupération des coordonnées x et y du clic
    const x = e.pageX
    const y = e.pageY

    // Récupération de la position du bouton sur la page
    const buttonTop = e.target.offsetTop
    const buttonLeft = e.target.offsetLeft

    // Calcul de la position relative du clic à l'intérieur du bouton
    const xInside = x - buttonLeft
    const yInside = y - buttonTop

    // Création d'un élément pour afficher l'ondulation'
    const circle = document.createElement('span')
    circle.classList.add('circle')
    circle.style.top = yInside + 'px'
    circle.style.left = xInside + 'px'

    // Ajout de l'animation dans le bouton
    this.appendChild(circle)

    // Suppression de l'effet après 0.5s
    setTimeout(() => circle.remove(), 500)
})
