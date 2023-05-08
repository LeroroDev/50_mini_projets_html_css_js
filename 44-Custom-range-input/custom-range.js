// Sélectionne l'élément input range dans le DOM
const range = document.getElementById('range')

// Ajoute un événement d'écoute pour tout changement de la valeur de l'input range
range.addEventListener('input', (e) => {
  // Récupère la valeur actuelle de l'input range
  const value = +e.target.value
  // Récupère l'élément label associé à l'input range
  const label = e.target.nextElementSibling

  // Récupère la largeur de l'input range
  const range_width = getComputedStyle(e.target).getPropertyValue('width')
  // Récupère la largeur du label associé
  const label_width = getComputedStyle(label).getPropertyValue('width')

  // Convertit les chaînes de caractères de largeur en nombres
  const num_width = +range_width.substring(0, range_width.length - 2)
  const num_label_width = +label_width.substring(0, label_width.length - 2)

  // Récupère les valeurs minimale et maximale de l'input range
  const max = +e.target.max
  const min = +e.target.min

  // Calcule la position de l'élément label en fonction de la valeur actuelle de l'input range
  const left =
    value * (num_width / max) -
    num_label_width / 2 +
    scale(value, min, max, 10, -10)

  // Déplace l'élément label à la position calculée
  label.style.left = `${left}px`

  // Met à jour le contenu de l'élément label avec la valeur actuelle
  label.innerHTML = value
})

// Fonction pour convertir une valeur d'une plage à une autre plage
// Adaptée de : https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}
