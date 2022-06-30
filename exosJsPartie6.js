// Exercice 1:
// Créez une fonction qui prend une chaîne et renvoie TRUE ou FALSE, selon que les caractères sont en ordre ou non.
// Exemple:
// checkOrder("abc") ➞ true
// checkOrder("zyx") ➞ false
// checkOrder("123") ➞ true
// checkOrder("aabbcc") ➞ true

function checkOrder(str) {
	for (let i = 0; i < str.length; i++) {
        if (str[i] <= str[i + 1]){
            return true;
        }else{
            return false;
        }
    }
}

// Afficher la sortie
console.log(checkOrder("abc"));
console.log(checkOrder("zyx"));
console.log(checkOrder("123"));
console.log(checkOrder("aabbcc"));

// Exercice 2:
// Créez une fonction qui ajoute une sous-chaîne à la fin de chaque chaîne du tableau.
// Exemple:
// addEnd(["accept", "achet", "adapt"], "able") ➞ ["acceptable", "achetable", "adaptable"]
// addEnd(["aim", "act", "ard"], "ant") ➞ ["aimant", "actant", "ardant"]

function addEnd(tableau, fin) {
    let x = [];
	for (let i = 0; i < tableau.length; i++) {
        x.push(tableau[i] + fin);
    }
    return x;
}

// Afficher la sortie
console.log(addEnd(["accept", "achet", "adapt"], "able"));
console.log(addEnd(["aim", "act", "ard"], "ant"));

// Exercice 3:
// Créez une fonction qui vérifie si l’argument est un entier ou une chaîne. Renvoie « int » s’il s’agit d’un entier et « string » s’il s’agit d’une chaîne.
// Exemple:
// checkIntOrStr("WayToLearnX") ➞ "string"
// checkIntOrStr(1) ➞ "int"
// checkIntOrStr("250") ➞ "string"

function checkIntOrStr(x) {
	if (typeof(x) === typeof(1)){
        return "int";
    }else if (typeof(x) === typeof("1")){
        return "string";
    }
}

// Afficher la sortie
console.log(checkIntOrStr("WayToLearnX"));
console.log(checkIntOrStr(1));
console.log(checkIntOrStr("250"));

// Exercice 4:
// Créez une fonction qui prend une phrase et renvoie le nombre de mots.
// Exemple:
// count("Welcome to WayToLearnX") ➞ 3
// count("Hello World") ➞ 2
// count("I am going to my school") ➞ 6

function count(str) {
    let strSplit;
	let wordNbr;
    strSplit = str.split(" ");
    wordNbr = strSplit.length;
    return wordNbr;
}

// Afficher la sortie
console.log(count("Welcome to WayToLearnX"));
console.log(count("Hello World"));
console.log(count("I am going to my school"));

// Exercice 5:
// Créez une fonction récursive qui renvoie le total de tous les nombres impairs jusqu’à n(inclus). n sera donné comme un nombre impair.
// Exemple:
// sommeImpair(3) ➞ 4
// // 1 + 3 = 4
// sommeImpair(7) ➞ 16
// sommeImpair(59) ➞ 900

function sommeImpair(n) {
    let som = 0;
	for (let i = 0; i <= n; i++) {
        if (i % 2 === 1) {
            som += i;
        }
    }
    return som;
}

// Afficher la sortie
console.log(sommeImpair(3));
console.log(sommeImpair(7));
console.log(sommeImpair(59));

// Exercice 6:
// Créez une fonction qui renvoie TRUE si la chaîne passée en paramètre ne contient que des lettres majuscules ou minuscules.
// Exemple:
// isSameCase("WayToLearnX") ➞ false
// isSameCase("waytolearnx") ➞ true
// isSameCase("WAYTOLEARNX") ➞ true

function isSameCase(str) {
	if (str === str.toUpperCase() || str === str.toLowerCase()){
        return true;
    }else{
        return false;
    }
}

// Afficher la sortie
console.log(isSameCase("WayToLearnX"));
console.log(isSameCase("waytolearnx"));
console.log(isSameCase("WAYTOLEARNX"));

// Exercice 7:
// Créez une fonction pour multiplier toutes les valeurs d’un tableau par la longueur du tableau donné.
// Exemple:
// mulByLen([1, 1, 1]) ➞ [ 3, 3, 3 ]
// mulByLen([1, 2, 3]) ➞ [ 3, 6, 9 ]
// mulByLen([0, 0, 0, 0, 2]) ➞  [ 0, 0, 0, 0, 10 ]

function mulByLen(tab) {
    let product = [];
	for (let i = 0; i < tab.length; i++) {
        product.push(tab[i] * tab.length);
    }
    return product;
}

// Afficher la sortie
console.log(mulByLen([1, 1, 1]));
console.log(mulByLen([1, 2, 3]));
console.log(mulByLen([0, 0, 0, 0, 2]));

// Exercice 8:
// Créez une fonction pour supprimer toutes les valeurs nulles d’un tableau.
// Exemple:
// deleteNull(["Alex", null, "Emily", "Bob"]) ➞ ["Alex", "Emily", "Bob"]
// deleteNull([0, 1, null, 2, null, 3]) ➞ [0, 1, 2, 3]
// deleteNull([null, null, null]) ➞ []

function deleteNull(tab) {
    let newTab;
    newTab = tab.filter(function(f) { return f !== null });

    return newTab;
}

// Afficher la sortie
console.log(deleteNull(["Alex", null, "Emily", "Bob"]));
console.log(deleteNull([0, 1, null, 2, null, 3]));
console.log(deleteNull([null, null, null]));

// Exercice 9:
// Une année bissextile a un jour ajouté à février pour être synchronisée avec l’année saisonnière. Une année bissextile apparaît avec une fréquence régulière, déterminée par la règle ci-dessous:
// Une année doit être divisible par 400 ou divisible par 4 et non pas 100.
// Vous devez implémenter une fonction qui renvoie TRUE si c’est une année bissextile, ou FALSE si ce n’est pas le cas.
// Exemple:
// bissextile(2020) ➞ true
// // Divisé par 4 et non par 100.
// bissextile(1200) ➞ false
// // Divisé par 4, mais également divisé par 100.
// bissextile(2000) ➞ true
// // Divisé par 400.

function bissextile(year) {
	// if (year % 400 === 0 || year % 4 === 0 && year % 100 !== 0){
    //     return true;
    // }else{
    //     return false;
    // }
    return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0 ? true : false;
}

// Afficher la sortie
console.log(bissextile(2020));
console.log(bissextile(1400));
console.log(bissextile(2000));