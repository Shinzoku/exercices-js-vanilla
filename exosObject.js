// objet A . 
// 1 . créer une classe personne, qui contiendra les valeurs : le prénom , le name, l'age, la nationalité
// 2 . créer une méthode "dire bonjour" qui retourne "bonjour " suivi du name et du prénom.
// 3 . créer le constructeurs ( setters )
// 4 . instancier 3 personnes, avec des caractéristiques différentes
// 5 . créer une METHODE "frenchCheck" qui retourne TRUE si la nationalité de la personne est STRICTEMENT EGALE A française.

class Personne {
    constructor(prenom, name, age, nationalite) {
        // setter
        this.prenom = prenom;
        this.name = name;
        this.age = age;
        this.nationalite = nationalite;
    }

    dire_bonjour() {
        console.log(`Bonjour, ${this.prenom} ${this.name}.`)
    }

    frenchCheck() {
        if (this.nationalite === 'FRA') {
            return true;
        } else {
            return false;
        }
        // ou return this.nationalite === 'FRA' ? true:false
    }
};
// -----------------------------------------------------------------------------

let personnage1 = new Personne('Jean', 'Rigol', 38, 'FRA');
// personnage1.dire_bonjour();
// console.log(personnage1.frenchCheck());

let personnage2 = new Personne('Jean', 'Peplu', 21, 'FRA');
// personnage2.dire_bonjour();
// console.log(personnage2.frenchCheck());

let personnage3 = new Personne('John', 'Doe', 19, 'USA');
// personnage3.dire_bonjour();
// console.log(personnage3.frenchCheck());

// -----------------------------------------------------------------------------
// B.
// 1. Créer une classe livre qui contiendra les proprietés : name, author, price
// 2. instancier 2 livres
// 3. constructeurs + fonction qui retourne tout les champs:valeurs sous forme de console.log
// 4. créer une fonction qui compare le price de deux livres et affiche le name du moins cher
// 5. rajouter une PROPRIETE currency, nos livres ne seront vendus que dans un language, par défaut ils seront vendus en euros ( les euros €, dollars us $, livres sterling £ , rouble russe RUB dans un tableau ) , rajouter cette propriété manuellement pour chaque livre

// 6. PARTIE GENERATEUR DE TESTS, PEUT ETRE UTILISE POUR DES TESTS DE CHARGE -> intro aux TUs
//    créer une fonction ( EXTERNE A L'OBJET) qui va générer 5 livres du meme author ayant tous un price différent, tous   étant de la meme currency ( on en a une par défaut)

//    ces données sont bidon et c'est ok si elles sont imprécises, du moment que vous vous y retrouviez
//    BONUS : rajouter un champ currency ( optionel ) dans la fonction, qui change la currency des livres générés au lieu de l'€ habituel par défaut

//    constructeur du livre rappel : (name, author, price, currency)
//    SIGMA GRINDSET BONUS : rajouter 2 livres d'un autre author, et donc avec une autre devise ...ahem... CURRENCY
// -----------------------------------------------------------------------------
class Livre {

    constructor(name, author, price, currency) {

        this.name = name;
        this.author = author;
        this.price = price;
        this.currency = currency || "€";

        let tabCurrency = ["€", "$", "£", "RUB"];

        if (currency === "euro" || currency === "€") {
            return this.currency = tabCurrency[0];

        } else if (currency === "dollar" || currency === "$") {
            return this.currency = tabCurrency[1];

        } else if (currency === "livres sterling" || currency === "£") {
            return this.currency = tabCurrency[2];

        } else if (currency === "rouble" || currency === "RUB") {
            return this.currency = tabCurrency[3];
        }
    }

    infoProduct() {
        let info;
        info = `nom: ${this.name}, auteur: ${this.author}, prix: ${this.price} ${this.currency}.`;
        console.log(info);
    }
}
// -----------------------------------------------------------------------------

let book1 = new Livre('Les aventures de toto', 'Tutu', 5.95, 'dollar');
let book2 = new Livre('Souvenir goutte à goutte', 'Gible', 4.95);

book1.infoProduct();
book2.infoProduct();

function comparativeBook(livre1, livre2) {
    if (livre1.price < livre2.price) {
        console.log(livre1.name);
    } else {
        console.log(livre2.name);
    }
}

comparativeBook(book1, book2);

// 6 - testdata generator
let currency = ["€", "$", "£", "RUB"];

function bookGenerator(author, currency) {
    book1 = new Livre("la vie de toto", author, 4.95);
    book2 = new Livre("le destin de toto", author, 5.95);
    book3 = new Livre("les souvenirs de toto", author, 6.95);
    book4 = new Livre("les menssonges de toto", author, 3.95);
    book5 = new Livre("les secrets de toto", author, 7.95);
    bookA = new Livre('livre A', 'Mark Twain', 14.32, currency);
    bookB = new Livre('livre B', 'Mark Twain', 19.99, currency);
}

bookGenerator("toto", currency[1]);
book1.infoProduct();
book2.infoProduct();
book3.infoProduct();
book4.infoProduct();
book5.infoProduct();
bookA.infoProduct();
bookB.infoProduct();



// -----------------------------------------------------------------------------
// C. 1. Créer une classe Article, qui contiendra les valeurs :
// >. price
// >. currencyType ( euro, dollar, etc) -> dans un tableau
// >. language
// 2. créer une méthode qui change la valeur de la currency 
// 3. créer une méthode qui affiche le prix concaténé avec la currency ( ex affiche 19.95€)

// Une id est un identifiant unique, comme votre numéro de sécu, y'en a JAMAIS DEUX PAREIL ( parfois, c'est tant mieux)
// C. 1. Créer une classe Article, qui contiendra les propriété suivantes : id ( NUMERO identifiant), nom , prix , description de l'objet, imagelink ( sous forme de string)
// avec son constructeur bien évidemment
// 2 . créer une méthode articleLog() qui affichera les proriétés de l'article
// 3 . instancier 2 articles, avec une id, un nom, un prix, une description
// 4 . créer une fonction articleGeneratorTestData() et déplacer vos instances d'article dedans, remplacer les id fait à la main par des l'indicateur de boucle "i"
// 5 . créer une METHODE qui ajoute UN lien url d'image à imageLink, attention au nommage
// 6 . rajouter une propriété imagesLink /!\ pluriel à l'objet Article ayant comme valeur un tableau de STRING
//   . rajouter en dur images Link à un article , modifier les constructeurs, articleLog etc en conséquence
//   . vous venez de comprendre l'intéret de la conception et de la dette technique

const tabImagesLink = ['https://www.google.com/url?sa=i&url=https%3A%2F%2Fdeveloper.mozilla.org%2Ffr%2Fdocs%2FWeb%2FHTML%2FElement%2FImg&psig=AOvVaw0wuyxv4AuClir7Ize0kTJX&ust=1649239182473000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCLjhlfTU_PYCFQAAAAAdAAAAABAD', 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.jquery-az.com%2Fwp-content%2Fuploads%2F2015%2F12%2F2.2-HTML-img-src-relative.jpg&imgrefurl=https%3A%2F%2Fwww.jquery-az.com%2Fhtml-img-src-image-source-attribute-with-path-possibilities-5-examples%2F&tbnid=rAkQ7dtbTE4q8M&vet=10CBkQxiAoCmoXChMIuOGV9NT89gIVAAAAAB0AAAAAEAc..i&docid=sn2PMf9j8A8zIM&w=300&h=300&itg=1&q=image&client=ubuntu&ved=0CBkQxiAoCmoXChMIuOGV9NT89gIVAAAAAB0AAAAAEAc', 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fna-dache.pro%2Fuploads%2Fposts%2F2021-05%2F1620984706_18-p-greipfrut-foto-20.jpg&imgrefurl=https%3A%2F%2Fna-dache.pro%2Frastenija%2F43796-grejpfrut-105-foto.html&tbnid=xZsQiOogbkpQeM&vet=10CA0QxiAoA2oXChMIuOGV9NT89gIVAAAAAB0AAAAAEAc..i&docid=Uc6u7hA2R76pqM&w=1430&h=1430&itg=1&q=image&client=ubuntu&ved=0CA0QxiAoA2oXChMIuOGV9NT89gIVAAAAAB0AAAAAEAc'];

class Article {
    constructor(id, name, price, description, imageLink, tabImagesLink) {
        this.id = id
        this.name = name;
        this.price = price;
        this.description = description;
        this.imageLink = imageLink;
        this.currency = '€';
        this.language = 'FRA';
        this.imagesLink = tabImagesLink;
    }

    articleLog() {
        let log;
        log = `ID: ${this.id}\nnom: ${this.name}\nprix: ${this.price} ${this.currency}\ndescription: ${this.description}\nimageLink: ${this.imageLink}\nimagesLink: ${this.imagesLink}`;
        console.log(log);
    }

    changeCurrency(money) {
        const currencyType = ['$', '€', '£', 'RUB'];

        if (money === 'euro' || money === '€') {
            return this.currency = currencyType[1];
        } else if (money === 'dollar' || money === '$') {
            return this.currency = currencyType[0];
        } else if (money === 'livres' || money === 'livres sterling' || money === '£') {
            return this.currency = currencyType[2];
        } else if (money === 'rouble' || money === 'RUB') {
            return this.currency = currencyType[2];
        }

    }

    printPrice() {
        alert(`Le prix de cette article est de ${this.price} ${this.currency}`)
    }

    setImagelink(singleUrlLink) {
        this.imagelink = singleUrlLink;
    }
}
let id = 1;

let article1 = new Article(id++, 'ciseau', 16.95, "Ciseau de marque Mapped parfait pour les enfants.");
let article2 = new Article(id++, 'gomme', 6.95, "Ciseau de marque Mapped parfait pour les enfants.");
let article3 = new Article(id++, 'compas', 21.95, "Ciseau de marque Mapped parfait pour les enfants.");
let article4 = new Article(id++, 'rapporteur', 2.95, "Ciseau de marque Mapped parfait pour les enfants.");
let article5 = new Article(id++, 'régle', 5.95, "Ciseau de marque Mapped parfait pour les enfants.");
let article6 = new Article(id++, 'équerre', 3.95, "Ciseau de marque Mapped parfait pour les enfants.");

// article1.changeCurrency('euro');
// article1.printPrice();

article1.articleLog();
article2.articleLog();
article3.articleLog();
article4.articleLog();
article5.articleLog();
article6.articleLog();

let idGene = 0;

function articleGeneratorTestData() {

    article1 = new Article(idGene++, 'ciseau', 16.95, "Ciseau de marque Mapped parfait pour les enfants.");
    article2 = new Article(idGene++, 'gomme', 6.95, "Ciseau de marque Mapped parfait pour les enfants.");
    article3 = new Article(idGene++, 'compas', 21.95, "Ciseau de marque Mapped parfait pour les enfants.");
    article4 = new Article(idGene++, 'rapporteur', 2.95, "Ciseau de marque Mapped parfait pour les enfants.");
    article5 = new Article(idGene++, 'régle', 5.95, "Ciseau de marque Mapped parfait pour les enfants.");
    article6 = new Article(idGene++, 'équerre', 3.95, "Ciseau de marque Mapped parfait pour les enfants.");
}

articleGeneratorTestData()

article1.articleLog();
article2.articleLog();
article3.articleLog();
article4.articleLog();
article5.articleLog();
article6.articleLog();

// Soluce exercice C :
// Une id est un identifiant unique, comme votre numéro de sécu, y'en a JAMAIS DEUX PAREIL ( parfois, c'est tant mieux)
// C. 1. Créer une classe Article, qui contiendra les propriété suivantes : id ( NUMERO identifiant), nom , prix , description de l'objet, imagelink ( sous forme de string)
// avec son constructeur bien évidemment
// 2 . créer une méthode articleLog() qui affichera les proriétés de l'article
// 3 . instancier 2 articles, avec une id, un nom, un prix, une description
// 4 . créer une fonction articleGeneratorTestData() et déplacer vos instances d'article dedans, remplacer les id fait à la main par des l'indicateur de boucle "i"
// 5 . créer une METHODE qui ajoute UN lien url d'image à imageLink, attention au nommage
// 6 . rajouter une propriété imageLinks /!\ pluriel à l'objet Article ayant comme valeur un tableau de STRING
//   . rajouter en dur imagesLink à un article , modifier les constructeurs, articleLog etc en conséquence
//   . vous venez de comprendre l'intéret de la conception et de la dette technique

// classe d'objet article
class Article {
    constructor(id, name, price, description, imageLink, imagesLink) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.imageLink = imageLink;
        // 6 . tableau d'images
        this.imagesLink = imagesLink;

        console.log('created :' + this.name + ' id:' + this.id);
    }

    // 2. log d'article
    articleLog() {
        console.log('+article : ' + this.name +
            ' , name :' + this.name +
            ' , price :' + this.price +
            ' , description :' + this.description +
            ' , imageLink :' + this.imageLink +
            ' , imagesLink :' + this.imagesLink);
    }

    // 5. add imageLink, attention au nommage
    setImagelink(singleUrlLink) {
        this.imageLink = singleUrlLink;
    }

}
// on laisse souvent l'article avec l'id 0 aux devs pour tester
let article0 = new Article(0, 'test zero', 10, 'desctext zero');

// 4. testdata generator
const testImagesLink = ["https://information.tv5monde.com/sites/info.tv5monde.com/files/styles/large/public/assets/images/252565_vignette_kalachnikov-ak-47.jpg?itok=0wRW8lIg",
    "https://upload.wikimedia.org/wikipedia/commons/6/65/AK-47_type_II_noBG.png",
    "https://www.lepoint.fr/images/2014/01/14/sipa-mikhail-kalachnikov-fusil-assaut-ak-47-mort-l-2343768-jpg_2018065_1250x625.JPG"
];

let j = 0;

function articleGeneratorTestData(n) {
    article1 = new Article(j++, 'AK-47', 1299.99, 'Cheap, reliable, you know what it is and we know why you want it.');
    article2 = new Article(j++, 'Cocaine, 1kg', 25000, 'From the jungles of our beloved Colombia to the highrise buildings of London or Shangai this fine white will take you anywhere, anytime.');
    article3 = new Article(j++, 'Corrupt politician, 1000kg', 1200000, 'Why kill your ennemies when it\'s way easier to buy them?.');

    //on rajoutera le reste des articles à la suite, dans cette fonction for, on n'aura pas d'id doubles
    articleImagesLinkOk = new Article(j++, 'toyota camry but its kalashnikov pictures', 20000, 'A warlord\'s classic', 'https://upload.wikimedia.org/wikipedia/commons/a/ac/2018_Toyota_Camry_%28ASV70R%29_Ascent_sedan_%282018-08-27%29_01.jpg', testImagesLink)
}
articleGeneratorTestData(4);
//end exo 4

article0.articleLog();

// // 3. instances
// let article1 = new Article(1, 'AK47', 1299.99, 'Cheap, reliable, you know what it is and we know why you want it.');
// let article2 = new Article(2, 'Cocaine, 1kg', 25000, 'From the jungles of our beloved Colombia to the highrise buildings of London or Shangai this fine white will take you anywhere, anytime.')
// article1.articleLog();
// article2.articleLog();


console.log('test data gene');
articleImagesLinkOk.articleLog();
console.log('end test data gene');

// 6. imagesLink
article0.setImagelink("https://cdn.britannica.com/70/123170-050-D7AAF458/AK-47.jpg");
article0.imagesLink = ["https://information.tv5monde.com/sites/info.tv5monde.com/files/styles/large/public/assets/images/252565_vignette_kalachnikov-ak-47.jpg?itok=0wRW8lIg",
    "https://upload.wikimedia.org/wikipedia/commons/6/65/AK-47_type_II_noBG.png",
    "https://www.lepoint.fr/images/2014/01/14/sipa-mikhail-kalachnikov-fusil-assaut-ak-47-mort-l-2343768-jpg_2018065_1250x625.JPG"
]
article0.articleLog();