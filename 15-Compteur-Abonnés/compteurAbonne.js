// Sélectionner tous les éléments ayant la classe "counter" et les stocker 
const counters = $('.counter');

// Pour chaque élément "counter" 
counters.each(function() {

    // Initialiser la valeur de l'élément "counter" à 0
    $(this).text('0');

    // Définir une fonction pour mettre à jour la valeur de counter
    const updateCounter = () => {

        // Récupérer la valeur cible à partir de l'attribut "data-target" de counter et la convertir en nb grace au "+"
        const target = +$(this).attr('data-target');

        // Récupérer la valeur actuelle de counter et la convertir en nb
        const c = +$(this).text();

        // Calculer l'incrémentation pour atteindre la valeur cible en 200 itérations
        const increment = target / 200;

        // Si la valeur actuelle < à la valeur cible, maj de la valeur de counter et utilisation de "updateCounter" toutes les ms
        if(c < target) {
            $(this).text(`${Math.ceil(c + increment)}`);
            setTimeout(updateCounter, 1);
        }
        // Sinon, si la valeur actuelle >= à la valeur cible, maj de la valeur de counter avec la valeur cible
        else {
            $(this).text(target);
        }
    }

    // Appeler la fonction "updateCounter"
    updateCounter();
});
