// Exercice 1:
// Corrigez le code suivant (Erreur de syntaxe), pour calculer le carré.
// Exemple:
// carre(2) ➞ 4
// carre(4) ➞ 16

function carre(b) {
    return b * b;
}

// Afficher la sortie
console.log(carre(2));
console.log(carre(4));

// Exercice 2: < 100
// Avec deux nombres, retournez TRUE si la somme des deux nombres est inférieure à 100. Sinon, retournez FALSE.
// Exemple:
// check(5, 20) ➞ true
// // 5 + 20 = 25
// check(60, 55) ➞ false
// // 60 + 55 = 115

function check(a, b) {
	if (a + b < 100) {
        return true;
    }else{
        return false;
    }

}

// Afficher la sortie
console.log(check(5, 20));
console.log(check(60, 55));

// Exercice 3:
// Écrivez une fonction qui convertit les heures en secondes. Notez qu’il y a 60 secondes en une minute et 60 minutes en une heure.
// Exemple:
// heureSeconde(1) ➞ 3600
// heureSeconde(5) ➞ 18000

function heureSeconde(heure) {
	let seconds;
    let minutes;
    minutes = heure * 60;
    seconds = minutes * 60;
    return seconds;
}

// Afficher la sortie
console.log(heureSeconde(1));
console.log(heureSeconde(5));

// Exercice 4:
// Créez une fonction qui prend un nombre et renvoie TRUE s’il est inférieur ou égal à zéro, sinon retournez FALSE.
// Exemple:
// checkNbr(1) ➞ false
// checkNbr(-1) ➞ true
// checkNbr(0) ➞ true

function checkNbr(n) {
	if (n <= 0) {
        return true;
    }else{
        return false;
    }
}

// Afficher la sortie
console.log(checkNbr(1));
console.log(checkNbr(-1));
console.log(checkNbr(0));

// Exercice 5:
// Créez une fonction qui renvoie TRUE lorsque nbr1 est égal à nbr2; sinon retournez FALSE.
// Exemple:
// isEqual(3, 6) ➞ false
// isEqual(1, ‘1’) ➞ false
// isEqual(1, 1) ➞ true

function isEqual(nbr1, nbr2) {
	if (nbr1 === nbr2) {
        return true;
    }else{
        return false;
    }
}

// Afficher la sortie
console.log(isEqual(3, 6));
console.log(isEqual(1, '1'));
console.log(isEqual(1, 1));

// Exercice 6:
// Créez une fonction qui renvoie TRUE si un entier est divisible par 5, sinon retournez FALSE.
// Exemple:
// isDivisible(5) ➞ true
// isDivisible(10) ➞ true
// isDivisible(6) ➞ false

function isDivisible(n) {
	if (n % 5 === 0) {
        return true;
    }else{
        return false;
    }
}

// Afficher la sortie
console.log(isDivisible(5));
console.log(isDivisible(10));
console.log(isDivisible(6));

// Exercice 7:
// Écrivez une fonction qui prend deux entiers (heures, minutes) et les convertit en secondes.
// Exemple:
// hmTos(1, 10) ➞ 4200
// hmTos(0, 59) ➞ 3540
// hmTos(0, 0) ➞ 0

function hmTos(heure, minute) {
	let seconde;
    seconde = (heure * 3600) + (minute * 60);
    return seconde;
}

// Afficher la sortie
console.log(hmTos(1, 10));
console.log(hmTos(0, 59));
console.log(hmTos(0, 0));

// Exercice 8:
// Écrivez une fonction pour inverser un tableau. Attention: N’utilisez pas la méthode intégrée reverse();
// Exemple:
// reverseTab([1, 2, 3]) ➞ [3, 2, 1]
// reverseTab([1, 1, 2, 2, 3]) ➞ [3, 2, 2, 1, 1]

function reverseTab(tab) {
	let tabReverse = [];
    for (let i = tab.length -1; i > -1; i--) {
        tabReverse.push(tab[i]);
    }
    return tabReverse;
}

// Afficher la sortie
console.log(reverseTab([1, 2, 3]));
console.log(reverseTab([1, 1, 2, 2, 3]));

// Exercice 9:
// Créez une fonction qui prend un tableau et renvoie le dernier élément du tableau.
// Exemple:
// getLastElem([1, 2, 3, 4]) ➞ 4
// getLastElem([‘Alex’, ‘Bob’, ‘Emily’]) ➞ ‘Emily’

function getLastElem(tab) {
    let longTab;
    let lastIndex;

	longTab = tab.length;
    lastIndex = longTab - 1;

    return tab[lastIndex];
}

// Afficher la sortie
console.log(getLastElem([1, 2, 3, 4]));
console.log(getLastElem(["Alex", "Bob", "Emily"]));