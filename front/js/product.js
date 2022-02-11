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

  lesitems.innerHTML = `
  
  `;
});
