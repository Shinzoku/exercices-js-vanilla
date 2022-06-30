// Exercice 1:
// La distance de Hamming est le nombre de caractères qui diffèrent entre deux chaînes. Prenons un exemple :
// Str1: « abcdde »
// Str2: « abcdbe »
// Distance de Hamming = 1 « d » et « b » est la seule différence.
// Créez une fonction qui calcule la distance de hamming entre deux chaînes.
// Exemple:
// distanceHamming("abcdde", "abcdbe") ➞ 1
// distanceHamming("abefcd", "cdfgea") ➞ 6
// distanceHamming("agresser", "adresser") ➞ 1
// distanceHamming("attention", "intention") ➞ 2

function distanceHamming(str1, str2) {
    let dif = 0;
    let tabStr1 = str1.split("");
    let tabStr2 = str2.split("");
    for (let i = 0; i < tabStr1.length; i++) {
        if (tabStr1[i] !== tabStr2[i]){
            dif++;
        }   
    }
    return dif;
}

// Afficher la sortie
console.log(distanceHamming("abcdde", "abcdbe"));
console.log(distanceHamming("abefcd", "cdfgea"));
console.log(distanceHamming("agresser", "adresser"));
console.log(distanceHamming("attention", "intention"));

// Exercice 2:
// Créez une fonction qui prend un tableau de nombres et renvoie le minimum et le maximum dans un tableau [Min, Max].
// Exemple:
// getMinMax([8, 1, 9, 2, 6]) ➞ [1, 9]
// getMinMax([22, 2]) ➞ [2, 22]
// getMinMax([5]) ➞ [5, 5]

function getMinMax(tab) {
	return [Math.min(...tab), Math.max(...tab)];
}

// Afficher la sortie
console.log(getMinMax([8, 1, 9, 2, 6]));
console.log(getMinMax([22, 2]));
console.log(getMinMax([5]));

// Exercice 3:
// Créez une fonction qui compte le nombre de majuscules dans une chaîne de caractères.
// Exemple:
// countMaj("abcdEFG") ➞ 3
// countMaj("WayToLearnX") ➞ 4
// countMaj("abcdefghigklmnopkrstvuwxyz") ➞ 0

function countMaj(str) {
	let count = 0;
    let tabStr = str.split("");
    for (let i = 0; i < tabStr.length; i++) {
        if (tabStr[i] === tabStr[i].toUpperCase()){
            count++;
        }   
    }
    return count;
}

// Afficher la sortie
console.log(countMaj("abcdEFG"));
console.log(countMaj("WayToLearnX"));
console.log(countMaj("abcdefghigklmnopkrstvuwxyz"));

// Exercice 4:
// Créez une fonction qui compte le nombre de syllabes d’un mot. Chaque syllabe est séparée par un tiret -.
// Exemple:
// nbrOfSlab("prin-temps") ➞ 2
// nbrOfSlab("ar-rê-te") ➞ 3
// nbrOfSlab("ther-mo-mè-tre") ➞ 4

function nbrOfSlab(str) {
	return str.split("-").length;
}

// Afficher la sortie
console.log(nbrOfSlab("prin-temps"));
console.log(nbrOfSlab("ar-rê-te"));
console.log(nbrOfSlab("ther-mo-mè-tre"));

// Exercice 5:
// Implémenter une fonction qui renvoie la distance donnée en kilomètres convertie en miles. Vous devez arrondir le résultat jusqu’au quatrième chiffre décimal.
// Exemple:
// toMiles(5) ➞ 3.1069
// toMiles(7) ➞ 4.3496
// toMiles(10) ➞ 6.2137

function toMiles(km) {
	return (km * 1000 / 1609.344).toFixed(4);
}

// Afficher la sortie
console.log(toMiles(5));
console.log(toMiles(7));
console.log(toMiles(10));

// Exercice 6:
// Créez une fonction qui prend un nombre (de 1 à 12) et renvoie son nom de mois correspondant sous forme de chaîne. Par exemple, si on vous donne 4 en entrée, votre fonction devrait retourner Avril, car Avril est le 4ème mois.
// 
// Nombre  Nom du mois
    // 1	Janvier
    // 2	Février
    // 3	Mars
    // 4	Avril
    // 5	Mai
    // 6	Juin
    // 7	Juillet
    // 8	Août
    // 9	Septembre
    // 10	Octobre
    // 11	Novembre
    // 12	Décembre

// Exemple:
// nomDuMois(3) ➞ "Mars"
// nomDuMois(12) ➞ "Décembre"
// nomDuMois(6) ➞ "Juin"

function nomDuMois(n) {
	let month = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Nombre", "Décembre"];
    return month[n - 1];
}

// Afficher la sortie
console.log(nomDuMois(3));
console.log(nomDuMois(12));
console.log(nomDuMois(6));

// Exercice 7:
// Créez une fonction qui renvoie « Majuscule » si toutes les lettres d’un mot sont en majuscules, « Minuscule » si toutes les lettres d’un mot sont en minuscule et « Mix » s’il contient à la fois des majuscules et des minuscules.
// Exemple:
// caseOf("WAYTOLEARNX") ➞ "Majuscule"
// caseOf("waytolearnx") ➞ "Minuscule"
// caseOf("WayToLearnX") ➞ "Mix"

function caseOf(str) {
	if (str === str.toUpperCase()) {
        return "Majuscule";
    }else if (str === str.toLowerCase()){
        return "Minuscule";
    }else{
        return "Mix"
    }
}

// Afficher la sortie
console.log(caseOf("WAYTOLEARNX"));
console.log(caseOf("waytolearnx"));
console.log(caseOf("WayToLearnX"));

// Exercice 8:
// Le temps a un format: heures:minutes. Les heures et les minutes ont deux chiffres, comme 07:00. Ecrivez l’expression régulière pour trouver le temps(heures:minutes) dans la chaîne.
// Exemple:
// "Le restaurant ouvre à 08:00 situé au boulevard du 200:200" ➞ "08:00"
// "J'ai pris mon déjeuner à 10:30." ➞ "10:30"
// "Je vais aller au cinéma demain à 18:00 du soir. ➞ "18:00"

var str = "Le restaurant ouvre à 08:00 situé au boulevard du 200:200";
var expr = /\d{2}:\d{2}/;
var result = str.match(expr);

console.log(result.join(""));

// Exercice 9:
// Écrivez une fonction qui prend un nombre binaire de 8 bits sous forme de tableau et convertissez-le en décimal.
// Exemple:
// binToDec([0, 0, 0, 1, 1, 1, 1, 1]) ➞ 31
// binToDec([0, 0, 0, 0, 0, 0, 0, 1]) ➞ 1
// binToDec([1, 0, 0, 0, 0, 0, 0, 0]) ➞ 128

function binToDec(tab) {
	return parseInt(tab.join(""),2);
}

// Afficher la sortie
console.log(binToDec([0, 0, 0, 1, 1, 1, 1, 1]));
console.log(binToDec([0, 0, 0, 0, 0, 0, 0, 1]));
console.log(binToDec([1, 0, 0, 0, 0, 0, 0, 0]));