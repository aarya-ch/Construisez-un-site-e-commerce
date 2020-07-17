let products = JSON.parse(localStorage.getItem('productsInCart'));

for (let product of products){
	let items = document.querySelector(".cart-items");
	let cartRow = document.createElement("div");
	let item = document.createElement("div");
	let itemImage = document.createElement("img");
	let itemTitle = document.createElement("span");
	let cartPrice = document.createElement("div");
	let itemPrice = document.createElement("span");
	let cartQuantity = document.createElement("div");
	let itemQuantity = document.createElement("input");
	/*let removeButton = document.createElement("button");*/


	cartRow.setAttribute("class", "cart-row");
	item.setAttribute("class", "cart-item", "cart-column");
	itemImage.setAttribute("class", "cart-item-image");
	itemTitle.setAttribute("class", "cart-item-title");
	cartPrice.setAttribute("class", "cart-price", "cart-column");
	itemPrice.setAttribute("class", "price");
	cartQuantity.setAttribute("class", "cart-quantity", "cart-column");
	itemQuantity.setAttribute("class", "cart-quantity-input");
	itemQuantity.setAttribute("type", "number");
	/*removeButton.setAttribute("class", "btn-danger");*/


	items.appendChild(cartRow);
	cartRow.appendChild(item);
	item.appendChild(itemImage);
	item.appendChild(itemTitle);
	cartRow.appendChild(cartPrice);
	cartPrice.appendChild(itemPrice);
	cartRow.appendChild(cartQuantity);
	cartQuantity.appendChild(itemQuantity);
	/*cartQuantity.appendChild(removeButton);*/


	itemImage.src = product.image;
	itemTitle.textContent = product.name;
	itemPrice.textContent = product.price;
	product.price = parseInt(product.price);
	itemQuantity.value = 1;
	/*removeButton.textContent = "REMOVE";*/
}

let removeCartItemButtons = document.getElementsByClassName('btn-danger');
for (let i = 0; i < removeCartItemButtons.length;  i++){
	let button = removeCartItemButtons[i]
	button.addEventListener('click', function(event){
		let buttonClicked = event.target
		buttonClicked.parentElement.parentElement.remove()
		localStorage.clear();
		let emptyCart = document.querySelector(".cart-total-price");
		emptyCart.textContent = 0 + '€';
	})
}

let total = 0;
for (let i = 0; i < products.length; i++) {
    total += products[i].price;
    console.log(total)
}

let totale = document.querySelector(".cart-total-price");
totale.textContent = total + '€';
