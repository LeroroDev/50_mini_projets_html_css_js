// L'URL de l'API
const url = "https://pokebuildapi.fr/api/v1/pokemon";

// Couleurs de chaque type de Pokémon
const pokemonTypeColors = [
  { type: "Normal", color: "#A8A77A" },
  { type: "Feu", color: "#EE8130" },
  { type: "Eau", color: "#6390F0" },
  { type: "Électrik", color: "#F7D02C" },
  { type: "Plante", color: "#7AC74C" },
  { type: "Glace", color: "#96D9D6" },
  { type: "Combat", color: "#C22E28" },
  { type: "Poison", color: "#A33EA1" },
  { type: "Sol", color: "#E2BF65" },
  { type: "Vol", color: "#A98FF3" },
  { type: "Psy", color: "#F95587" },
  { type: "Insecte", color: "#A6B91A" },
  { type: "Roche", color: "#B6A136" },
  { type: "Spectre", color: "#735797" },
  { type: "Dragon", color: "#6F35FC" },
  { type: "Ténèbres", color: "#705746" },
  { type: "Acier", color: "#B7B7CE" },
  { type: "Fée", color: "#D685AD" },
];

// Fonction pour récupérer les données des Pokémon
const getPokemonData = () => {
  $.ajax({
    url : url,
    success : function(data) {
      const pokemonCards = $("#pokemon-cards");
      pokemonCards.html("");

      data.forEach(pokemon => {
        const card = $("<div>").addClass("pokemon-card");

        const pkmnID = $("<h3>").text(pokemon.pokedexId);
        card.append(pkmnID);

        const name = $("<h2>").text(pokemon.name);
        card.append(name);

        const image = $("<img>").attr("src", pokemon.image);
        card.append(image);

        const types = $("<p>");
        const pokemonTypes = pokemon.apiTypes.map(apiType => apiType.name);

        if (pokemonTypes.length === 1) {
          // Le Pokémon a un seul type
          const pokemonTypeColor = pokemonTypeColors.find(x => x.type === pokemonTypes[0]).color;
          card.css("background", pokemonTypeColor);
        } else {
          // Le Pokémon a deux types
          const pokemonType1 = pokemonTypeColors.find(x => x.type === pokemonTypes[0]).color;
          const pokemonType2 = pokemonTypeColors.find(x => x.type === pokemonTypes[1]).color;
          card.css("background", `linear-gradient(135deg, ${pokemonType1}, ${pokemonType2})`);
        }

        types.text(pokemonTypes.join("/"));
        card.append(types);

        pokemonCards.append(card);
      });
    },
    error : function(error) {
      console.error(error);
    }
  });
};

// Fonction pour récupérer les données des Pokémon en fonction de la génération choisie
const getPokemonByGen = generation => {
  const generationURL = generation ? url + "/generation/" + generation : url;
  $.ajax({
    url : generationURL,
    success : function(data) {
      const pokemonCards = $("#pokemon-cards");
      pokemonCards.html("");

      data.forEach(pokemon => {
        const card = $("<div>").addClass("pokemon-card");

        const pkmnID = $("<h3>").text(pokemon.pokedexId);
        card.append(pkmnID);

        const name = $("<h2>").text(pokemon.name);
        card.append(name);

        const image = $("<img>").attr("src", pokemon.image);
        card.append(image);

        const types = $("<p>");
        const pokemonTypes = pokemon.apiTypes.map(apiType => apiType.name);

        if (pokemonTypes.length === 1) {
          // Le Pokémon a un type
          const pokemonTypeColor = pokemonTypeColors.find(x => x.type === pokemonTypes[0]).color;
          card.css("background", pokemonTypeColor);
        } else {
          // Le Pokémon a deux types
          const pokemonType1 = pokemonTypeColors.find(x => x.type === pokemonTypes[0]).color;
          const pokemonType2 = pokemonTypeColors.find(x => x.type === pokemonTypes[1]).color;
          card.css("background", `linear-gradient(135deg, ${pokemonType1}, ${pokemonType2})`);
        }

        types.text(pokemonTypes.join("/"));
        card.append(types);

        pokemonCards.append(card);
      });
    },
    error : function(error) {
      console.error(error);
    }
  });
};

// Récupérer les données des Pokémon
getPokemonData();

// Sélectionner les Pokémon en fonction de la génération choisie
const generationSelect = $("#generation");
generationSelect.on("change", () => {
  const selectedGen = generationSelect.val();
  getPokemonByGen(selectedGen);
});