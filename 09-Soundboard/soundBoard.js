// Crée un tableau contenant les noms des fichiers audio à charger
const sounds = ["bump", "achieve", "coin", "correct", "item", "splatt"];

// Pour chaque nom de fichier audio dans le tableau "sounds"...
sounds.forEach((sound) => {
  // Crée un nouvel élément de bouton HTML avec la classe "btn"
  const btn = $("<button>").addClass("btn");

  // Définit le texte du bouton avec le nom du fichier audio
  btn.text(sound);

  // Ajoute un écouteur d'événement "click" au bouton
  btn.on("click", () => {
    // Arrête tous les fichiers audio en cours de lecture
    stopSongs();
    // Joue le fichier audio correspondant au bouton cliqué
    $("#" + sound)[0].play();
  });

  // Ajoute le bouton créé au conteneur HTML avec l'ID "buttons"
  $("#buttons").append(btn);
});

// Définit une fonction pour arrêter tous les fichiers audio en cours de lecture
function stopSongs() {
  // Pour chaque nom de fichier audio dans le tableau "sounds"...
  sounds.forEach((sound) => {
    // Récupère l'élément audio correspondant au nom de fichier
    const song = $("#" + sound)[0];

    // Arrête la lecture du fichier audio
    song.pause();
    // Réinitialise la position de lecture à 0
    song.currentTime = 0;
  });
}
