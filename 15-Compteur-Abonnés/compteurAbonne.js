// Sélectionner tous les éléments ayant la classe "counter" et les stocker dans un tableau
const counters = document.querySelectorAll('.counter')

// Pour chaque counter 
counters.forEach(counter => {

    // Initialiser la valeur de counter à 0
    counter.innerText = '0'

    // Définir une fonction pour maj de la valeur de counter
    const updateCounter = () => {

        // Récupérer la valeur cible avec l'attribut "data-target" de counter et converti en nb grace au "+"
        const target = +counter.getAttribute('data-target')

        // Récupérer la valeur actuelle de counter et la converti en nb
        const c = +counter.innerText

        // Calculer l'incrémentation pour atteindre la valeur cible en 200 itérations
        const increment = target / 200

        // Si la valeur actuelle < à la valeur cible maj de la valeur de counter et utilisation de "updateCounter" toutes les ms
        if(c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`
            setTimeout(updateCounter, 1)
        }
        // Sinon, si la valeur actuelle >= à la valeur cible, màj de la valeur de counter avec la valeur cible
        else {
            counter.innerText = target
        }
    }

    // Appeler la fonction "updateCounter"
    updateCounter()
})
