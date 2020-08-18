let params = new URLSearchParams(window.location.search);
let total = params.get("total");
let totale = document.getElementById("prixTotal");
totale.textContent = total + " €";

let order = params.get("order");
document.getElementById("order").textContent = order;
