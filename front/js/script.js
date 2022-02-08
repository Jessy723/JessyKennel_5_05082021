console.log("article1");

let variable = "article1";

console.log(variable);

// Récupération des produits de l'API //

async function getarticles() {
  var articlesCatch = await fetch("http://localhost:3000/api/products");
  return await articlesCatch.json();
}
getarticles().then((produits) => {
  console.log(produits);
  let lesitems = document.getElementById("items");
  console.log(lesitems);

  lesitems.innerHTML = "salut";
  // Faire une boucle sur les produits, utilisé for //
});
