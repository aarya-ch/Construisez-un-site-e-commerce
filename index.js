let url = "http://localhost:3000/api/teddies";

fetch(url)
	.then((response) =>
		response.json().then((teddies) => {
		for (let teddy of teddies){
			
			let produits = document.getElementById('produits');
			let produit = document.createElement("div");
			let image = document.createElement("img");
			let nom = document.createElement("h2");
			let prix = document.createElement("h3");
			let btn = document.createElement("a");

			produit.setAttribute("class", "produit");
			btn.setAttribute("class", "btn");

			produits.appendChild(produit);
			produit.appendChild(image);
			produit.appendChild(nom);
			produit.appendChild(prix);
			produit.appendChild(btn);

			image.src = teddy.imageUrl;
			nom.textContent = teddy.name;
			prix.textContent = teddy.price += " €";
			btn.textContent = "Voir produit";
			btn.href = "produit.html?id=" + teddy._id;
		};
		})
	)
	.catch((err) => console.log("Erreur : " + err));



