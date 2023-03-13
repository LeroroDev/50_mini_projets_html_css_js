// Récupération des éléments de la page
const canvas = document.getElementById("canvas");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const sizeEl = document.getElementById("size");
const colorEl = document.getElementById("color");
const clearEl = document.getElementById("clear");

// Récupération du contexte de dessin
const ctx = canvas.getContext("2d");

// Taille par défaut, minimale et maximale
const DEFAULT_SIZE = 10;
const MIN_SIZE = 5;
const MAX_SIZE = 50;

// Initialisation des variables de taille, d'état de dessin et de couleur
let size = DEFAULT_SIZE;
let isDrawing = false;
let color = colorEl.value;

// Définition de la taille du dessin à 90% de la largeur et 80% de la hauteur de la page
canvas.width = window.innerWidth * 0.9;
canvas.height = window.innerHeight * 0.8;

// Fonction pour dessiner un cercle à la position donnée
function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

// Fonction pour dessiner une ligne entre deux positions
function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
}

// Fonction pour ma dej la taille affichée
function updateSizeOnScreen() {
  sizeEl.innerText = size;
}

// Fonction pour gérer le clic sur la souris
function handleMouseDown(event) {
  isDrawing = true;
  [x, y] = [event.offsetX, event.offsetY];
}

// Fonction pour gérer le relâchement du clic
function handleMouseUp(event) {
  isDrawing = false;
  [x, y] = [undefined, undefined];
}

// Fonction pour gérer le déplacement de la souris
function handleMouseMove(event) {
  if (isDrawing) {
    const [x2, y2] = [event.offsetX, event.offsetY];
    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);
    [x, y] = [x2, y2];
  }
}

// Fonction pour gérer la taille du "pinceau"
function handleSizeChange(change) {
  size += change;
  if (size < MIN_SIZE) {
    size = MIN_SIZE;
  } else if (size > MAX_SIZE) {
    size = MAX_SIZE;
  }
  updateSizeOnScreen();
}

// Fonction pour gérer la couleur
function handleColorChange(event) {
  color = event.target.value;
}

// Fonction pour effacer le dessin
function handleClearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Evenlisteners sur les boutons, les inputs et le dessin
increaseBtn.addEventListener("click", () => handleSizeChange(5));
decreaseBtn.addEventListener("click", () => handleSizeChange(-5));
colorEl.addEventListener("change", handleColorChange);
clearEl.addEventListener("click", handleClearCanvas);
canvas.addEventListener("mousedown", handleMouseDown);
canvas.addEventListener("mousemove", handleMouseMove);
document.addEventListener("mouseup", handleMouseUp);
