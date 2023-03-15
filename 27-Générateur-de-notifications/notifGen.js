// Récupération des éléments 
const button = $('#button');
const notifs = $('#notifs');

// Définition des messages et des types de notif possibles
const messages = [
    'Notif 1',
    'Notif 2',
    'Notif 3',
    'Notif 4',
];
const types = ['info', 'success', 'error', 'dark'];

// Eventlistener onClick sur le btn qui appelle createNotif()
button.on('click', () => createNotif());

// Fonction pour créer une notif avec un message et un type aléatoires 
function createNotif(message = null, type = null) {
    // Création d'un élément div pour la notification
    const notif = $('<div></div>');
    // Ajout des classes "notif" et "type" 
    notif.addClass('notif');
    notif.addClass(type ? type : getRandType());

    // Ajout du texte de la notif
    notif.text(message ? message : getRandMessage());

    // Ajout de la notif à la zone de notifs
    notifs.append(notif);

    // Suppression de la notif après 3s
    setTimeout(() => {
        notif.remove();
    }, 3000);
}

// Fonctions pour obtenir un message et un type aléatoire 

function getRandMessage() {
    return messages[Math.floor(Math.random() * messages.length)];
}

function getRandType() {
    return types[Math.floor(Math.random() * types.length)];
}