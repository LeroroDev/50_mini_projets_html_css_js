// Récupération des éléments
const button = document.getElementById('button')
const notifs = document.getElementById('notifs')

// Définition des messages et des types de notification possibles
const messages = ['Notif 1',
    'Notif 2',
    'Notif 3',
    'Notif 4'
]
const types = ['info', 'success', 'error', 'dark']

// Eventlistener onClick sur le btn qui appelle createNotif()
button.addEventListener('click', () => createNotif())

// Fonction pour créer une notif avec un message et un type aléatoires 
function createNotif(message = null, type = null) {
    // Création d'un div pour la notif
    const notif = document.createElement('div')
    // Ajout des classes CSS "notif" et "type" 
    notif.classList.add('notif')
    notif.classList.add(type ? type : getRandType())

    // Ajout du texte de la notif
    notif.innerText = message ? message : getRandMessage()

    // Ajout de la notif à la zone des notifs
    notifs.appendChild(notif)

    // Suppression de la notif après 3s
    setTimeout(() => {
        notif.remove()
    }, 3000)
}

// Fonctions pour obtenir un message et un type aléatoires 

function getRandMessage() {
    return messages[Math.floor(Math.random() * messages.length)]
}

function getRandType() {
    return types[Math.floor(Math.random() * types.length)]
}