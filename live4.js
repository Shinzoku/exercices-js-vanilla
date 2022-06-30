// exo d'algo + JS manip des nombres - intro TU

// cette PROCEDURE ( elle ne retourne rien, on n'en a pas besoin)
// vous permet d'écrire aff au lieu de console.log à chaque fois, une sorte d' ALIAS si vous voulez
// volontairement séparée pour l'instant, c'est un processus utilisé dans les TESTS UNITAIRES
// vos données de tests sont préremplies par votre humble serviteur ( pas toujours ) via aff, attention, il ne prend qu'un seul argument.

function aff(a) {
    console.log(a);
}

aff("Il est vraiment trop fort ce Baptiste.");
console.log("Il est vraiment trop fort ce Baptiste.");


// EXO
console.log("1");
// Math.random() RETOURNE un NOMBRE aléatoire entre 0 et 1 (inclus),  and 1 (exclus)
// afficher un nombre aléatoire

//soluce
aff(Math.random());


// EXO
console.log("2");
// Donner un chiffre rond ( INTEGER ) aléatoire.
// un chiffre va de O à 9

// soluce
aff(Math.floor(Math.random() * 10));


console.log("3");
// Donner un nombre entier entre une nombre a  INCLUS et un nombre B EXCLUS
// Math.floor(argument) retourne un nombre entier.

// soluce
aff(Math.floor(Math.random()));
aff(Math.floor(12.3456));

console.log("4");
// Créer une fonction qui renvoie un nombre entier entre deux valeurs

// soluce
function integerBetween(a, b) {
    let result;
    result = Math.floor(Math.random() * (b - a + 1) + a);
    return result;
}

aff(integerBetween(0, 1));
aff(integerBetween(5, 10));

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------

// map contenant des clefs:valeurs des codes ISO de devise, exemple :  EUR -> € , USD -> $

// créer une fonction( ou procédure , osef) qui retourne la traduction,   € , $ etc

// rajouter un vérificateur d'existence de devise dans le parametre de la fonction, sous forme de fenetre d'ALERTe de navigateur

const mapCurrency = new Map();

mapCurrency.set("EUR", "€");
mapCurrency.set("USD", "$");

function returnIso(mapKey) {
    console.log(mapCurrency.get(mapKey));
}

returnIso("EUR", mapCurrency);

function verifKey(mapKey, map) {
    console.log(map.has(mapKey));
}

verifKey("LIV", mapCurrency);

// ou
function currencyDisplayConvert(a) {
    if (mapCurrency.get(a) == undefined) {
        window.alert("/!\\ CURRENCY NOT FOUND /!\\ : " + a)
    }
    return mapCurrency.get(a);
}

// console.log(currencyDisplayConvert("RUB"));

// -----------------------------------------------------------------------------
// map dictionaire francais , clef:valeur -> mot : definition
// map dictionaire autre langue
// afficher tout le contenu de dico Francais via une boucle ( for de préférence)
// n'afficher que les MOTS ( ahem...clefs )SANS la définition du dico étranger
// fonction(ou procédure, choisissez, osef du nom) prenant en paramètre le language de l'utilisateur et affichant le dictionaire dans le language choisi sous forme de log.

const dicoFran = new Map();

dicoFran.set("bonjour", "Souhait de bonne journée");
dicoFran.set("au revoir", "Locution interjective par laquelle on prend congé de qqn que l'on pense revoir");

// log le contenu de la map
for (let [word, definition] of dicoFran) {
    console.log(word + " = " + definition);
}

const dicoEng = new Map();

dicoEng.set("hello", "is an expression or gesture of greeting —used interjectionally in greeting, in answering the telephone, or to express surprise.");
dicoEng.set("bye", "a farewell. they said goodbyes to each other.");

// for of .key()
let counter = 0;
for (let word of dicoEng) {
    counter++;
    console.log("english: " + counter + " " + word);
}

// // DEPRICIATED
// function choiseTheLanguage(lang) {
//     if (lang === 'FRA') {
//         console.log(dicoFran);
//     } else if (lang === 'ENG') {
//         console.log(dicoEng);
//     } else {
//         console.log("Le dictionnaire n'est pas disponible dans cette langue: " + lang);
//     }
// }


function choiceTheLanguage(lang) {
    switch (lang) {
        case 'FRA':
            console.log(dicoFran);
            break;
        case 'ENG':
            console.log(dicoEng);
            break;
        default:
            console.log("LANGUAGE NOT FOUND");
            break;
    }
}

// choiceTheLanguage("RUS");

let languageChoice = window.prompt("LANGUAGE :");

choiceTheLanguage(languageChoice);