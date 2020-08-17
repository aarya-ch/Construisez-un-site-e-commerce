let params = new URLSearchParams(window.location.search);
let total = params.get("total");
let totale = document.getElementById("prixTotal");
totale.textContent = total + " €";

let order = params.get("order");
document.getElementById("order").textContent = order;

let contact;
if(localStorage.getItem("contact") !== null){
	contact = JSON.parse(localStorage.getItem("contact"));
}
