console.log("salut salut !!!!");
// A. Créez 2 nombre, x et y, et les  soustraires

let x = 40;
let y = 15;
let resultat = x - y;
console.log(resultat);

// ----------------------------------------------------------------------------
let shalom = "bonjour bordel point js";

console.log("-------- EXO 1--------");
// Rajouter € à la fin de prix

function euro(prix) {
    console.log(prix, "€");
}

euro(24);
euro(1);

// ----------------------------------------------------------------------------
console.log("-------- EXO 2--------");
// addition de 3 chiffres

function add3Numbers(x, y, z) {
    let somme = x + y + z;
    console.log(somme);
}


// ----------------------------------------------------------------------------
console.log("-------- EXO 3--------");
// calculer le prix après la TVA ( ca fait beaucoup 20%, à calculer)

function tva(a) {
    return a * 0.8;
};

console.log(tva(10));

// ----------------------------------------------------------------------------
console.log("-------- EXO 4--------");
// calculer majorité
function majeur(age) {
    if (age >= 18) {
        console.log("majeur");
    } else {
        console.log("mineur");
    }
}

// Données de TEST
majeur(12);
majeur(55);
majeur(18);

// ----------------------------------------------------------------------------
console.log("-------- EXO 5--------");
// retourner un booléen relatif a la majorité de la personne
function isMajeurCheck(age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}

console.log(isMajeurCheck(19));

// ----------------------------------------------------------------------------
console.log("-------- EXO 6--------");
// calculer majorité mais demander une carte d'identité si la personne à entre 18 et 25 ans ( il paraît vraiment jeune )
function isMajeurSuspect(age) {
    if (age < 18) {
        console.log("MINOR DETECTED , NUCLEAR STRIKE ACTIVATED");
    } else if (19 < age || age < 26) {
        console.log("Papiers svp");
    } else {
        console.log("Bienvenue");
    }
}

isMajeurSuspect(18);

// ----------------------------------------------------------------------------
// boucles 
// ! tout nombre inclus !
// A.afficher les nombres de 0 à 10 avec une boucle for

for (let i = 0; i <= 10; i++) {
    console.log(i);
}

// B.afficher les nombres de 0 à 5 avec une boucle while

let n = -1;

while (n < 5) {
    n++;
    console.log(n);
}

// C.afficher les nombres pairs de 0 à 10 avec un do ... while

let j = -2;
do {
    j = j + 2;
    console.log(j);
} while (j < 10);

// D. afficher les nombres pairs de 0 à 20 via une boucle. 

// Avec boucle for
for (let i = 0; i <= 20; i += 2) {
    console.log(i);
}

// Avec boucle while
// let i = -2;

// while (i < 20) {
//     i += 2;
//     console.log(i);
// }

// Avec boucle do while
// let l = -2;
// do {
//     l = l + 2;
//     console.log(l);
// } while (l < 20);