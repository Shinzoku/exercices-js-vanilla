// Exercice 1:
// Créez une fonction qui vérifier l’égalité de deux paramètres a et b. La valeur et le type de paramètres doivent être testés afin d’avoir une égalité. La fonction doit renvoyer TRUE si les paramètres sont égaux et FALSE s’ils sont différents.
// Exemple:
// checkEq(5, 5) ➞ true
// // number = number: leur type et leur valeur sont égaux
// checkEq(5, 0) ➞ false
// // number = number: leur type sont égaux et leur valeur sont différent
// checkEq(5, false) ➞ false
// // number <> boolean: leur type est différent
// checkEq(5, ‘5’) ➞ false
// // number <> string: leur type est différent

function checkEq(a, b) {
    if (a === b) {
        return true;
    }else{
        return false;
    }
}

// Afficher la sortie
console.log(checkEq(5, 5));
console.log(checkEq(5, 0));
console.log(checkEq(5, false));
console.log(checkEq(5, "5"));

// Exercice 2:
// Créez une fonction qui renvoie TRUE si une chaîne est vide et sinon renvoie FALSE.
// Exemple:
// isEmpty("1") ➞ false
// isEmpty("WayToLearnX") ➞ false
// isEmpty("  ") ➞ false
// isEmpty("") ➞ true

function isEmpty(str) {
	if (str === null) {
        return true;
    }else{
        return false;
    }
}

// Afficher la sortie
console.log(isEmpty("1"));
console.log(isEmpty("WayToLearnX"));
console.log(isEmpty("  "));
console.log(isEmpty(""));

// Exercice 3: Concaténer deux chaînes en une seule chaîne
// Avec deux chaînes, str1 et str2, renvoyez une seule chaîne au format « str1 | str2 ».
// Exemple:
// concatStr("True", "False") ➞ "True | False"
// concatStr("On", "Off") ➞ "On | Off"
// concatStr("A", "B") ➞ "A | B"

function concatStr(str1, str2) {
	let str;
    str = str1 + " | " + str2;
    return str;
}

// Afficher la sortie
console.log(concatStr("True", "False"));
console.log(concatStr("On", "Off"));
console.log(concatStr("A", "B"));

// Exercice 4:
// Créez une fonction qui prend un nom et renvoie un message d’accueil sous la forme d’une chaîne. N’utilisez pas une fonction normale mais utilisez une fonction fléchée(Arrow)
// Exemple:
// msg("Thomas") ➞ "Hello Thomas, Welcome to WayToLearnX!"
// msg("Alex") ➞ "Hello Alex, Welcome to WayToLearnX!"
// msg("Emily") ➞ "Hello Emily, Welcome to WayToLearnX!"

const msg = name => { return "Hello " + name + ", Welcome to WayToLearnX!";}

// Afficher la sortie
console.log(msg("Thomas"));
console.log(msg("Alex"));
console.log(msg("Emily"));

// Exercice 5:
// Écrivez une fonction qui renvoie la longueur d’une chaîne. Utiliser une fonction récursive.
// Exemple:
// size("alex") ➞ 5
// size("x") ➞ 1
// size("") ➞ 0

function size(str) {
    return str.length;
}

// Afficher la sortie
console.log(size("alex"));
console.log(size("x"));
console.log(size(""));

// Exercice 6:
// Créez une fonction qui prend deux chaînes str1 et str2 comme arguments et renvoie TRUE si le nombre total de caractères dans la première chaîne est égal au nombre total de caractères dans la deuxième chaîne sinon renvoie FALSE.
// Exemple:
// compareSize("AA", "BB") ➞ true
// compareSize("123", "1") ➞ false
// compareSize("Ali", "Bob") ➞ true

function compareSize(str1, str2) {
	if (str1.length === str2.length) {
        return true;
    }else {
        return false;
    }
}

// Afficher la sortie
console.log(compareSize("AA", "BB"));
console.log(compareSize("123", "1"));
console.log(compareSize("Ali", "Bob"));

// Exercice 7:
// Créez une fonction qui prend la hauteur et la largeur et trouve le périmètre d’un rectangle.
// Exemple:
// getPerimeter(2, 6) ➞ 16
// getPerimeter(3, 10) ➞ 26
// getPerimeter(1, 5) ➞ 12

function getPerimeter(height, width) {
	let peri;
    peri = 2 * (height + width);
    return peri;
}

// Afficher la sortie
console.log(getPerimeter(2, 6));
console.log(getPerimeter(3, 10));
console.log(getPerimeter(1, 5));

// Exercice 8: Le problème du fermier
// Dans ce défi, un fermier vous demande de lui dire combien de pattes peuvent être comptées parmi tous ses animaux. Il y a trois espèces:
//     poulets = 2 pattes
//     vaches = 4 pattes
//     chevaux = 4 pattes
// Le fermier a compté ses animaux et il vous donne un sous-total pour chaque espèce. Vous devez implémenter une fonction qui renvoie le nombre total de pattes de tous les animaux.
// L’ordre des animaux transmis à la fonction est nbrsPattes(poulets, vaches, chevaux).
// Exemple:
// nbrsPattes(1, 4, 2) ➞ 26
// nbrsPattes(2, 2, 2) ➞ 20
// nbrsPattes(2, 0, 3) ➞ 16
// N’oubliez pas que le fermier veut connaître le nombre total de pattes et non pas le nombre total d’animaux.

function nbrsPattes(poulets, vaches, chevaux) {
	let pouletPattes = 2;
    let vachePattes = 4;
    let chevalPattes = 4;
    let nbrsPattes;
    nbrsPattes = (poulets * pouletPattes) + (vaches * vachePattes) + (chevaux * chevalPattes);
    return nbrsPattes;
}

// Afficher la sortie
console.log(nbrsPattes(1, 4, 2));
console.log(nbrsPattes(2, 2, 2));
console.log(nbrsPattes(2, 0, 3));

// Exercice 9: Nombre paire ou impaire
// Créez une fonction qui prend un nombre comme argument et renvoie « pair » pour les nombres pairs et « impair » pour les nombres impairs.
// Exemple:
// check(2) ➞ "pair"
// check(7) ➞ "impair"
// check(22) ➞ "pair"

function check(n) {
	if (n % 2 === 0) {
        return "pair";
    }else{
        return "impair";
    }
}

// Afficher la sortie
console.log(check(2));
console.log(check(7));
console.log(check(22));