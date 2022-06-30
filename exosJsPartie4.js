// Exercice 1:
// Créez une fonction pour concaténer deux tableaux entiers.
// Exemple:
// concatener([1, 2], [3, 4]) ➞ [1, 2, 3, 4]
// concatener([9, 8], [1, 5, 6, 7]) ➞ [9, 8, 1, 5, 6, 7]
// concatener([1, 1, 1], [2, 2, 2]) ➞ [1, 1, 1, 2, 2, 2]

function concatener(tab1, tab2) {
	let tab;
    tab = tab1.concat(tab2);
    return tab;
}

// Afficher la sortie
console.log(concatener([1, 2], [3, 4]));
console.log(concatener([9, 8], [1, 5, 6, 7]));
console.log(concatener([1, 1, 1], [2, 2, 2]));

// Exercice 2:
// Créez une fonction qui trouve l’index d’un élément donné. Si l’élément n’existe pas, retournez -1.
// Exemple:
// find([2, 7, 1], 7) ➞ 1
// find([6, 9, 5], 6) ➞ 0
// find([6, 7, 8], 9) ➞ -1

function find(tab, val) {
	for(let i = 0; i <= tab.length; i++){
        if(tab[i] == val) {
            return i;
        }else{
            return -1;
        }
    }
}

// Afficher la sortie
console.log(find([2, 7, 1], 7));
console.log(find([6, 9, 5], 6));
console.log(find([6, 7, 8], 9));

// Exercice 3:
// Écrivez une fonction pour vérifier si un tableau contient un nombre particulier.
// Exemple:
// nbrExist([6, 7, 8], 7) ➞ true
// nbrExist([1, 2, 3], 5) ➞ false
// nbrExist([], 0) ➞ false

function nbrExist(tab, val) {
	for(let i = 0; i <= tab.length; i++){
        if(tab[i] === val) {
            return true;
        }
    }
    return false;
}

// Afficher la sortie
console.log(nbrExist([6, 7, 8], 7));
console.log(nbrExist([1, 2, 3], 5));
console.log(nbrExist([], 0));

// Exercice 4:
// Créez une fonction qui prend une chaîne (un nom aléatoire). Si le dernier caractère du nom est un « s », retournez TRUE, sinon retournez FALSE.
// Exemple:
// checkS("Thomas") ➞ true
// checkS("Ali") ➞ false
// checkS("Alex") ➞ false
// checkS("Alvis") ➞ true

function checkS(str) {
    let strSplit;
    let lastItem;

    strSplit = str.split('');
    lastItem = strSplit.length - 1;

	if (strSplit[lastItem] === 's') {
        return true;
    }else{
        return false;
    }
    // return str[str.length - 1] == 's';
}

// Afficher la sortie
console.log(checkS("Thomas"));
console.log(checkS("Ali"));
console.log(checkS("Alex"));
console.log(checkS("Alvis"));

// Exercice 5:
// Créez une fonction qui renvoie TRUE si une chaîne contient des espaces. Sinon renvoie FALSE.
// Exemple:
// containSpaces("Thomas") ➞ false
// containSpaces("Hello World!") ➞ true
// containSpaces(" ") ➞ true
// containSpaces("") ➞ false

function containSpaces(str) {
	return str.includes(' ');
}

// Afficher la sortie
console.log(containSpaces("Thomas"));
console.log(containSpaces("Hello World!"));
console.log(containSpaces(" "));
console.log(containSpaces(""));

// Exercice 6:

// Créez une fonction qui prend un objet comme argument et renvoie une chaîne qui représente une personne. Les attributs de la personne devront être extraits des trois propriétés de l’objet:
//     nom
//     age
//     adresse
// La chaîne doit avoir le format suivant: X a Y ans. Il habite à Z. (où X est le nom de la personne, Y est l’age et Z est l’adresse).
// Exemple:
// formatPrs({
//   nom: "Thomas",
//   age: "25",
//   adresse: "Paris"
// })
// ➞ "Thomas a 25 ans. Il habite à Paris."
// formatPrs({
//   nom: "Emily",
//   age: "22",
//   adresse: "Nantes"
// })
// ➞ "Emily a 22 ans. Il habite à Nantes."

function formatPrs(personne) {
	return `${personne.nom} a ${personne.age} ans. Il habite à ${personne.adresse}.`;
}

// Afficher la sortie
console.log(formatPrs({nom: "Thomas", age: "25", adresse: "Paris"}));
console.log(formatPrs({nom: "Emily", age: "22", adresse: "Nantes"}));

// Exercice 7:
// Créez une fonction qui prend une chaîne représentant l’humeur et renvoie une phrase au format suivant: « Aujourd’hui, je me sens {feeling} ». Cependant, si aucun argument n’est passé, retournez « Aujourd’hui, je me sens neutre ».
// Exemple:
// myFeeling("heureux") ➞ "Aujourd'hui, je me sens heureux"
// myFeeling("triste") ➞ "Aujourd'hui, je me sens triste"
// myFeeling() ➞ "Aujourd'hui, je me sens neutre"

function myFeeling(feeling = "neutre") {
	return `Aujourd'hui, je me sens ${feeling}.`;
}

// Afficher la sortie
console.log(myFeeling("heureux"));
console.log(myFeeling("triste"));
console.log(myFeeling());

// Exercice 8:
// Créez une fonction qui renvoie le nombre d’arguments avec lesquels elle a été appelée.
// Exemple:
// nbrArgs() ➞ 0
// nbrArgs({}) ➞ 1
// nbrArgs("A") ➞ 1
// nbrArgs("A", "B") ➞ 2

function nbrArgs(a, b) {
	if (a && !b) {
        return 1;
    }else if (a && b){
        return 2;
    }else{
        return 0;
    }
    // ou return arguments.length;
}

// Afficher la sortie
console.log(nbrArgs());
console.log(nbrArgs({}));
console.log(nbrArgs("A"));
console.log(nbrArgs("A", "B"));

// Exercice 9:
// Créez une fonction qui prend un mot et détermine s’il est pluriel ou singulier. Un mot pluriel est celui qui se termine par « s ». S’il est pluriel renvoyer TRUE sinon FALSE.
// Exemple:
// check("enfants") ➞ true
// check("filles") ➞ true
// check("fille") ➞ false
// check("enfant") ➞ false

function check(str) {
	let strSplit;
    let lastItem;

    strSplit = str.split('');
    lastItem = strSplit.length - 1;

	if (strSplit[lastItem] === 's') {
        return true;
    }else{
        return false;
    }
    // return str[str.length - 1] == 's';
}

// Afficher la sortie
console.log(check("enfants"));
console.log(check("filles"));
console.log(check("fille"));
console.log(check("enfant"));