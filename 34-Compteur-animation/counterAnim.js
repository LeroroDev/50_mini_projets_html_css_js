// Sélection des éléments de la page
const numbers = document.querySelectorAll('.nbs span')
const counter = document.querySelector('.counter')
const finalMessage = document.querySelector('.final')
const replay = document.querySelector('#replay')

// Appel de la fonction runAnimation
runAnimation()

// Fonction qui reset la page
function resetDOM() {
  counter.classList.remove('hide')
  finalMessage.classList.remove('show')

  // Réinitialiser les classes pour chaque span des nombres affichés
  numbers.forEach((num) => {
    num.classList.value = ''
  })

  // Réinitialiser la classe "in" pour le premier span
  numbers[0].classList.add('in')
}

// Fonction qui permet de lancer l'animation
function runAnimation() {
  // Eventlistener "animationend" sur les nbs affichés
  numbers.forEach((num, idx) => {
    const nextToLast = numbers.length - 1

    num.addEventListener('animationend', (e) => {
      // Si l'animation "goIn" est terminée et que ce n'est pas le dernier span,
      // cacher le span en cours et afficher le suivant
      if (e.animationName === 'goIn' && idx !== nextToLast) {
        num.classList.remove('in')
        num.classList.add('out')
      }
      // Si l'animation "goOut" est terminée et qu'il y a un prochain élément,
      // afficher le prochain span
      else if (e.animationName === 'goOut' && num.nextElementSibling) {
        num.nextElementSibling.classList.add('in')
      }
      // Si c'est la fin de l'animation,
      // cacher le compteur et afficher le message final
      else {
        counter.classList.add('hide')
        finalMessage.classList.add('show')
      }
    })
  })
}

// Eventlistener onClick sur le bouton reset
replay.addEventListener('click', () => {
  resetDOM()
  runAnimation()
})