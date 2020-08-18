// Génère le tableau d'id des oursons dans le panier.
function generate_products_id(products_info){
	let products_id = [];
	for(let i = 0; i < products_info.length; i++){
		products_id.push(products_info[i].id);
	}
	return products_id;
}

// Créer une ligne container pour un produit dans le panier
function create_cart_row(){
		let cart_row = document.createElement("div");
		cart_row.setAttribute("class", "cart-row");
		return cart_row;
}

// Créer un item pour le produit du panier.
function create_item(){
		let item = document.createElement("div");
		item.setAttribute("class", "cart-item", "cart-column");
		return item;
}

// Créer une image pour le produit
function create_image(src){
	let image =  document.createElement("img");
	image.setAttribute("class", "cart-item-image");
	image.src = src;
	return image;
}

// Créer un titre
function create_title(product_title){
	let title = document.createElement("span");
	title.setAttribute("class", "cart-item-title");
	title.textContent = product_title;
	return title;
}

// Créer un prix
function create_price(product_price){
	let cart_price = document.createElement("div");
	let item_price = document.createElement("span");
	cart_price.setAttribute("class", "cart-price", "cart-column");
	item_price.setAttribute("class", "price");
	item_price.textContent = product_price + " €";
	cart_price.appendChild(item_price);
	return cart_price;
}

// Calcul le prix total
let total = 0;

function total_price(products){
	for (let i = 0; i < products.length; i++) {
		total += products[i].price;
	}
	return total + " €";
}

let products = JSON.parse(localStorage.getItem('productsInCart'));

if (products) {

	for (let product of products){

		let items = document.getElementById("cart-container");

		let cartRow = create_cart_row();
		let item = create_item(); 
		
		items.appendChild(cartRow);
		cartRow.appendChild(item);
		item.appendChild(create_image(product.image));
		item.appendChild(create_title(product.name));
		cartRow.appendChild(create_price(product.price));

		product.price = parseInt(product.price);
	}

	let totale = document.querySelector(".cart-total-price");

	//Création d'un bouton pour supprimer les éléments du bouton
	let remove_btn = document.getElementById('btn-remove');
	remove_btn.addEventListener('click', function(){
		document.getElementById("container").remove();
		localStorage.clear();
		totale.textContent = 0 + ' €';
	});


	totale.textContent = total_price(products);

	// Formulaire //
	let contact = {};

	function checkField(regex, id){
		let elemValue = document.getElementById(id).value;
		if(regex.test(elemValue)){
			document.getElementById('erreur' + id).innerHTML = "";
			contact[id] = elemValue;
			return 1;
		} else {
			document.getElementById('erreur' + id).innerHTML = "* " + id + " invalide ";
			contact[id] = "";
			return 0;
		}
	}

	document.getElementById("btn-purchase").addEventListener("click", function(){

		let checkedElements = 0;

		checkedElements += checkField(new RegExp(/^[A-Za-z]{2,30}$/), "firstName");
		checkedElements += checkField(new RegExp(/^[A-Za-z]{2,30}$/), "lastName");
		checkedElements += checkField(new RegExp(/^[A-Za-z0-9]/), "address");
		checkedElements += checkField(new RegExp(/^[A-Za-z-]{1,38}$/), "city");
		checkedElements += checkField(new RegExp(/^[A-Za-z-_.0-9]{3,}@[a-z]{3,}[.]{1}[a-z]{2,3}$/), "email");

		let panier = {
			contact: contact, 
			products: generate_products_id(products)
		}

		const options = {
			method: 'POST',
			body: JSON.stringify(panier),
			headers: {
				'Content-Type': 'application/json'
			}	
		}

		if(checkedElements === 5){
			fetch('http://localhost:3000/api/teddies/order', options)
			.then(res => res.json())
			.then(res => {
				window.location.replace("file:///C:/Users/Arujan/Desktop/JWDP5-master/confirmation.html?total=" + total + "&order=" + res.orderId);
			})
			.catch((error) => {
				console.error('Error:', error);
			});
		}
	});
}
