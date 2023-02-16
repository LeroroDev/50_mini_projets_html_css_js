const $loadText = $(".loading-text");
const $bg = $(".bg");

// Initialisation la variable load
let load = 0;

// Démarre un interval qui appelle la fonction blurring toutes les 30ms
let int = setInterval(blurring, 30);

function blurring() {
  // Incrémente la variable load
  load++;

  // Si load atteint 100, stop l'interval
  if (load > 99) {
    clearInterval(int);
  }

  // Maj le texte de chargement avec le pourcentage en cours
  $loadText.text(`${load}%`);

  // Modifie l'opacité du texte de chargement en fonction de la valeur de load
  $loadText.css("opacity", scale(load, 0, 100, 1, 0));

  // Modifie le filtre de flou du bg en fonction de la valeur de load
  $bg.css("filter", `blur(${scale(load, 0, 100, 30, 0)}px)`);
}

// Fonction qui permet de contrôler le flou du bg et l'opacité du texte de chargement en fonction de la valeur de load
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
