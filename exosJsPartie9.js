// Exercice 1:
// Un palindrome est un mot qui s’écrit de la même manière après l’inversion de ce dernier. ‘ada’ est un palindrome. Écrivez une méthode qui vérifie si une chaîne est un palindrome.
// Exemple:
// isPalindrome("NON") ➞ true
// isPalindrome("TOTO") ➞ false
// isPalindrome("SOS") ➞ true
// isPalindrome("SELLES") ➞ true

function isPalindrome(str) {
    return str === str.split('').reverse().join('') ? true : false;
}

// Afficher la sortie
console.log(isPalindrome("NON"));
console.log(isPalindrome("TOTO"));
console.log(isPalindrome("SOS"));
console.log(isPalindrome("SELLES"));

// Exercice 2:
// Écrivez une fonction qui prend deux nombres et renvoie s’ils doivent être additionnés, soustraits, multipliés ou divisés pour obtenir 8. Si aucune des opérations ne peut donner 8, retournez NULL.
// Exemple:
// operation(4, 4) ➞ "additionner"
// operation(10, 2) ➞ "soustraire"
// operation(32, 4) ➞ "diviser"
// operation(6, 6) ➞ NULL

function operation(n1, n2) {
    if (n1 + n2 === 8) {
        return "additionner"
    } else if (n1 - n2 === 8) {
        return "soustraire"
    } else if (n1 / n2 === 8) {
        return "diviser"
    } else {
        return "NULL"
    }
}

// Afficher la sortie
console.log(operation(4, 4));
console.log(operation(10, 2));
console.log(operation(32, 4));
console.log(operation(6, 6));

// Exercice 3:
// Vous avez embauché trois commerciales et vous les payez. Créez une fonction qui prend trois nombres (le salaire horaire de chaque commerciale) et renvoie la différence entre le commerciale le mieux payé et le moins payé.
// Exemple:
// getDiff(200, 10, 90) ➞ 190
// //200 - 10 = 190
// getDiff(56, 29, 16) ➞ 40
// getDiff(2, 10, 5) ➞ 8

function getDiff(c1, c2, c3) {
    let tab = [];
    tab.push(c1, c2, c3);
    let valMin = Math.min(...tab);
    let valMax = Math.max(...tab);
    return valMax - valMin;
    // ou
    // return Math.max(...arguments) - Math.min(...arguments)
}

// Afficher la sortie
console.log(getDiff(200, 10, 90));
console.log(getDiff(56, 29, 16));
console.log(getDiff(2, 10, 5));

// Exercice 4:
// Vous avez un tableau de nombres, créez une fonction qui renvoie le même tableau mais avec l’index de chaque élément dans le tableau ajouté à lui-même. Cela signifie que vous ajoutez 0 au nombre à l’index 0, ajoutez 1 au nombre à l’index 1, ajoutez 2 au nombre à l’index 2 etc …
// Exemple:
// addIndexeToElem([0, 0, 0, 0]) ➞ [0, 1, 2, 3]
// addIndexeToElem([2, 1, 0, 1]) ➞ [2, 2, 2, 4]
// addIndexeToElem([9, 8, 7, 6]) ➞ [9, 9, 9, 9]

function addIndexeToElem(tab) {
    let newTab = [];
    for (let i = 0; i < tab.length; i++) {
        newTab.push(tab[i] + i);
    }
    return newTab;
    // ou
    // return tab.map((val,i) => val + i);
}

// Afficher la sortie
console.log(addIndexeToElem([0, 0, 0, 0]));
console.log(addIndexeToElem([2, 1, 0, 1]));
console.log(addIndexeToElem([9, 8, 7, 6]));

// Exercice 5:
// Créez une fonction qui prend une chaîne et renvoie une chaîne avec des espaces entre tous les caractères.
// Exemple:
// addSpace("waytolearnx") ➞ "w a y t o l e a r n x"
// addSpace("Hello BoB") ➞ "H e l l o  B o B"
// addSpace("Thank you") ➞ "T h a n k  y o u"

function addSpace(str) {
    return str.split("").join(" ");
}

// Afficher la sortie
console.log(addSpace("waytolearnx"));
console.log(addSpace("Hello BoB"));
console.log(addSpace("Thank you"));

// Exercice 6:
// Vous avez un tableau de boissons, chaque boisson étant un objet avec deux propriétés: nom et prix. Créez une fonction qui a le tableau des boissons comme argument et retournez l’objet boissons trié par prix dans l’ordre croissant.
// Supposons que le tableau d’objets de boisson suivant doit être trié:
// boissons = [
//   {nom: "citron", prix: 50},
//   {nom: "menthe", prix: 35},
//   {nom: "fraise", prix: 5}
// ]
// La sortie de l’objet boissons triées sera:
// Exemple:
// sortByPrice(boissons) ➞ [
// 	{nom: "fraise", prix: 5}, 
// 	{nom: "menthe", prix: 35},
// 	{nom: "citron", prix: 50}

function sortByPrice(boissons) {
    return boissons.sort((a, b) => a - b);
}

// créer le tableau des boissons
boissons = [
    { nom: "citron", prix: 50 },
    { nom: "menthe", prix: 35 },
    { nom: "fraise", prix: 5 }
]

// Afficher la sortie
console.log(sortByPrice(boissons));

// Exercice 7:
// Un nombre uniforme est un nombre positif composé du même chiffre.
// Créez une fonction qui prend un entier et retourne s’il s’agit d’un nombre uniforme ou non.
// Exemple:
// isUniforme(444) ➞ true
// isUniforme(-444) ➞ false
// isUniforme(0) ➞ true

function isUniforme(n) {
    return Math.sign(parseInt(n)) === 1 || Math.sign(parseInt(n)) === 0 ? true : false;
    // ou
    // return new Set('' + n).size === 1;
}

// Afficher la sortie
console.log(isUniforme(444));
console.log(isUniforme(-444));
console.log(isUniforme(0));

// Exercice 8:
// Avec deux chaînes, créez une fonction qui renvoie le nombre total de caractères uniques de la chaîne concaténée.
// Exemple:
// uniqueChr("attention", "intention") ➞ 6  
// // "attentionintention" a 6 caractères uniques:
// // "a", "t", "e", "n", "i", "o"
// uniqueChr("plus", "tous") ➞ 6 
// uniqueChr("bis", "lis") ➞ 4

function uniqueChr(s1, s2) {
    let s = s1 + s2;
    let uniq = "";

    for (let i = 0; i < s.length; i++) {
        // Vérifie si 'uniq' contient le caractère
        if (uniq.includes(s[i]) === false) {
            // Si pas dans 'uniq', concatène le caractère avec 'uniq'
            uniq += s[i]
        }
    }
    return uniq.length;
}

// Afficher la sortie
console.log(uniqueChr("attention", "intention"));
console.log(uniqueChr("plus", "tous"));
console.log(uniqueChr("bis", "lis"));

// Exercice 9:
// Écrivez une fonction récursive qui trouve la somme d’un tableau.
// Exemple:
// somme([1, 2, 3]) ➞ 6
// somme([1, 2]) ➞ 3
// somme([]) ➞ 0

function somme(tab) {
    let som = 0;
    if (tab.length === 0) {
        return 0;
    } else {
        for (let i = 0; i < tab.length; i++) {
            som += tab[i];
        }
    }
    return som;
}

// Afficher la sortie
console.log(somme([1, 2, 3]));
console.log(somme([1, 2]));
console.log(somme([]));