let produits = JSON.parse(localStorage.getItem('productsInCart'));
if (produits) {
	let productsId = [];

for(let i = 0; i < produits.length; i++){
	productsId[i] = produits[i].id;
}

for (let produit of produits){
	let items = document.querySelector(".cart-items");
	let cartRow = document.createElement("div");
	let item = document.createElement("div");
	let itemImage = document.createElement("img");
	let itemTitle = document.createElement("span");
	let cartPrice = document.createElement("div");
	let itemPrice = document.createElement("span");


	cartRow.setAttribute("class", "cart-row");
	item.setAttribute("class", "cart-item", "cart-column");
	itemImage.setAttribute("class", "cart-item-image");
	itemTitle.setAttribute("class", "cart-item-title");
	cartPrice.setAttribute("class", "cart-price", "cart-column");
	itemPrice.setAttribute("class", "price");


	items.appendChild(cartRow);
	cartRow.appendChild(item);
	item.appendChild(itemImage);
	item.appendChild(itemTitle);
	cartRow.appendChild(cartPrice);
	cartPrice.appendChild(itemPrice);


	itemImage.src = produit.image;
	itemTitle.textContent = produit.name;
	itemPrice.textContent = produit.price;
	produit.price = parseInt(produit.price);
}

let removeCartItemButtons = document.getElementsByClassName('btn-danger');
for (let i = 0; i < removeCartItemButtons.length;  i++){
	let button = removeCartItemButtons[i]
	button.addEventListener('click', function(event){
		let buttonClicked = event.target
		buttonClicked.parentElement.parentElement.remove()
		localStorage.clear();
		let emptyCart = document.querySelector(".cart-total-price");
		emptyCart.textContent = 0 + ' €';
	})
}

let total = 0;
for (let i = 0; i < produits.length; i++) {
	total += produits[i].price;
}

let totale = document.querySelector(".cart-total-price");
totale.textContent = total + ' €';

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
		products: productsId
	}

	const options = {
		method: 'POST',
		body: JSON.stringify(panier),
		headers: {
			'Content-Type': 'application/json'
		}	
	}

	console.log(panier);

	fetch('http://localhost:3000/api/teddies/order', options)
	.then(res => res.json())
	.then(res => {
		window.location.replace("file:///C:/Users/Arujan/Desktop/JWDP5-master/confirmation.html?total=" + total + "&order=" + res.orderId);
	})
	.catch((error) => {
		console.error('Error:', error);
	});

			
});

}
