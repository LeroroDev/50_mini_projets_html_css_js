// URL de l'API 
const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1';
// URL pour les poster des films
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
// définir l'URL de recherche de films
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="';

// récupération de 'main','form' et 'search'
const main = $('#main');
const form = $('#form');
const search = $('#search');

// Obtenir les films les plus populaires
getMovies(API_URL);

// fonction pour obtenir les données de films via l'API
function getMovies(url) {
    $.ajax({
        url: url,
        method: 'GET',
        success: function (data) {
            showMovies(data.results); // montrer les donnés des films recherchés
        }
    });
}

// fonction pour afficher les films récupérés sur la page
function showMovies(movies) {
    main.html(''); // effacer le contenu HTML de 'main'

    movies.forEach((movie) => {
        const { title, poster_path, vote_average, overview } = movie; // extraire les propriétés du film à partir de l'objet movie

        // créer une carte pour le film et le remplir avec les propriétés du film
        const movieEl = `
            <div class="movie">
                <img src="${IMG_PATH + poster_path}" alt="${title}">
                <div class="movie-info">
                    <h3>${title}</h3>
                    <span class="${getClassByRate(vote_average)}">${vote_average}</span>
                </div>
                <div class="overview">
                    <h3>Overview</h3>
                    ${overview}
                </div>
            </div>
        `;

        main.append(movieEl); // ajouter la carte du film à 'main'
    });
}

//Fonction qui retourne la classe CSS à appliquer en fonction de la note du film
function getClassByRate(vote) {
    if (vote >= 8) {
        return 'green';
    } else if (vote >= 5) {
        return 'orange';
    } else {
        return 'red';
    }
}

//Event listener on submit de 'search'
form.on('submit', function (e) {
    //on bloque l'event submit du form
    e.preventDefault();

    const searchTerm = search.val();
    // on utilise getMovies sinon si 'search' est vide on renvoie sur la page de base (films populaires)
    if (searchTerm && searchTerm !== '') {
        getMovies(SEARCH_API + searchTerm);

        search.val('');
    } else {
        window.location.reload();
    }
});
