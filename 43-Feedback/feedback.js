// Récupère tous les éléments HTML avec la classe "rating"
const ratings = document.querySelectorAll('.rating')

// Récupère l'élément HTML qui contient tous les éléments "rating"
const ratingsContainer = document.querySelector('.ratings-container')

// Récupère le bouton "send" par son ID
const sendBtn = document.querySelector('#send')

// Récupère l'élément HTML qui contient le message affiché après avoir envoyé le feedback
const panel = document.querySelector('#panel')

// Initialise la valeur "selectedRating" à "Satisfied"
let selectedRating = 'Satisfied'

// Ajoute un événement "click" à l'élément "ratingsContainer"
ratingsContainer.addEventListener('click', (e) => {
    // Vérifie que l'élément cliqué est un élément "rating" et qu'il a un élément suivant
    if (e.target.parentNode.classList.contains('rating') && e.target.nextElementSibling) {
        removeActive()
        e.target.parentNode.classList.add('active')
        selectedRating = e.target.nextElementSibling.innerHTML
    // Vérifie que l'élément cliqué est un élément "rating", qu'il a un élément précédent et que cet élément est une image
    } else if (
        e.target.parentNode.classList.contains('rating') &&
        e.target.previousSibling &&
        e.target.previousElementSibling.nodeName === 'IMG'
    ) {
        removeActive()
        e.target.parentNode.classList.add('active')
        selectedRating = e.target.innerHTML
    }
})

// Ajoute un événement "click" au bouton "send"
sendBtn.addEventListener('click', (e) => {
    // Met à jour le contenu de l'élément "panel" avec un message de remerciement et le feedback sélectionné
    panel.innerHTML = `
        <i class="fas fa-heart"></i>
        <strong>Merci !</strong>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
        <p>Nous utiliserons vos retours pour ameliorer nos performances</p>
    `
})

// Fonction pour retirer la classe "active" de tous les éléments "rating"
function removeActive() {
    for (let i = 0; i < ratings.length; i++) {
        ratings[i].classList.remove('active')
    }
}
