// Récupération des éléments de la page
const $canvas = $("#canvas");
const $increaseBtn = $("#increase");
const $decreaseBtn = $("#decrease");
const $sizeEl = $("#size");
const $colorEl = $("#color");
const $clearEl = $("#clear");

// Récupération du contexte de dessin
const ctx = $canvas[0].getContext("2d");

// Taille par défaut, minimale et maximale
const DEFAULT_SIZE = 10;
const MIN_SIZE = 5;
const MAX_SIZE = 50;

// Initialisation des variables de taille, d'état de dessin et de couleur
let size = DEFAULT_SIZE;
let isDrawing = false;
let color = $colorEl.val();

// Définition de la taille du dessin à 90% de la largeur et 80% de la hauteur de la page
$canvas.attr("width", window.innerWidth * 0.9);
$canvas.attr("height", window.innerHeight * 0.8);

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

// Fonction pour mettre à jour la taille affichée
function updateSizeOnScreen() {
$sizeEl.text(size);
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
color = $colorEl.val();
}

// Fonction pour effacer le dessin
function handleClearCanvas() {
ctx.clearRect(0, 0, $canvas.width(), $canvas.height());
}

// Événements sur les boutons, les entrées et le dessin
$increaseBtn.on("click", () => handleSizeChange(5));
$decreaseBtn.on("click", () => handleSizeChange(-5));
$colorEl.on("change", handleColorChange);
$clearEl.on("click", handleClearCanvas);
$canvas.on("mousedown", handleMouseDown);
$canvas.on("mousemove", handleMouseMove);
$(document).on("mouseup", handleMouseUp);