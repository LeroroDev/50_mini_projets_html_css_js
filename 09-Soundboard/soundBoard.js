// Crée un tableau contenant les noms des fichiers audio à charger
const sounds = ["bump", "achieve", "coin", "correct", "item", "splatt"];

// Pour chaque nom de fichier audio dans le tableau "sounds"...
sounds.forEach((sound) => {
  // Crée un nouvel élément de bouton HTML
  const btn = document.createElement("button");
  // Ajoute la classe CSS "btn" à l'élément de bouton
  btn.classList.add("btn");

  // Définit le texte du bouton avec le nom du fichier audio
  btn.innerText = sound;

  // Ajoute un écouteur d'événement "click" au bouton
  btn.addEventListener("click", () => {
    // Arrête tous les fichiers audio en cours de lecture
    stopSongs();
    // Joue le fichier audio correspondant au bouton cliqué
    document.getElementById(sound).play();
  });

  // Ajoute le bouton créé au conteneur HTML avec l'ID "buttons"
  document.getElementById("buttons").appendChild(btn);
});

// Définit une fonction pour arrêter tous les fichiers audio en cours de lecture
function stopSongs() {
  // Pour chaque nom de fichier audio dans le tableau "sounds"...
  sounds.forEach((sound) => {
    // Récupère l'élément audio correspondant au nom de fichier
    const song = document.getElementById(sound);

    // Arrête la lecture du fichier audio
    song.pause();
    // Réinitialise la position de lecture à 0
    song.currentTime = 0;
  });
}
