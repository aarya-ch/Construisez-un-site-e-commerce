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

// Créer et retourne un élément HTML <div> contenant la description de l'ourson.
function create_description(teddy_description){
	let description = document.createElement("div");
	description.textContent = teddy_description;
	return description;
}

// Créer un bouton <a> pour ajouter l'ourson au panier.
function create_button(){
	let btn = document.createElement("a");
	btn.textContent = "Ajouter";
	btn.href = "panier.html";
	btn.setAttribute("class", "btn");
	return btn;
}

// Créer un bloc container <div> stockant un produit.
function create_product_container(){
	let produit = document.createElement("div");
	produit.setAttribute("class", "produit");
	return produit;
}

// Créer et retourne un élément HTML <select> composé d'options <option> en fonction des couleurs disponible de l'ourson.
function create_colors_selection(teddys_colors){

	let select = document.createElement("select");

	for (let color of teddys_colors){
		let option = document.createElement("option");
		option.textContent = color;
		select.appendChild(option);
	}

	return select;
}

// Ajoute un produit dans le panier du localstorage.
function add_product_in_cart(product){

	let cart = JSON.parse(localStorage.getItem("productsInCart"));

	if(!cart)
		cart = [];

	cart.push(product);
	localStorage.setItem("productsInCart", JSON.stringify(cart));
}


const PARAMS = new URLSearchParams(window.location.search);
const TEDDY_ID = PARAMS.get("id");
const URL = "http://localhost:3000/api/teddies/" + TEDDY_ID;

fetch(URL)
	.then((response) =>
		response.json().then((teddy) => {

			let container = document.getElementById("container");

			let produit = create_product_container();
			let btn = create_button();
			
			container.appendChild(produit);
			produit.appendChild(create_image(teddy.imageUrl));
			produit.appendChild(create_name(teddy.name));
			produit.appendChild(create_price(teddy.price));
			produit.appendChild(create_description(teddy.description));
			produit.appendChild(create_colors_selection(teddy.colors));
			
			produit.appendChild(btn);

			let product = {
				name : teddy.name,
				price : teddy.price,
				image : teddy.imageUrl,
				id : teddy._id
			}
			
			btn.addEventListener("click", function(){
				add_product_in_cart(product);
			});
		})
	)

	.catch((err) => console.log("Erreur : " + err));
