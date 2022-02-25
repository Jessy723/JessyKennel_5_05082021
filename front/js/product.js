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

  // Couleurs produit //

  for (const colors of produit.colors) {
    console.table(colors);
    const productColors = document.createElement("option");
    document.querySelector("#colors").appendChild(productColors);
    productColors.value = colors;
    productColors.innerHTML = colors;
  }

  // Panier //

  const button = document.getElementById("addToCart");
  button.addEventListener("click", function () {
    window.localStorage.panier = JSON.stringify(produit);

    function addToCart(produit) {
      const btn_envoyerPanier = document.querySelector("#addToCart");
    }

    // Couleur article //

    const choixCouleur = colorPicked.value;

    // Nombre d'articles //

    const choixQuantite = quantityPicked.value;
  });
});
