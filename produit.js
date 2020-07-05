let params = new URLSearchParams(window.location.search);
let idTeddy = params.get("id");
let url = "http://localhost:3000/api/teddies/" + idTeddy;

fetch(url)
	.then((response) =>
		response.json().then((teddy) => {
			let container = document.getElementById("container");
			let produit = document.createElement("div");
			let image = document.createElement("img");
			let nom = document.createElement("h2");
			let prix = document.createElement("h3");
			let description = document.createElement("div");
			let select = document.createElement("select");
			let btn = document.createElement("a");
			
			produit.setAttribute("class", "produit");
			btn.setAttribute("class", "btn");

			container.appendChild(produit);
			produit.appendChild(image);
			produit.appendChild(nom);
			produit.appendChild(prix);
			produit.appendChild(description);
			produit.appendChild(select);
			for (let color of teddy.colors){
				let option = document.createElement("option");
				select.appendChild(option);
				option.textContent = color;
			}
			produit.appendChild(btn);

			image.src = teddy.imageUrl;
			nom.textContent = teddy.name;
			prix.textContent = teddy.price += " €";
			description.textContent = teddy.description;
			btn.textContent = "Ajouter";
			btn.href = "panier.html";

			btn.addEventListener("click", () => {
				cartNumbers();
			})

			function cartNumbers() {
				let productNumbers = localStorage.getItem("cartNumbers");

				productNumbers = parseInt(productNumbers);

				if (productNumbers) {
					localStorage.setItem("cartNumbers", productNumbers + 1);
				}else{
					localStorage.setItem("cartNumbers", 1);
				}
			}
		})
	)
	.catch((err) => console.log("Erreur : " + err));





