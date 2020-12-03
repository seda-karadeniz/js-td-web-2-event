/* 
SOURCE : https://github.com/leny/becode-js-corrections
*/
/*
EXERCICE 6 : Change couleur (3)
- 3°) Étape 3 :
	La meilleure solution est en fait d'avoir un vrai formulaire et de gérer les deux événements d'un seul coup via l'écoute de la soumission du formulaire (quelle que soit la méthode de soumission, du coup).
	ATTENTION : Observe bien le code HTML, on a un bouton de type "button". Ce n'est pas un VRAI formulaire : le bouton de type "button" ne soumet pas le formulaire, il n'envoie aucune donnée ! Pour avoir une soumission, il faut le transformer en button de type "submit".
	=> 	a) Modifie le code HTML
		b) associe la fonction colorie à un écouteur d'événement "submit" sur le formulaire
	BONUS : ajoute une instruction dans la fonction qui va vider le champ texte quand il prend le focus
*/

// ÉTAPE 3 :  en écoutant la soumission du formulaire
let e_inputColor = document.querySelector('#colorChoice');
const e_button = document.querySelector('#colorBtn');

function f_colorChange(event) {
	event.preventDefault(); /* arreter la soumission -- le comportement par defaut par exmple au clique changer de page */
	document.body.style.backgroundColor = e_inputColor.nodeValue;
}
document.querySelector('#colorForm').addEventListener('submit',f_colorChange); /* ciblet le formulaire */