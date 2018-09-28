// DIfférence netre tableau et object JS

/*let tab = [22, 11, 93];
let obj = { 1: 22, 2: 11, 3: 93 };

console.log(tab);
console.log(obj);
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
]

let dataImagesHtml = document.querySelectorAll('#services img');
// console.log(dataImagesHtml);
for (let i = 0; i < dataImagesHtml.length; i++) {
    dataImagesHtml[i].addEventListener("click", function() {
        dataImagesHtml[i].src = image[i];

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