
// On enregistre l'URL de l'API de GitHub 
const APIURL = 'https://api.github.com/users/';

// On récupère les éléments de la page
const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

// Fonction asynchrone pour obtenir les données du profil utilisateur
async function getUser(username) {
  try {
    const { data } = await axios(`${APIURL}${username}`);
    // On crée la carte utilisateur avec les données récupérées
    createUserCard(data);
    // On récupère également les repos de l'utilisateur
    getRepos(username);
  } catch(err) {
    // Si l'utilisateur n'existe pas, on affiche un message d'erreur
    if(err.response.status === 404) {
      createErrorCard('Aucun profil avec ce nom d\'utilisateur');
    }
  }
}

// Fonction asynchrone pour récupérer les repos de l'utilisateur
async function getRepos(username) {
  try {
    const { data } = await axios(`${APIURL}${username}/repos?sort=created`);
    // On ajoute les 5 premiers repositories récupérés à la carte utilisateur
    addReposToCard(data.slice(0, 5));
  } catch(err) {
    // En cas d'erreur, on affiche un message d'erreur
    createErrorCard('Problème lors de la récupération des repositories');
  }
}

// Fonction pour créer la carte utilisateur
function createUserCard(user) {
  const userID = user.name || user.login;
  const userBio = user.bio ? `<p>${user.bio}</p>` : '';
  const cardHTML = `
    <div class="card">
      <div>
        <img src="${user.avatar_url}" alt="${user.name}" class="avatar">
      </div>
      <div class="user-info">
        <h2>${userID}</h2>
        ${userBio}
        <ul>
          <li>${user.followers} <strong>Followers</strong></li>
          <li>${user.following} <strong>Following</strong></li>
          <li>${user.public_repos} <strong>Repos</strong></li>
        </ul>
        <div id="repos"></div>
      </div>
    </div>
  `;
  // On ajoute la sur la page
  main.innerHTML = cardHTML;
}

// Fonction pour créer une carte d'erreur
function createErrorCard(msg) {
  const cardHTML = `
      <div class="card">
          <h1>${msg}</h1>
      </div>
  `;
  // On ajoute la carte d'erreur sur la page
  main.innerHTML = cardHTML;
}

// Fonction pour ajouter les repos à la carte utilisateur
function addReposToCard(repos) {
  const reposEl = document.getElementById('repos');
  repos.forEach(repo => {
    const repoEl = document.createElement('a');
    repoEl.classList.add('repo');
    repoEl.href = repo.html_url;
    repoEl.target = '_blank';
    repoEl.innerText = repo.name;
    reposEl.appendChild(repoEl);
  });
}

//Eventlistener onsubmit du form pour rechercher un utilisateur
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const user = search.value;
  if(user) {
    // Si un utilisateur est renseigné, on récupère ses informations 
    getUser(user);
    // On vide le champ de recherche
    search.value = '';
  }
});
