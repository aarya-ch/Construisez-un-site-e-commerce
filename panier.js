let products = JSON.parse(localStorage.getItem('productsInCart'));

for (let product of products){
	let items = document.querySelector(".cart-items");
	let cartRow = document.createElement("div");
	let column = document.createElement("div");
	let itemImage = document.createElement("img");
	let itemTitle = document.createElement("span");
	let cartPrice = document.createElement("div");
	let itemPrice = document.createElement("span");
	let cartQuantity = document.createElement("div");
	let itemQuantity = document.createElement("input");
	let removeButton = document.createElement("button");


	cartRow.setAttribute("class", "cart-row");
	column.setAttribute("class", "cart-item", "cart-column");
	itemImage.setAttribute("class", "cart-item-image");
	itemTitle.setAttribute("class", "cart-item-title");
	cartPrice.setAttribute("class", "cart-price", "cart-column");
	itemPrice.setAttribute("class", "price");
	cartQuantity.setAttribute("class", "cart-quantity", "cart-column");
	itemQuantity.setAttribute("type", "number");
	removeButton.setAttribute("class", "btn", "btn-danger", "cart-quantity-button");


	items.appendChild(cartRow);
	cartRow.appendChild(column);
	column.appendChild(itemImage);
	column.appendChild(itemTitle);
	cartPrice.appendChild(itemPrice);
	cartQuantity.appendChild(itemQuantity);
	cartQuantity.appendChild(removeButton);


	itemImage.src = product.image;
	itemTitle.textContent = product.name;
	itemPrice.textContent = product.price;
	removeButton.textContent = "REMOVE";
	removeButton.value = 1;
}


/*let removeCartItemButtons = document.getElementsByClassName('btn-danger');
for (let i = 0; i < removeCartItemButtons.length;  i++){
	let button = removeCartItemButtons[i]
	button.addEventListener('click', function(event){
		let buttonClicked = event.target
		buttonClicked.parentElement.parentElement.remove()	
	})
}*/
