let products = JSON.parse(localStorage.getItem('productsInCart'));

for(let product of products){
	let img = document.querySelector(".cart-item-image");
	document.querySelector(".cart-item-title").innerText = product.name;
	document.querySelector(".price").innerText = product.price;

	img.src = product.image;
}
