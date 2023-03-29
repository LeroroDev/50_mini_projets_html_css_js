// Sélectionner les éléments de la page
const toggles = document.querySelectorAll('.toggle')
const good = document.querySelector('#good')
const cheap = document.querySelector('#cheap')
const fast = document.querySelector('#fast')

// Eventlistener toggle sur les élément "toggle"
toggles.forEach(toggle => toggle.addEventListener('change', (e) => doTheTrick(e.target)))

// Fonction qui désactive une case si les deux autres sont cochées 
function doTheTrick(theClickedOne) {
    if(good.checked && cheap.checked && fast.checked) {
        if(good === theClickedOne) {
            fast.checked = false
        }

        if(cheap === theClickedOne) {
            good.checked = false
        }

        if(fast === theClickedOne) {
            cheap.checked = false
        }
    }
}