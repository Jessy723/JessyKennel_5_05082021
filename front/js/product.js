// Récupération des produits de l'API //

async function getarticles() {
  var articlesCatch = await fetch("http://localhost:3000/api/products");
  return await articlesCatch.json();
}
