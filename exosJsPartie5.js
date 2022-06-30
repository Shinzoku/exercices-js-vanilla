// Exercice 1:
// Écrivez une fonction qui prend un entier et:
//     Si le nombre est un multiple de 3, retournez « Hello ».
//     Si le nombre est un multiple de 5, retournez « World ».
//     Si le nombre est un multiple de 3 et de 5, retournez « Hello World ».
// Exemple:
// checkNbr(3) ➞ "Hello"
// checkNbr(5) ➞ "World"
// checkNbr(15) ➞ "Hello World"

function checkNbr(n) {
	if (n % 3 === 0 && n % 5 === 0){
        return "Hello World";
    }else if (n % 5 === 0){
        return "World";
    }else if (n % 3 === 0){
        return "Hello";
    }
    // ou return n % 15 === 0 ? "Hello World" : n % 3 === 0 ? "Hello" : "World";
}

// Afficher la sortie
console.log(checkNbr(3));
console.log(checkNbr(5));
console.log(checkNbr(15));

// Exercice 2:
// Écrivez l’expression régulière qui révèle le message caché. Vous devez supprimer tous les nombres pour révéler le message. Utilisez la classe de caractères \D dans votre expression.

var str = "242Welcome23 45to344 254324WayToLearnX!";
var patt = /\D/g;
var result = str.match(patt);

console.log(result.join(""));

// Exercice 3:
// Créez une fonction qui prend un tableau avec des nombres et retourne un tableau avec les éléments multipliés par deux.
// Exemple:
// tabX2([1, 2, 3]) ➞ [ 2, 4, 6 ]
// tabX2([5, 10, 20]) ➞ [ 10, 20, 40 ]
// tabX2([100, 200, 300]) ➞ [ 200, 400, 600 ]

function tabX2(tab) {
    let tabX2 = [];

	for (let i = 0; i < tab.length; i++) {
        let result;

        result = tab[i] * 2;
        tabX2.push(result);
    }
    return tabX2;
    // ou return tab.map(i => i * 2);
}

// Afficher la sortie
console.log(tabX2([1, 2, 3]));
console.log(tabX2([5, 10, 20]));
console.log(tabX2([100, 200, 300]));

// Exercice 4:
// Créez une fonction qui prend trois nombres comme arguments et renvoie TRUE si c’est un triangle, sinon renvoie FALSE.
// Exemple:
// isTriangle(2, 3, 4) ➞ true
// isTriangle(2, 4, 5) ➞ true
// isTriangle(8, 2, 1) ➞ false
// Notez que a, b et, c sont les longueurs des côtés du triangle.

function isTriangle(a, b, c) {
	if (a + b > c && a + c > b && c + b > a){
        return true;
    }else{
        return false;
    }
}

// Afficher la sortie
console.log(isTriangle(2, 3, 4));
console.log(isTriangle(2, 4, 5));
console.log(isTriangle(8, 2, 1));

// Exercice 5:
// Créez une fonction qui renvoie la valeur ASCII du caractère transmis.
// Exemple:
// charToAscii("A") ➞ 65
// charToAscii("a") ➞ 97
// charToAscii("+") ➞ 43

function charToAscii(c) {
	let toAscii;
    toAscii = c.charCodeAt(0);
    return toAscii;
}

// Afficher la sortie
console.log(charToAscii("A"));
console.log(charToAscii("a"));
console.log(charToAscii("+"));

// Exercice 6:
// Avec une fraction sous forme d’une chaîne, indiquez si elle est supérieure ou non à 1 lorsqu’elle est évaluée.
// Exemple:
// FracSup1("2/2") ➞ false
// FracSup1("8/2") ➞ true
// FracSup1("1/2") ➞ false

function FracSup1(f) {
    if (eval(f) > 1) {
        return true;
    }else{
        return false;
    }
}

// Afficher la sortie
console.log(FracSup1("2/2"));
console.log(FracSup1("8/2"));
console.log(FracSup1("1/2"));

// Exercice 7:
// Créez une fonction qui prend un tableau et renvoie la somme de tous les nombres du tableau.
// Exemple:
// sum([1, 1, 1]) ➞ 3
// sum([1, 2, 3]) ➞ 6
// sum([-2, 2, 1]) ➞ 1

function sum(tab) {
    let som = 0;
	for (let i = 0; i < tab.length; i++) {
        som += tab[i];
    }
    return som;
}

// Afficher la sortie
console.log(sum([1, 1, 1]));
console.log(sum([1, 2, 3]));
console.log(sum([-2, 2, 1]));

// Exercice 8:
// Créez une fonction qui prend un tableau de mots et le transforme en un tableau de longueur de chaque mot.
// Exemple:
// countStr(["A", "B", "C"]) ➞ [1, 1, 1]
// countStr(["Welcome", "To", "WayToLearnX"]) ➞ [7, 2, 11]
// countStr(["Bob", "Ali", "Thomas"]) ➞ [3, 3, 6]

function countStr(tab) {
    let elementLength = [];
    let element;
	for (let i = 0; i < tab.length; i++) {
        element = String(tab[i]);
        elementLength.push(element.length);
    }
    return elementLength;
    // ou return tab.map(str => str.length);
}

// Afficher la sortie
console.log(countStr(["A", "B", "C"]));
console.log(countStr(["Welcome", "To", "WayToLearnX"]));
console.log(countStr(["Bob", "Ali", "Thomas"]));

// Exercice 9:
// Créez une fonction qui renvoie le nombre de syllabes dans une chaîne.
// Exemple:
// nbrOfSyllables("SOSOSOSO") ➞ 4
// nbrOfSyllables("HAHAHAHAHA") ➞ 5
// nbrOfSyllables("RIRIRIRIRIRIRIRIRIRI") ➞ 10

function nbrOfSyllables(str) {
	let tabTmp = [];
    let nbrSyllables;
    for (let i = 0; i < str.length / 2; i++) {
        tabTmp.push(str.charAt(0)+str.charAt(1).split(''));
        nbrSyllables = tabTmp.length;
    }
    return nbrSyllables;
    // ou return str.length/2;
}

// Afficher la sortie
console.log(nbrOfSyllables("SOSOSOSO"));
console.log(nbrOfSyllables("HAHAHAHAHA"));
console.log(nbrOfSyllables("RIRIRIRIRIRIRIRIRIRI"));