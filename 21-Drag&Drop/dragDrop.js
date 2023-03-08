// Sélectionne l'élément "fill"
const fill = document.querySelector('.fill');

// Sélectionne les éléments "empty"
const empties = document.querySelectorAll('.empty');

// Eventlistener "dragstart" sur "fill"
fill.addEventListener('dragstart', dragStart);

// Eventlistener "dragend" sur "fill"
fill.addEventListener('dragend', dragEnd);

// Pour chaque élément "empty" un Eventlistener "dragover", "dragenter", "dragleave" et "drop"
for(const empty of empties) {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
}

// Fonction appelée lorsque l'on commence à faire glisser "fill"
function dragStart() {
    // Ajoute la classe "hold" à  "fill" pour indiquer qu'il est en cours de déplacement
    this.className += ' hold'; 

    // Utilise setTimeout pour ajouter la classe "invisible" à l'élément "fill" après 1ms
    setTimeout(() => this.className = 'invisible', 1);
}

// Fonction appelée lorsqu'on' arrête de faire glisser "fill"
function dragEnd() {
    // Réinitialise la classe de "fill" 
    this.className = 'fill';
}

// Fonction appelée lorsqu'on' fait glisser "fill" sur un "empty"
function dragOver(e) {
    e.preventDefault();
}

// Fonction appelée lorsqu'on' entre dans un "empty" avec "fill"
function dragEnter(e) {
    e.preventDefault();

    // Ajoute la classe "hovered" à"empty" pour indiquer qu'il est survolé 
    this.className += ' hovered';
}

// Fonction appelée lorsqu'on' quitte l'élément "empty" avec l'élément "fill"
function dragLeave() {
    // Réinitialise la classe de "empty"
    this.className = 'empty';
}

// Fonction appelée lorsqu'on'dépose "fill" dans "empty"
function dragDrop() {
    this.className = 'empty';

    // Ajoute "fill" en enfant de "empty", pour le déplacer de sa position initial à l'endroit ou il a été déposé
    this.append(fill);
}
