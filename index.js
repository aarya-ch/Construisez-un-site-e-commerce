// Créer et retourne un élément HTML <h3> avec le prix de l'ourson.
function create_price(teddy_price){
	let price = document.createElement("h3");
	price.textContent = teddy_price + " €";
	return price;
}

// Créer et retourne un élément HTML <h2> avec le nom de l'ourson.
function create_name(teddy_name){
	let name = document.createElement("h2");
	name.textContent = teddy_name;
	return name;
}

// Créer et retourne un élément HTML <img> à partir d'un fichier source.
function create_image(src){
	let image = document.createElement("img");
	image.src = src;
	return image;
}

// Créer un bouton <a> renvoyant au détail du produit grâce à l'id de l'ourson.
function create_button(teddy_id){
	let btn = document.createElement("a")
	btn.setAttribute("class", "btn");
	btn.href = "produit.html?id=" + teddy_id;
	btn.textContent = "Voir Produit";
	return btn;
}

// Créer un bloc container <div> stockant un produit.
function create_product_container(){
	let produit = document.createElement("div");
	produit.setAttribute("class", "produit");
	return produit;
}

const URL = "http://localhost:3000/api/teddies";
let produits = document.getElementById('produits');

fetch(URL)
	.then((response) =>
		response.json().then((teddies) => {
			for (let teddy of teddies){

				let produit = create_product_container();
				produits.appendChild(produit);

				produit.appendChild(create_image(teddy.imageUrl));
				produit.appendChild(create_name(teddy.name));
				produit.appendChild(create_price(teddy.price));
				produit.appendChild(create_button(teddy._id));
			};
		})
	)
	.catch((err) => console.log("Erreur : " + err));
