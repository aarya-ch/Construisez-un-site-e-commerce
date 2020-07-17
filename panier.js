let removeCartItemButtons = document.getElementsByClassName('btn-danger');
for (let i = 0; i < removeCartItemButtons.length;  i++){
	let button = removeCartItemButtons[i]
	button.addEventListener('click', function(event){
		let buttonClicked = event.target
		buttonClicked.parentElement.parentElement.remove()	
	})
}

let products = JSON.parse(localStorage.getItem('productsInCart'));
console.log(products)

for (let product of products){
	let shoppingCart = document.getElementById('shopping-cart');
	let titles = document.createElement("div");
	let productTitle = document.createElement("span");
	let priceTitle = document.createElement("span");
	let quantityTitle = document.createElement("span");
	let items = document.createElement("div");
	let cartRow = document.createElement("div");
	let column = document.createElement("div");
	let itemImage = document.createElement("img");
	let itemTitle = document.createElement("span");
	let cartPrice = document.createElement("div");
	let itemPrice = document.createElement("span");
	let cartQuantity = document.createElement("div");
	let itemQuantity = document.createElement("input");
	let removeButton = document.createElement("button");


	titles.setAttribute("class", "cart-row");
	productTitle.setAttribute("class", "cart-item","cart-header","cart-column");
	priceTitle.setAttribute("class", "cart-price, cart-header, cart-column");
	quantityTitle.setAttribute("class", "cart-quantity, cart-header, cart-column");
	items.setAttribute("class", "cart-items");
	cartRow.setAttribute("class", "cart-row");
	column.setAttribute("class", "cart-item", "cart-column");
	itemImage.setAttribute("class", "cart-item-image");
	itemTitle.setAttribute("class", "cart-item-title");
	cartPrice.setAttribute("class", "cart-price", "cart-column");
	itemPrice.setAttribute("class", "price");
	cartQuantity.setAttribute("class", "cart-quantity", "cart-column");
	itemQuantity.setAttribute("type", "number");
	removeButton.setAttribute("class", "btn", "btn-danger", "cart-quantity-button");


	shoppingCart.appendChild(titles);
	titles.appendChild(productTitle);
	titles.appendChild(priceTitle);
	titles.appendChild(quantityTitle);
	items.appendChild(cartRow);
	cartRow.appendChild(column);
	column.appendChild(itemImage);
	column.appendChild(itemTitle);
	cartPrice.appendChild(itemPrice);
	cartQuantity.appendChild(itemQuantity);
	cartQuantity.appendChild(removeButton);


	productTitle.textContent = "PRODUIT";
	priceTitle.textContent = "PRIX";
	quantityTitle.textContent = "QUANTITE";
	itemImage.src = product.image;
	itemTitle = product.name;
	itemPrice = product.price;
	removeButton.textContent = "REMOVE";
	removeButton.value = 1;
}
