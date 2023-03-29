//Récupération des éléments de la page
const resultEl = $('#result'); // l'élément HTML où le mot de passe sera affiché
const lengthEl = $('#length'); // l'élément HTML pour la longueur du mot de passe
const uppercaseEl = $('#uppercase'); // l'élément HTML pour les lettres majuscules
const lowercaseEl = $('#lowercase'); // l'élément HTML pour les lettres minuscules
const numbersEl = $('#numbers'); // l'élément HTML pour les chiffres
const symbolsEl = $('#symbols'); // l'élément HTML pour les symboles
const generateEl = $('#generate'); // l'élément HTML pour le bouton de génération
const clipboardEl = $('#clipboard'); // l'élément HTML pour le bouton de copie

//Objets contenant les fonctions qui génèrent les caractères aléatoires selon chaque type
const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
};

// Eventlistener onclick sur le bouton de copie
clipboardEl.on('click', () => {
    const password = resultEl.text();
    if (!password) {
        return;
    }
    navigator.clipboard.writeText(password); // la méthode navigator.clipboard.writeText() permet d'écrire dans le presse-papiers
    alert('Mot de passe copié dans le presse-papiers !')
});

// eventListener onclick sur le bouton de génération
generateEl.on('click', () => {
    const length = +lengthEl.val(); // récupération de la longueur entrée par l'utilisateur
    const hasLower = lowercaseEl.prop('checked'); // vérification si l'utilisateur a coché la case pour les lettres minuscules
    const hasUpper = uppercaseEl.prop('checked'); // vérification si l'utilisateur a coché la case pour les lettres majuscules
    const hasNumber = numbersEl.prop('checked'); // vérification si l'utilisateur a coché la case pour les chiffres
    const hasSymbol = symbolsEl.prop('checked'); // vérification si l'utilisateur a coché la case pour les symboles

    resultEl.text(generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length)); // appel de la fonction pour générer le mot de passe selon les critères sélectionnés
});

// Fonction qui génère le mot de passe
function generatePassword(lower, upper, number, symbol, length) {
    let generatedPassword = '';
    const typesCount = lower + upper + number + symbol; // nombre total de types de caractères 
    const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(item => Object.values(item)[0]); // tableau contenant les types de caractères sélectionnés

    if(typesCount === 0) { // si l'utilisateur n'a pas sélectionné de type de caractère
        return '';
    }

    // boucle pour générer les caractères aléatoires
    for(let i = 0; i < length; i += typesCount) {
        typesArr.forEach(type => { // itération sur le tableau des types de caractères sélectionnés
            const funcName = Object.keys(type)[0]; // récupération du nom de la fonction correspondante à chaque type
            generatedPassword += randomFunc[funcName](); // appel de la fonction correspondante pour ajouter un caractère aléatoire au mot de passe
        });
    }

    const finalPassword = generatedPassword.slice(0, length); // récupération des caractères nécessaires pour obtenir le mot de passe final

    return finalPassword;
}

// Fonctions qui génèrent les caractères aléatoires pour chaque type
function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97); // on ajoute 97 au code ASCII pour obtenir une lettre minuscule aléatoire
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65); // on ajoute 65 au code ASCII pour obtenir une lettre majuscule aléatoire
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48); // on ajoute 48 au code ASCII pour obtenir un chiffre aléatoire
}

function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.'; // liste des symboles possibles
    return symbols[Math.floor(Math.random() * symbols.length)]; // sélection d'un symbole aléatoire
}