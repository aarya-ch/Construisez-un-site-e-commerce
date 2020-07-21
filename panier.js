let produits = JSON.parse(localStorage.getItem('productsInCart'));

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

function validation(){
	let nom = document.getElementById("nom").value;
	let prenom = document.getElementById("prenom").value;
	let email = document.getElementById("e-mail").value;
	let adresse = document.getElementById("adresse").value;
	let ville = document.getElementById("ville").value;
	
	let nomCheck = /^[A-Za-z]{2,30}$/;
	let prenomCheck = /^[A-Za-z]{2,30}$/;
	let emailCheck = /^[A-Za-z-_.0-9]{3,}@[a-z]{3,}[.]{1}[a-z]{2,3}$/;
	let adresseCheck = /^[A-Za-z0-9]/;
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

	if(adresseCheck.test(adresse)){
		document.getElementById('erreuradresse').innerHTML = " ";
	}else{
		document.getElementById('erreuradresse').innerHTML = "* Adresse invalide ";
		return false;
	}

	if(villeCheck.test(ville)){
		document.getElementById('erreurville').innerHTML = " ";
	}else{
		document.getElementById('erreurville').innerHTML = "* Ville invalide ";
		return false;
	}
};

let nom = document.getElementById("nom").value;
let prenom = document.getElementById("prenom").value;
let email = document.getElementById("e-mail").value;
let adresse = document.getElementById("adresse").value;
let ville = document.getElementById("ville").value;
let btnPurchase = document.getElementById("btn-purchase");

btnPurchase.addEventListener('click', function (e) {
    e.preventDefault();
    infoFormulaire = new Object();
    infoFormulaire.contact = { 
        firstName: prenom.value,
        lastName: nom.value,
        email: email.value,
        address: adresse.value,
        city: ville.value
  	 };
  	infoFormulaire.products = [];
    
    for (let i = 0; i < produits.length; i++) {
        infoFormulaire.products.push({id: produits[i].id});
    }
});
