// Exercice 1:
// Créez une fonction qui prend deux nombres comme arguments et retourne leur somme.
// Exemple:
// addition(1, 2) ➞ 3
// addition(-2, -4) ➞ -6

function addition(a, b) {
    let c;

    c = a + b;

    return c;
}

console.log(addition(5,9));

// Exercice 2:
// Écrivez une fonction qui prend un nombre entier de minutes et le convertit en secondes.
// Exemple:
// minuteToSecond(4) ➞ 240
// minuteToSecond(3) ➞ 180

function minuteToSecond(mins) {
    let sec;

    sec = mins * 60;

    return sec;
}

console.log(minuteToSecond(5));

// Exercice 3:
// Créez une fonction qui prend un nombre en argument, incrémente le nombre +1 et renvoie le résultat.
// Exemple:
// increment(1) ➞ 2
// increment(4) ➞ 5

function increment(nbr) {
    nbr += 1;

    return nbr;
}

console.log(increment(10));

// Exercice 4:
// Écrivez une fonction qui prend la base et la hauteur d’un triangle et retourne sa surface. Notez que la surface d’un triangle est: (base * hauteur) / 2
// Exemple:
// getSurface(8, 2) ➞ 8
// getSurface(7, 3) ➞ 10.5

function getSurface(base, hauteur) {
    let aire;

    aire = (base * hauteur) / 2;

    return aire;
}

console.log(getSurface(8, 2));

// Exercice 5:
// Écrivez un programme JavaScript pour inverser une chaîne de caractères.
// Exemple:
// strReverse(‘WayToLearnX’) ➞ XnraeLoTya
// strReverse(‘Hello’) ➞ olleH

function strReverse(str) {
    let strSplit;
    let reverseStr;
    let strJoint;

    strSplit = str.split('');
    reverseStr = strSplit.reverse();
    strJoint = reverseStr.join('');

    return strJoint;
}

console.log(strReverse("Hello !"));

// Exercice 6:
// Écrivez un programme JavaScript pour trouver le plus grand des trois entiers donnés.
// Exemple:
// getMax(5, 9, 1) ➞ 9
// getMax(2, 3, 10) ➞ 10

function getMax(a, b, c) {
    if (a > b && a > c) {
        console.log(a)
    }else if (b > a && b > c) {
        console.log(b);
    }else{
        console.log(c)
    }
}

getMax(2, 5, 6);

// Exercice 7:
// Créez une fonction qui prend un tableau et renvoie le premier élément. Notez que le premier élément d’un tableau commence toujours par l’index 0.
// Exemple:
// getFirst([1, 2, 3]) ➞ 1
// getFirst([50, 60, 70]) ➞ 50

function getFirst(tab) {
    let firstItem;

    firstItem = tab[0];

    return firstItem;
}

console.log(getFirst([50, 60, 70]));

// Exercice 8:
// Écrivez un programme JavaScript pour récupérer l’URL d’un site Web
// // Écrivez votre code ici

let url = document.URL;
console.log(url);

// Exercice 9:
// Écrivez un programme JavaScript pour renvoyer le reste de deux nombres. Il existe un seul opérateur en JavaScript, capable de fournir le reste d’une division. Deux nombres sont transmis comme paramètres. Le premier paramètre divisé par le deuxième paramètre.
// Exemple:
// resteDiv(1, 3) ➞ 1
// resteDiv(2, 4) ➞ 2
// resteDiv(3, 3) ➞ 0

function resteDiv(a, b) {
    let c;
    
    c = a % b;
    
    return c;
}

console.log(resteDiv(3, 3));
