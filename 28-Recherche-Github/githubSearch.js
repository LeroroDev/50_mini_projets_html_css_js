// Définition de l'URL de l'API Github
const APIURL = 'https://api.github.com/users/';

// Recuperation des éléments de la page
const main = $('#main');
const form = $('#form');
const search = $('#search');

// Fonction asynchrone pour récupérer l'utilisateur via l'API Github
async function getUser(username) {
    try {
        const { data } = await axios(`${APIURL}${username}`)

        // Création d'une carte utilisateur
        createUserCard(data);

        // Récupération des repositories de l'utilisateur
        getRepos(username);
    } catch(err) {
        // Si l'utilisateur n'existe pas, créer une carte d'erreur
        if(err.response.status === 404) {
            createErrorCard('Aucun profil avec ce nom d\'utilisateur');
        }
    }
}

// Fonction asynchrone pour récupérer les repositories de l'utilisateur
async function getRepos(username) {
    try {
        const { data } = await axios(`${APIURL}${username}/repos?sort=created`);

        // Ajout des 5 derniers repositories à la carte utilisateur
        addReposToCard(data.slice(0, 5));
    } catch(err) {
        // Si erreur intervient, créer une carte d'erreur
        createErrorCard('Problème lors de la récupération des repositories');
    }
}

// Fonction pour créer une carte utilisateur
function createUserCard(user) {
    // Définition de l'ID et de la bio
    const userID = user.name || user.login;
    const userBio = user.bio ? `<p>${user.bio}</p>` : '';

    // Création de la carte utilisateur
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

    // Affichage de la carte utilisateur
    main.html(cardHTML);
}

// Fonction pour créer une carte d'erreur
function createErrorCard(msg) {
    const cardHTML = `
        <div class="card">
            <h1>${msg}</h1>
        </div>
    `;

    // Affichage de la carte d'erreur
    main.html(cardHTML);
}

// Fonction pour ajouter les 5 derniers repos de l'utilisateur sur sa carte
function addReposToCard(repos) {
    const reposEl = $('#repos');
    repos.forEach(repo => {
        const repoEl = $('<a class="repo"></a>');
        repoEl.attr('href', repo.html_url);
        repoEl.attr('target', '_blank');
        repoEl.text(repo.name);
        reposEl.append(repoEl);
    });
}

// Eventlistener onsubmit du form de recherche 
form.on('submit', (e) => {
    e.preventDefault();
    const user = search.val();
    if(user) {
        getUser(user);
        search.val('');
    }
});