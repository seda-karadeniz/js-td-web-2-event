/* 
SOURCE : https://github.com/leny/becode-js-corrections
*/
/*
EXERCICE 4 : Change couleur (1)
Au clic sur un des boutons, colorie la page dans la couleur choisie par l'utilisateur.
*/

const colorChoice = prompt("entrer une couleur");
const a_btn = document.querySelectorAll('button');


for (const e_btn of a_btn) {
    e_btn.addEventListener('click', function(){
        e_btn.style.backgroundColor = colorChoice;
        
    })
}











/* for (const e_btn of a_btn) {
    e_btn.addEventListener('click', function(event){
        e_btn.style.backgroundColor = colorChoice;
        console.log(event.target.style)
    })
}
essai avc parametre event
 */


