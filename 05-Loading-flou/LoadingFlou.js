const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

// Initialise la variable load
let load = 0;

//variable qui contient la fonction pour flouter progressivement le bg
let int = setInterval(blurring, 30);

function blurring() {
  // Incrémente la variable load
  load++;

  // Si load atteint 100 stop l'interval
  if (load > 99) {
    clearInterval(int);
  }

  // Maj du texte de chargement pour afficher le pourcentage en cours
  loadText.innerText = `${load}%`;

  // Modifie l'opacité du texte de chargement 
  loadText.style.opacity = scale(load, 0, 100, 1, 0);

  //filtre de flou progressif du bg
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

// inisialisation d'une fonction qui permet de contrôler le flou du bg et l'opacité du texte de load en fonction de la value de load 
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
