// Sélection du container
const container = document.getElementById('container')

// Tableau des couleurs
const colors = ['goldenrod', 'darkgreen', 'red', 'blueviolet', 'orangered']

// Nombre de carrés
const SQUARES = 500

// Ajout de chaque carré à l'élément container
for(let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    // Eventlistener on mouseover sur un carré
    square.addEventListener('mouseover', () => setColor(square))

    // Eventlistener on mouseout sur un carré
    square.addEventListener('mouseout', () => removeColor(square))

    container.appendChild(square)
}

// Fonction pour changer la couleur de fond et l'ombre de l'element en attribut
function setColor(element) {
   const color = getRandomColor()
   element.style.background = color
   element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

// Fonction pour remettre la couleur par défaut d'un élément en attribut
function removeColor(element) {
   element.style.background = '#1d1d1d'
   element.style.boxShadow = '0 0 2px #000'
}

// Fonction pour obtenir une couleur aléatoire dans le tab
function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}