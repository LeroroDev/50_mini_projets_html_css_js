// Récupération des éléments de la page
const imgs = document.getElementById('imgs')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')
const img = document.querySelectorAll('#imgs img')

// On l'index à 0
let idx = 0

// On crée une variable interval qui exécute la fonction run toutes les 2s
let interval = setInterval(run, 2000)

// fonction run qui incrémente la variable idx et exécute changeImage()
function run() {
    idx++
    changeImage()
}

// fonction changeImage qui change l'image en fonction de la valeur de idx
function changeImage() {
    if(idx > img.length - 1) {
        idx = 0
    } else if(idx < 0) {
        idx = img.length - 1
    }

    // On déplace l'élément avec l'id imgs sur l'axe X en fonction de la valeur de idx
    imgs.style.transform = `translateX(${-idx * 500}px)`
}

// On crée la fonction resetInterval qui réinitialise la variable interval
function resetInterval() {
    clearInterval(interval)
    interval = setInterval(run, 2000)
}
//Eventlistener onClick sur les boutons leftBtn et rightBtn qui incrémente ou décrémente la variable idx et exécute les fonctions changeImage et resetInterval
rightBtn.addEventListener('click', () => {
    idx++
    changeImage()
    resetInterval()
})

leftBtn.addEventListener('click', () => {
    idx--
    changeImage()
    resetInterval()
})