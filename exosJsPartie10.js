// Exercice 1:
// Créez une fonction qui accepte deux paramètres et, si les deux paramètres sont des chaînes, additionnez-les comme s’ils étaient des entiers ou si les deux paramètres sont des entiers, concaténez-les.
// Exemple:
// add("2", "3") ➞ 5
// add(2, 3) ➞ "23"
// add("2", 3) ➞ null

function add(a, b) {
    if (a === a.toString() && b === b.toString()) {
        return parseInt(a) + parseInt(b);
    } else if (a === parseInt(a) && b === parseInt(b)) {
        return a.toString() + b.toString();
    } else {
        return null;
    }
}

// Afficher la sortie
console.log(add("2", "3"));
console.log(add(2, 3));
console.log(add("2", 3));

// Exercice 2:
// Créez une fonction qui renvoie le produit de tous les entiers impairs dans un tableau.
// Exemple:
// prodImp([1, 2, 3, 4]) ➞ 3
// prodImp([3, 6, 8, 5, 5, 7]) ➞ 525
// prodImp([1, 0, 1, 0, 1, 0]) ➞ 1

function prodImp(tab) {
    let produit = 1;
    for (let i = 0; i < tab.length; i++) {
        if (tab[i] % 2 === 1 && tab[i] !== 0) {
            produit *= tab[i];
        }
    }
    return produit;
}

// Afficher la sortie
console.log(prodImp([1, 2, 3, 4]));
console.log(prodImp([3, 6, 8, 5, 5, 7]));
console.log(prodImp([1, 0, 1, 0, 1, 0]));

// Exercice 3:
// Créez une fonction qui répète chaque caractère dans une chaîne n fois.
// Exemple:
// repeatChr("alex", 3) ➞ "aaallleeexxx"
// repeatChr("waytolearnx", 1) ➞ "waytolearnx"
// repeatChr("bob", 2) ➞ "bboobb"

function repeatChr(str, n) {
    let strSplit = str.split('');
    let tabTmp = [];
    for (let i = 0; i < strSplit.length; i++) {
        tabTmp.push(strSplit[i].repeat(n));
    }
    return tabTmp.join('');
}

// Afficher la sortie
console.log(repeatChr("alex", 3));
console.log(repeatChr("waytolearnx", 1));
console.log(repeatChr("bob", 2));

// Exercice 4:
// Vous avez un tableau avec des mots aléatoires, mais votre programme n’accepte pas les mots commençant par la lettre majuscule « Z ». Supprimez les mots non acceptés et renvoyez le nouveau tableau.
// Exemple:
// filterWords(["Bob", "Alex", "Zoello"]) ➞ ["Bob", "Alex"]
// filterWords(["Lion", "Zebra", "Gazelle"]) ➞ ["Lion", Gazelle"]
// filterWords(["Mercedes", "Bmw", "Audi"]) ➞ ["Mercedes", "Bmw", "Audi"]

function filterWords(tab) {
    return tab.filter(element => element.charAt(0) !== "Z");
}

// Afficher la sortie
console.log(filterWords(["Bob", "Alex", "Zoello"]));
console.log(filterWords(["Lion", "Zebra", "Gazelle"]));
console.log(filterWords(["Mercedes", "Bmw", "Audi"]));

// Exercice 5:
// Écrivez une fonction qui prend un tableau d’éléments et ne renvoie que les entiers.
// Exemple:
// getInt([1, 2, "3", "4", "5", 6]) ➞ [1, 2, 6]
// getInt(["Vache", 20, "Cheval", 1, "Poule", 50]) ➞ [20, 1, 1]
// getInt(["Str", false, 5.56, 6]) ➞ [6]

function getInt(tab) {
    return tab.filter(element => element === parseInt(element));
    // return tab.filter(Number.isInteger);
}

// Afficher la sortie
console.log(getInt([1, 2, "3", "4", "5", 6]));
console.log(getInt(["Vache", 20, "Cheval", 1, "Poule", 50]));
console.log(getInt(["Str", false, 5.56, 6]));

// Exercice 6:
// Créez une fonction qui convertit deux tableaux de coordonnées x et y en un tableau de coordonnées (x, y).
// Exemple:
// convert([0, 2, 5], [8, 6, 9]) ➞ [ [ 0, 8 ], [ 2, 6 ], [ 5, 9 ] ]
// convert([2, 2], [4, 8]) ➞ [ [ 2, 4 ], [ 2, 8 ] ]
// convert([1], [2]) ➞ [ [ 1, 2 ] ]

function convert(tabX, tabY) {
    let tab = [];
    let tmp;
    for (let i = 0; i <= tabX.length; i++) {
        for (let j = 0; j <= tabY.length; j++) {
            tmp = [tabX.shift(), tabY.shift()];
            tab.push(tmp);
        }
    }
    return tab;
}

// Afficher la sortie
console.log(convert([0, 2, 5], [8, 6, 9]));
console.log(convert([2, 2], [4, 8]));
console.log(convert([1], [2]));

// Exercice 7:
// Créez une fonction qui remplace toutes les voyelles d’une chaîne par un caractère spécifié.
// Exemple:
// replaceVoyel("voyelle", "$") ➞ "v$y$ll$"
// replaceVoyel("boulevard", "?") ➞ "b??l?v?rd"
// replaceVoyel("bouche", "@") ➞ "b@@ch@"

function replaceVoyel(str, c) {
    return str.replace(/[aeiouy]/g, c);
}

// Afficher la sortie
console.log(replaceVoyel("voyelle", "$"));
console.log(replaceVoyel("boulevard", "?"));
console.log(replaceVoyel("bouche", "@"));

// Exercice 8:
// Créez une fonction pour calculer le déterminant d’une matrice 2 x 2.
// [[a, b], 
//  [c, d]]
// Le déterminant de la matrice ci-dessus est: ad – bc:
// Exemple:
// det([
//   [1, 1],
//   [2, 3]
// ]) ➞ 1
// det([
//   [6, 4],
//   [2, 3]
// ]) ➞ 10
// det([
//   [2, 4],
//   [4, 2]
// ]) ➞ -12

function det(matrice) {
    return matrice[0][0] * matrice[1][1] - matrice[0][1] * matrice[1][0];
}

// Afficher la sortie
console.log(det([
    [1, 1],
    [2, 3]
]));
console.log(det([
    [6, 4],
    [2, 3]
]));
console.log(det([
    [2, 4],
    [4, 2]
]));

// Exercice 9:
// Écrivez une fonction qui renvoie l’extension des fichiers.
// Exemple:
// getExtension(["file.html", "file.js"]) ➞ ["html", "js"]
// getExtension(["image.jpg", "image.png", "image.gif"]) ➞ ["jpg", "png", "gif"]
// getExtension(["file.pdf", "file.txt", "file.docx"]) ➞ ["pdf", "txt", "docx"]

function getExtension(files) {
    return files.map(file => file.split('.').pop());
}

// Afficher la sortie
console.log(getExtension(["file.html", "file.js"]));
console.log(getExtension(["image.jpg", "image.png", "image.gif"]));
console.log(getExtension(["file.pdf", "file.txt", "file.docx"]));