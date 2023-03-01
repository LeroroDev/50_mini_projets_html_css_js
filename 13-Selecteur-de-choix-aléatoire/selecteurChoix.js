// Récupère l'élément qui affichera les choix
const choicesEl = $("#choice");

// Récupère la zone de texte
const textarea = $("#textarea");

// Met le focus sur la zone de texte
textarea.focus();

// Event listener sur keyup sur la zone de texte
textarea.on("keyup", (e) => {
  // Crée des choix à partir du texte entré dans la zone de texte
  createChoices(e.target.value);

  // Si la touche "Entrée" est activée
  if (e.key === "Enter") {
    // Efface la zone de texte
    setTimeout(() => {
      e.target.value = "";
    }, 10);

    // Sélectionne aléatoirement un choix
    randomSelect();
  }
});

/**
 * Fonction pour créer des choix à partir du texte entré dans la zone de texte
 * @param {String} input
 *  
 */
function createChoices(input) {
  // Sépare le texte entré en choix en utilisant le caractère "+"
  const choices = input
    .split("+")
    .filter((choice) => choice.trim() !== "")
    .map((choice) => choice.trim());

  // Efface l'élément qui affiche les choix
  choicesEl.html("");

  // Ajoute un élément "span" pour chaque choix et l'affiche dans l'élément choicesEl
  choices.forEach((choice) => {
    const choiceEl = $("<span></span>");
    choiceEl.addClass("choice");
    choiceEl.text(choice);
    choicesEl.append(choiceEl);
  });
}

// Fonction pour sélectionner aléatoirement un choix
function randomSelect() {
  // Nombre de fois que les choix seront mis en surbrillance avant la sélection
  const times = 30;

  // ajout intervalle pour la surbrillance 
  const interval = setInterval(() => {
    const randomchoice = pickRandomchoice();

    if (randomchoice !== undefined) {
      highlightchoice(randomchoice);

      setTimeout(() => {
        unHighlightchoice(randomchoice);
      }, 100);
    }
  }, 100);

  // Met fin à la boucle d'intervalle
  setTimeout(() => {
    clearInterval(interval);

    // Met en surbrillance le choix final 
    setTimeout(() => {
      const randomchoice = pickRandomchoice();

      highlightchoice(randomchoice);
    }, 100);
  }, times * 100);
}

/**
 * Fonction pour choisir un choix au hasard
 * @returns {Number}
 */
function pickRandomchoice() {
  const choices = $(".choice");
  return choices[Math.floor(Math.random() * choices.length)];
}

// Fonction pour mettre en surbrillance
function highlightchoice(choice) {
  choice.classList.add("highlight");
}

// Fonction pour enlever la surbrillance 
function unHighlightchoice(choice) {
  choice.classList.remove("highlight");
}
