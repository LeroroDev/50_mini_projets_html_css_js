// Sélection des éléments de la page
const toLike = document.querySelector('.liked')
const times = document.querySelector('#count')
// Initialise le compteur de clics à zéro
let timesClicked = 0

// Eventlistener ondouble-click sur la photo
toLike.addEventListener('dblclick', (e) => {
    // Appelle la fonction 'createHeart' 
    createHeart(e)
})

// Fonction pour créer un coeur 
const createHeart = (e) => {
    // Crée un nouveau coeur
    const heart = document.createElement('i')
    heart.classList.add('fas')
    heart.classList.add('fa-heart')

    // Récupère les coordonnées du clic
    const x = e.clientX
    const y = e.clientY
    const leftOffset = e.target.offsetLeft
    const topOffset = e.target.offsetTop
    const xInside = x - leftOffset
    const yInside = y - topOffset

    // Définit la position du coeur animé
    heart.style.top = `${yInside}px`
    heart.style.left = `${xInside}px`

    // Ajoute l'animation du coeur sur la photo
    toLike.appendChild(heart)

    // Incrémente le compteur de clics 
    times.innerHTML = ++timesClicked

    // Supprime le coeur animé après 1s
    setTimeout(() => heart.remove(), 1000)
}