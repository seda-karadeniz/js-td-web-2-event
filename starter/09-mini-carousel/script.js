/* 
SOURCE : https://github.com/leny/becode-js-corrections
*/
/*
EXERCICE 9 : 
Au clic sur le bouton, change la source de l'image par celle de l'image suivante dans le tableau <strong>gallery</strong>. Fais-en une boucle.
*/
/* 
AIDE : voici les étapes :
1. On initialise un index
2. On recherche l'élément img
3. On associe image aux éléments du tableau (suivant le numéro d'index)
4. On incrémente l'index de 1 pour faire défiler les images
5. En fin de longueur du tableau, on redémarre au début de l'index
*/

const gallery = ["./img/bell.svg","./img/clock.svg","./img/compass.svg","./img/kiss.svg"];
const e_image = document.querySelector('img');
let i = 1;

function myFunction(){
    e_image.src = gallery[i];
    i++;
    if (i >= gallery.length) {
        i = 0;
    }
}
/* document.querySelector('#next').addEventListener('click', myFunction);
document.querySelector('img').addEventListener('click', myFunction); */

/* avec boucle forof */
const a_nexts = document.querySelectorAll('#next, img');
/* initialiser un tableau avec plusieur selecteur (pour que sa fonctionnent sur les img et sur le boutton) */

for (const e_next of a_nexts) {
    e_next.addEventListener('click', myFunction);
}
/* for of pr parcourir plusieur balise sur le quel on veux traiter un mm evenemnt */



