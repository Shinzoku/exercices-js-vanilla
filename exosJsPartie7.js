// Exercice 1:
// Créez une fonction qui trouve tous les nombres pairs de 1 au nombre donné.
// Exemple:
// nbrPaire(6) ➞ [2, 4, 6]
// nbrPaire(4) ➞ [2, 4]
// nbrPaire(2) ➞ [2]

function nbrPaire(n) {
    let tabPaire = [];
	for (let i = 1; i <= n; i++) {
        // si i est paire
        if (i % 2 === 0){
            // envoie i dans le tableau
            tabPaire.push(i);
        }
    }
    return tabPaire;
}

// Afficher la sortie
console.log(nbrPaire(6));
console.log(nbrPaire(4));
console.log(nbrPaire(2));

// Exercice 2:
// Écrivez une fonction qui renvoie TRUE si tous les caractères d’une chaîne sont identiques, sinon renvoie FALSE.
// Exemple:
// isSame("bbbbbb") ➞ true
// isSame("abababab") ➞ false
// isSame("111111") ➞ true

function isSame(str) {
	let strSplit;
    strSplit = str.split("");
    for (let i = 0; i < strSplit.length; i++) {
        // si l'élément est strictement idendique pour chaque index
        if (strSplit[i] === strSplit[i + 1]) {
            return true;

        }else{
            return false;
        }
        // ou version condition ternaire
        // return strSplit[i] === strSplit[i + 1] ? true : false;
    }
}

// Afficher la sortie
console.log(isSame("bbbbbb"));
console.log(isSame("abababab"));
console.log(isSame("111111"));

// Exercice 3:
// Vous avez un tableau de nombre, transformez ce tableau en miroir.
// Exemple:
// miroir([1, 2, 3]) ➞ [1, 2, 3, 2, 1]
// miroir([9, 8, 7]) ➞ [9, 8, 7, 8, 9]
// miroir([10, 20]) ➞ [ 10, 20, 10 ]

function miroir(tab) {
    // recupère les valeurs de l'index 0 à la longueur - 1 puis on inverse le resultat.
    let rev = tab.slice(0,tab.length - 1).reverse();

    // retourne la concaténation des deux tableaux
	return tab.concat(rev);
}

// Afficher la sortie
console.log(miroir([1, 2, 3]));
console.log(miroir([9, 8, 7]));
console.log(miroir([10, 20]));

// Exercice 4:
// Écrivez une fonction récursive qui trouve la somme des n premiers nombres naturels.
// Exemple:
// somme(3) ➞ 6
// // 1 + 2 + 3 = 6
// somme(2) ➞ 3
// somme(10) ➞ 55

function somme(n) {
    let som = 0;
	for (let i = 1; i <= n; i++) {
        som += i;
    }
    return som;
}

// Afficher la sortie
console.log(somme(3));
console.log(somme(2));
console.log(somme(10));

// Exercice 5:
// Créez une fonction pour extraire le nom du catégorie de son URL.
// Exemple:
// getCategory("https://waytolearnx.com/html/") ➞ "html"
// getCategory("https://waytolearnx.com/css/") ➞ "css"
// getCategory("https://waytolearnx.com/javascript/") ➞ "javascript"

function getCategory(url) {
	let cat = url.split("/")[3]; // revoie le 4ème élément du tableau
    return cat;
}

// Afficher la sortie
console.log(getCategory("https://waytolearnx.com/html/"));
console.log(getCategory("https://waytolearnx.com/css/"));
console.log(getCategory("https://waytolearnx.com/javascript/"));

// Exercice 6:
// Écrivez une fonction qui renvoie TRUE si un objet est vide, sinon renvoie FALSE.
// Exemple:
// isObjEmpty({ a: 1, b: 2 }) ➞ false
// isObjEmpty({ a: 1 }) ➞ false
// isObjEmpty({}) ➞ true

function isObjEmpty(obj) {
    // Solution avec la bibliothèque Underscore.js (Lien ajouté dans l'index.html)
	// return "Is Obj Empty? : ", _.isEmpty(obj);
    return !Object.keys(obj).length;
}

// Afficher la sortie
console.log(isObjEmpty({ a: 1, b: 2 }));
console.log(isObjEmpty({ a: 1 }));
console.log(isObjEmpty({}));

// Exercice 7:
// Écrivez une fonction qui récupère les n derniers éléments d’un tableau.
// Exemple:
// lastNitem([8, 1, 5, 2, 4, 9], 3) ➞ [2, 4, 9]
// lastNitem([1, 2, 3], 1) ➞ [3]
// lastNitem([1, 2, 3, 4], 10) ➞ "invalide"
// lastNitem([1, 2, 3, 4], 0) ➞ []

function lastNitem(t, n) {
	let newTab = [];
    for (let i = 0; i < n; i++) {
        if (n > t.length){
            return "invalide";
        }else{
            newTab.push(t.pop());
        }
    }
    return newTab;
    // ou condition ternaire
    // return n <= t.length ? t.slice(t.length-n, t.length) : "invalide";
}

// Afficher la sortie
console.log(lastNitem([8, 1, 5, 2, 4, 9], 3));
console.log(lastNitem([1, 2, 3], 1));
console.log(lastNitem([1, 2, 3, 4], 10));
console.log(lastNitem([1, 2, 3, 4], 0));

// Exercice 8:
// Écrivez une fonction qui supprime toutes les caractères spéciaux dans une chaîne.
// Exemple:
// removeSpecialChar("@W*-a?;+y!°T-8o_&L?e!=r%$n<X") ➞ "WayToLearnX"
// removeSpecialChar(",A@[L]?e*$!x") ➞ "ALex"
// removeSpecialChar("$*;H[!e&}l]l@{^.o") ➞ "Hello"

function removeSpecialChar(str) {
    // Ce que j'ai fait
	return str.replace(/[^\w\s]|[-0-9]|[_]/gi, '')

    // Solution plus courte
    // return str.replace(/[^a-z]/gi, '');
}

// Afficher la sortie
console.log(removeSpecialChar("@W*-a?;+y!°T-8o_&L?e!=r%$n<X"));
console.log(removeSpecialChar(",A@[L]?e*$!x"));
console.log(removeSpecialChar("$*;H[!e&}l]l@{^.o"));

// Exercice 9:
// Écrivez une fonction qui renvoie TRUE si un nombre est un palindrome.
// Exemple:
// checkPalindrome(212) ➞ true
// checkPalindrome(123) ➞ false
// checkPalindrome(75257) ➞ true

function checkPalindrome(n) {
    // transforme n en chaine de caractère, le divise et le place dans un tableau,
    // pour ensuite l'inverser, l'assembler en chaine de caractère et le transformer en nombre entier.
    let nMirror = parseInt(n.toString().split('').reverse().join(''));

    // compare les deux valeurs et retourne la valeur vrai ou faux
	return n === nMirror ? true : false;
}

// Afficher la sortie
console.log(checkPalindrome(212));
console.log(checkPalindrome(123));
console.log(checkPalindrome(75257));