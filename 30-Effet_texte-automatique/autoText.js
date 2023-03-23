// Récupération des éléments de la pagr
const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')

// Définition de la chaîne de caractères
const text = 'J\'aime les coquillettes !'

// Initialisation des variables de index et de vitesse
let idx = 1
let speed = 300 / speedEl.value

// Appel de la fonction écrivant le texte
writeText()

// Fonction pour écrire le texte lettre par lettre
function writeText() {
    textEl.innerText = text.slice(0, idx)

    idx++

    if(idx > text.length) {
        idx = 1
    }

    // Définition du délai entre chaque lettre 
    setTimeout(writeText, speed)
}

// Eventlistener on input pour déterminer la vitesse d'écriture du texte
speedEl.addEventListener('input', (e) => speed = 300 / e.target.value)