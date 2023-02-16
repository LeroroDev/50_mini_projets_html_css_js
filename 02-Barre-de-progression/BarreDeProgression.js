const progress = $('#progression');
const prev = $('#prev');
const next = $('#next');
const circles = $('.circle');

// Initialisation de la variable de suivi d'élément actif
let currentActive = 1;

// Ajout de l'event onClick sur le bouton "next"
next.on('click', () => {
    // Incrémenter la variable de suivi de l'élément actif
    currentActive++;

    // Vérifier si la variable de suivi est supérieure à la longueur du tableau de cercles
    if(currentActive > circles.length) {
        currentActive = circles.length;
    }

    update();
});

// Ajout de l'event onClick sur bouton "prev"
prev.on('click', () => {
    // Décrémenter la variable de suivi de l'élément actif
    currentActive--;

    // Vérifier si la variable de suivi est inférieure à 1
    if(currentActive < 1) {
        currentActive = 1;
    }

    update();
});
/**
 *  Fonction pour mettre à jour les cercles et la barre de progression
 */
function update() {
    // Parcourir chaque cercle
    circles.each((idx, circle) => {
        // Ajouter la classe "active" aux cercles précédant l'élément actif et la supprimer pour les autres cercles
        if(idx < currentActive) {
            $(circle).addClass('active');
        } else {
            $(circle).removeClass('active');
        }
    });

    // Sélectionner les cercles actifs
    const actives = $('.active');

    // Maj de la barre de progression en fonction du nombre de cercles actifs
    progress.width((actives.length - 1) / (circles.length - 1) * 100 + '%');

    // Disable "prev" si l'élément actif est le premier cercle, et disable"next" s'il est le dernier
    if(currentActive === 1) {
        prev.prop('disabled', true);
    } else if(currentActive === circles.length) {
        next.prop('disabled', true);
    } else {
        prev.prop('disabled', false);
        next.prop('disabled', false);
    }
}
