// Récupération des produits de l'API //

var str = window.location.href;
var url = new URL(str);

var id = url.searchParams.get("id");
console.log(id);

async function getarticle() {
  var articlesCatch = await fetch("http://localhost:3000/api/products/" + id);
  return await articlesCatch.json();
}
getarticle().then((produit) => {
  console.log(produit);

  // Description //

  const description = document.getElementById("description");
  description.innerHTML = produit.description;

  // Image //

  const img = document.querySelector(".item__img");
  img.innerHTML = `<img src="${produit.imageUrl}" alt="${produit.altTxt}">`;

  // Nom produit //

  const productName = document.getElementById("title");
  productName.innerHTML = produit.name;

  // Prix produit //

  const productPrice = document.getElementById("price");
  productPrice.innerHTML = produit.price;
});
