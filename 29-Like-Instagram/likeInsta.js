// Sélection des éléments de la page
const toLike = $('.liked')
const times = $('#count')

// Initialise le compteur de clics à zéro
let timesClicked = 0

// Eventlistener ondouble-click sur la photo
toLike.on('dblclick', (e) => {
    // Appelle la fonction 'createHeart' 
    createHeart(e)
})

// Fonction pour créer un coeur 
const createHeart = (e) => {
    // Crée un nouveau coeur
    const heart = $('<i>').addClass('fas fa-heart')

    // Récupère les coordonnées du clic
    const x = e.clientX
    const y = e.clientY
    const leftOffset = e.target.offsetLeft
    const topOffset = e.target.offsetTop
    const xInside = x - leftOffset
    const yInside = y - topOffset

    // Définit la position du coeur animé
    heart.css({
        top: `${yInside}px`,
        left: `${xInside}px`
    })

    // Ajoute l'animation du coeur sur la photo
    toLike.append(heart)

    // Incrémente le compteur de clics 
    times.html(++timesClicked)

    // Supprime le coeur animé après 1s
    setTimeout(() => heart.remove(), 1000)
}
