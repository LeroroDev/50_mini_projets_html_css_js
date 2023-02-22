// Récupération des éléments HTML pour le bouton de génération de blague et l'affichage de la blague
const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

// Ajout d'un écouteur d'événement "click" sur le bouton de génération de blague
jokeBtn.addEventListener('click', generateJoke)

// Appel de la fonction de génération de blague pour afficher une blague dès le chargement de la page
generateJoke()

// Fonction asynchrone pour générer une blague
async function generateJoke() {
// Configuration de l'en-tête de la requête pour indiquer que nous souhaitons recevoir des données JSON
const config = {
headers: {
Accept: 'application/json',
},
}

// Envoi de la requête GET pour récupérer une blague aléatoire depuis l'API "icanhazdadjoke.com"
const res = await fetch('https://icanhazdadjoke.com', config)

// Conversion de la réponse en objet JSON
const data = await res.json()

// Affichage de la blague récupérée dans l'élément HTML prévu à cet effet
jokeEl.innerHTML = data.joke
}