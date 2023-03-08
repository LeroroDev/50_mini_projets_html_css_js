// Sélection des éléments de la page
const hourEl = document.querySelector('.hour') // aiguille des heures
const minuteEl = document.querySelector('.minute') // aiguille des minutes
const secondEl = document.querySelector('.second') // aiguille des secondes
const timeEl = document.querySelector('.time') // élément affichant l'heure et l'am/pm
const dateEl = document.querySelector('.date') // élément affichant la date
const toggle = document.querySelector('.toggle') // bouton pour activer/désactiver le mode sombre

// Tableaux des jours et des mois
const days = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
const months = ["Jan", "Fev", "Mars", "Avr", "Mai", "Juin", "Juil", "Aout", "Sep", "Oct", "Nov", "Dec"];

// Eventlister on click sur le bouton du dark mode
toggle.addEventListener('click', (e) => {
    const html = document.querySelector('html')
    if (html.classList.contains('dark')) {
        // Si le mode sombre est actif, on le désactive et on change le texte en "Dark"
        html.classList.remove('dark')
        e.target.innerHTML = 'Dark'
    } else {
        // Sinon, on l'active et on change le texte en "Light"
        html.classList.add('dark')
        e.target.innerHTML = 'Light'
    }
})

// Fonction pour afficher l'heure et la date actuelles
function setTime() {
    const time = new Date(); // Objet contenant la date et l'heure actuelles
    const month = time.getMonth() 
    const day = time.getDay() 
    const date = time.getDate() 
    const hours = time.getHours() 
    const hoursForClock = hours >= 13 ? hours % 12 : hours; // Conversion de l'heure de 24h à 12h
    const minutes = time.getMinutes().toString().padStart(2, '0');//minutes formatées sur deux chiffres avec un 0 si besoin    
    const seconds = time.getSeconds()
    const ampm = hours >= 12 ? 'PM' : 'AM' // AM ou PM en fonction de l'heure

    // Rotation des aiguilles en fonction de l'heure 
    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 12, 0, 360)}deg)`
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 60, 0, 360)}deg)`
    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 60, 0, 360)}deg)`

    // Affichage de l'heure 
    timeEl.innerHTML = `${hoursForClock}:${minutes} ${ampm}`;
    // Affichage de la date avec un cercle autour du jour du mois
    dateEl.innerHTML = `${days[day]}, <span class="circle">${date}</span> ${months[month]}`;
}
//Fonction utilisée pour calculer l'angle de rotation des aiguilles en fonction du temps (vu sur stack overflow)
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
};

setTime();

setInterval(setTime, 1000);
