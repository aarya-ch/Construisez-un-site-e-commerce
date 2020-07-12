let products = JSON.parse(localStorage.getItem('productsInCart'));

for(let product of products){
	let img = document.getElementsByClassName("cart-item-image");
	let titre = document.getElementsByClassName("cart-item-tile");
	let prix = document.getElementById("prix");


	img.src = product.image;
	titre.textContent = product.name;
	prix = product.price;

}







