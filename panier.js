let products = JSON.parse(localStorage.getItem('productsInCart'));

for (let product of products){
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


	itemImage.src = product.image;
	itemTitle.textContent = product.name;
	itemPrice.textContent = product.price;
	product.price = parseInt(product.price);
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
for (let i = 0; i < products.length; i++) {
    total += products[i].price;
}

let totale = document.querySelector(".cart-total-price");
totale.textContent = total + ' €';

// Formulaire //

function validation(){
	let nom = document.getElementById("nom").value;
	let prenom = document.getElementById("prenom").value;
	let email = document.getElementById("e-mail").value;
	let telephone = document.getElementById("telephone").value;
	let adresse = document.getElementById("adresse").value;
	let codePostal = document.getElementById("code-postal").value;
	let ville = document.getElementById("ville").value;
	
	let nomCheck = /^[A-Za-z]{2,30}$/;
	let prenomCheck = /^[A-Za-z]{2,30}$/;
	let emailCheck = /^[A-Za-z-_.0-9]{3,}@[a-z]{3,}[.]{1}[a-z]{2,3}$/;
	let telephoneCheck = /^0[0-9]{9}$/; 
	let adresseCheck = /^[A-Za-z0-9]$/;
	let codePostalCheck = /^[0-9]{5,30}$/;
	let villeCheck = /^[A-Za-z-]{1,38}$/;

	if(nomCheck.test(nom)){
		document.getElementById('erreurnom').innerHTML = " ";
	}else{
		document.getElementById('erreurnom').innerHTML = "* Nom invalide ";
		return false;
	}

	if(prenomCheck.test(prenom)){
		document.getElementById('erreurprenom').innerHTML = " ";
	}else{
		document.getElementById('erreurprenom').innerHTML = "* Prénom invalide ";
		return false;
	}

	if(emailCheck.test(email)){
		document.getElementById('erreuremail').innerHTML = " ";
	}else{
		document.getElementById('erreuremail').innerHTML = "* Adresse e-mail invalide ";
		return false;
	}

	if(telephoneCheck.test(telephone)){
		document.getElementById('erreurtelephone').innerHTML = " ";
	}else{
		document.getElementById('erreurtelephone').innerHTML = "* Numéro de Téléphone invalide ";
		return false;
	}

	if(adresseCheck.test(adresse)){
		document.getElementById('erreuradresse').innerHTML = " ";
	}else{
		document.getElementById('erreuradresse').innerHTML = "* Adresse invalide ";
		return false;
	}

	if(codePostalCheck.test(codePostal)){
		document.getElementById('erreurcodepostal').innerHTML = " ";
	}else{
		document.getElementById('erreurcodepostal').innerHTML = "* Code Postal invalide ";
		return false;
	}

	if(villeCheck.test(ville)){
		document.getElementById('erreurville').innerHTML = " ";
	}else{
		document.getElementById('erreurville').innerHTML = "* Ville invalide ";
		return false;
	}
}
