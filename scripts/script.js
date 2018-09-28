// DIfférence netre tableau et object JS

/*let tab = [22, 11, 93];
let obj = { 1: 22, 2: 11, 3: 93 };

console.log(tab);
console.log(obj);
*/

/* Exemple d'un objet en JS
let personne = {
    nom: "GUILLON-MARDUEL",
    prenom: "Isabelle",
    dateNaiss: "01 may 1985",
    children: [{
            nom: "GUILLON",
            prenom: "Machin",
            dateNaiss: "01 may 2018",
            children: []
        },
        {
            nom: "GUILLON",
            prenom: "Truc",
            dateNaiss: "01 may 2015",
            children: []
        },
    ],
    age: function() {
        let anniversaire = new Date(this.dateNaiss); // on génère une date à aprtir d'une année ultérieure (dateNaiss)
        return new Number((new Date().getTime() - anniversaire.getTime()) / 31536000000).toFixed(0);
        // .getTime() renvoie la valeur en millisecondes de^puis le 1er janvier 1970
        // retourne un nombre( ( la date d'auourd'hui en millisecondes - dateNaiss en millisecondes ) / une année en millisecondes )
    }
}

console.log(personne);
console.log(personne.age());
*/

/*************************************EXERCICE 1********************************************/
// créer un carrousel

let imgCarrousel = [
    "https://www.wonderplugin.com/wp-content/uploads/2014/03/Evening_960_360.jpg",
    "http://wowslider.com/sliders/demo-81/data1/images/redkite50498.jpg",
    "http://wowslider.com/sliders/demo-29/data1/images/spider.jpg"
]

let occurrenceCarrousel = 0;

setInterval(function() {
    let img = document.querySelector('#slider img');
    img.src = imgCarrousel[occurrenceCarrousel];
    occurrenceCarrousel++;
    if (occurrenceCarrousel == imgCarrousel.length) {
        occurrenceCarrousel = 0;
    }
}, 5000)

/*************************************EXERCICE 2********************************************/
// mélanger les lettres dans les a de la nav

/**
 * randomText - rend une chaîne de caractères de manière aléatoire
 * string - chaîne de caractères à mélanger
 * returns tableau - une nouvelle string
 */
function randomText(text = "Mike le roi") {
    let tableau = text.split(""); // objectif : convertir une chaîne de caractères en un tableau de caractères
    tableau = arrayToStringRandom(tableau).join(''); // appel à la fonction
    return tableau; // retourne une string aléatoire
}
/**
 * arrayToStringRandom - renvoi un nouveau tableau avec les élémnets de l'ancien de manière aléatoire
 *  tab - tableau à mélanger
 * returns newArray - un nouveau tableau
 */
function arrayToStringRandom(tab = []) {

    let tabRandom = []; // Tableau des entiers déjà récupéré pour éviter les doublons de caractères
    let random, newArray = []; // création de deux variables
    // random est la variable qui stockera le nombre aléatoire
    // newArray sera le nouveau tableau créé à partir des nombres aléatoires
    // for permet de générer tous les caractères selon la taille du tableau
    for (let i = 0; i < tab.length; i++) {
        do {
            random = getRandomInt(0, tab.length); // permet de retourner un entier aléatoire compris entre 0 et la taille du tableau
        }
        while (tabRandom.includes(random)); // vérifie si l'entier a déjà été récupéré, si oui, relance l'appel de la fonction getRandomInt
        tabRandom.push(random); // ajouter l'entier aléatoire dans le tableau (tabRandom)
        newArray.push(tab[random]); // ajouter le caractère aléatoire dans le tableau (newArray)
        console.log(random);
    }
    return newArray; // retourne le nouveau tableau
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

let baliseA = document.querySelectorAll("#header > nav a");
for (i = 0; i < baliseA.length; i++) {
    baliseA[i].innerHTML = randomText(baliseA[i].innerHTML); // Appel à la fonction
}
console.log(baliseA);

/*********************************EXERCICE 3**********************************************/
// changer les 3 images

let image = [
        "https://i.pinimg.com/originals/fb/e0/d2/fbe0d2a1bf0cc9ad3718966efed8e3f4.jpg",
        "https://i.pinimg.com/originals/77/ed/b1/77edb1c41330d9f5de54ad7c6d491b63.jpg",
        "https://s-media-cache-ak0.pinimg.com/originals/19/e4/f3/19e4f32515afdfc60b5b4fd516bbfe24.jpg"
    ] // tableau des images à afficher

let dataImagesHtml = document.querySelectorAll('#services img'); // récupération de toutes nos balises img se trouvant dans l'id services 
// console.log(dataImagesHtml);
for (let i = 0; i < dataImagesHtml.length; i++) { // Boucles pour parcourir  notre tableau d'images dataImagesHtml
    dataImagesHtml[i].addEventListener("click", function() {
        dataImagesHtml[i].src = image[i]; // modification dela source de l'image

    })
}

/*
let imgSmall = "http://bdfjade.com/data/out/18/5272241-bahrain.jpg";

let imgClick = document.querySelectorAll('#services img');
imgClick.addEventListener("click", function(event) {
    info.id.add(imgSmall);
    event.stopPropagation();

});
*/


/*************************************EXERCICE 4****************************************/
// ajouter du texte au read more

let readBaliseA = document.querySelectorAll("#services a")[0]; // récupératiion des balises a dans l'id services et affectation de la première balise a dans la variable (readBaliseA)
// console.log(readBaliseA);
const TEXT_READ_BALISE_A = document.querySelectorAll("#services figcaption p")[0].innerHTML; // création d'une variable pour sauvegarder le texte original de la balise p

readBaliseA.addEventListener("click", function() {
    event.preventDefault(); // supprime l'événement par défaut
    let paragrapheRead = document.querySelectorAll("#services figcaption p")[0];
    if (readBaliseA.innerHTML == "Read More »") { // vérification du texte de la balise a (readBaliseA). Si son texte est le texte d'origine, on rentre dans le if
        readBaliseA.innerHTML = "Read Less &raquo;";
        paragrapheRead.innerHTML += "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in sem porta, gravida felis efficitur, accumsan lacus. Sed lorem ipsum, pellentesque vitae elementum sed, viverra id metus. Donec sagittis tellus felis, sed egestas lorem placerat eu. Sed porttitor pretium diam, eget tristique risus malesuada vel. Pellentesque sagittis eleifend quam, ac sagittis nisi condimentum nec. "
    } else { // si la balise A  (readBaliseA) affiche "Read Less", on rentre dans le else
        paragrapheRead.innerHTML = TEXT_READ_BALISE_A;
        readBaliseA.innerHTML = "Read More &raquo;";
    }
    // console.log("toto ça marche");
});





/*
let readMore = document.querySelectorAll('.more a');
let readLess = 'Read Less';
let paragraphe = document.querySelectorAll('article p');


for (let i = 0; i < readMore.length; i++) {
    readMore[i].addEventListener("click", function() {
        readMore[i] = readLess[i];
        paragraphe.innerHTML = ""

    })
}
console.log(readMore);
console.log(paragraphe);
*/