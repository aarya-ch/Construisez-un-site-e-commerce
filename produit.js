let removeCartItemButtons = document.getElementsByClassName('btn-danger');
for (let i = 0; i < removeCartItemButtons.length;  i++){
	let button = removeCartItemButtons[i]
	button.addEventListener('click', function(event){
		let buttonClicked = event.target
		buttonClicked.parentElement.parentElement.remove()	
	})
}

let products = JSON.parse(localStorage.getItem('productsInCart'));

for (let product of products){
	let img = document.querySelector(".cart-item-image");
	document.querySelector(".cart-item-title").innerText = product.name;
	document.querySelector(".price").innerText = product.price;
	img.src = product.image;
	console.log(product)
}
