// Crée une constante "result" qui référence un élément HTML avec l'ID "result"
const result = document.getElementById('result')

// Crée une constante "filter" qui référence un élément HTML avec l'ID "filter"
const filter = document.getElementById('filter')

// Crée un tableau vide appelé "listItems"
const listItems = []

// Appelle la fonction asynchrone "getData"
getData()

// Ajoute un événement d'écoute sur l'élément HTML avec l'ID "filter"
filter.addEventListener('input', (e) => filterData(e.target.value))

// Définit la fonction asynchrone "getData"
async function getData() {
  // Utilise l'API "randomuser.me" pour récupérer une liste de 100 utilisateurs
  const res = await fetch('https://randomuser.me/api?results=100')

  // Récupère la liste d'utilisateurs à partir de la réponse de l'API
  const { results } = await res.json()

  // Supprime tous les éléments enfants de l'élément "result"
  result.innerHTML = ''

  // Pour chaque utilisateur dans la liste "results", crée un élément "li" et ajoute-le à la page web
  results.forEach(user => {
    const li = document.createElement('li')

    // Ajoute l'élément "li" à la liste "listItems"
    listItems.push(li)

    // Définit le contenu HTML de l'élément "li" en utilisant les données de l'utilisateur
    li.innerHTML = `
      <img src="${user.picture.large}" alt="${user.name.first}">
      <div class="user-info">
        <h4>${user.name.first} ${user.name.last}</h4>
        <p>${user.location.city}, ${user.location.country}</p>
      </div>
    `

    // Ajoute l'élément "li" en tant qu'enfant de l'élément "result"
    result.appendChild(li)
  })
}

// Définit la fonction "filterData" qui prend un paramètre "searchTerm"
function filterData(searchTerm) {
  // Pour chaque élément HTML dans la liste "listItems"
  listItems.forEach(item => {
    // Vérifie si le texte de l'élément contient la chaîne de caractères "searchTerm" (en minuscules)
    if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
      // Si oui, retire la classe "hide" de l'élément
      item.classList.remove('hide')
    } else {
      // Sinon, ajoute la classe "hide" à l'élément
      item.classList.add('hide')
    }
  })
}
