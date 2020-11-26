/* 
SOURCE : https://github.com/leny/becode-js-corrections
*/
/*
EXERCICE 8 :
Au clic sur l'image, change sa source par celle qui se trouve dans son attribut "data-hover".
BONUS : switche entre les deux images : quand on re-clique, tu reviens à l'image originale et ainsi de suite
*/

const e_image = document.querySelector(".material img");
e_image.addEventListener('click', function(event){
	console.log(event.target);
	let image_alt = event.target.dataset.hover;
	let e_imageSrc = event.target.src;
	event.target.src = image_alt;
})


/* 
AIDE POUR LE BONUS :
Pour réaliser cet effet, il suffit d'échanger le contenu des deux propriétés src et dataset.hover :
	* au clic 1, on met l'image de data.hover dans src et cellle de src dans data.hover => dans src, il y a à présent la nouvelle (on affiche donc bien la nouvelle) et maintenant, dans data.hover, il a l'ancienne
	* au clic 2, on met l'image de data.hover (qui contient à présent l'ancienne) dans src et cellle de src (qui contient l'ancienne) dans data.hover => dans src, il y a à présent à nouveau l'ancienne (on réaffiche l'ancienne) et maintenant, dans data.hover, il a la nouvelle
	* etc., ainsi de suite
*/
/*
Parenthèse : comment échanger le contenu de 2 variables ?
La méthode classique est de créer une variable temporaire, comme ceci : 
	var a, b, t;
	a = 2;
	b = 3;
	t = a;
	a = b;
	b = t;
	console.log(`a vaut ${a} et b vaut ${b}`);
*/



// version de base


// BONUS : switch entre les deux images

