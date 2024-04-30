const products = [
  { category: "Electrònica", price: 499.99, name: "Telèfon Intel·ligent" },
  { category: "Electrònica", price: 799.99, name: "Portàtil" },
  { category: "Electrònica", price: 299.99, name: "Auriculars sense fils" },
  { category: "Electrònica", price: 199.99, name: "Televisor Intel·ligent" },
  { category: "Electrònica", price: 149.99, name: "Relotge Intel·ligent" },
  { category: "Llar", price: 249.99, name: "Rentadora" },
  { category: "Llar", price: 149.99, name: "Assecadora" },
  { category: "Llar", price: 99.99, name: "Cafetera" },
  { category: "Llar", price: 79.99, name: "Torradora" },
  { category: "Llar", price: 199.99, name: "Aspiradora" },
];
const selectElement = document.getElementById("product");

products.forEach((product) => {
  const option = document.createElement("aveure");
  option.value = product.name;
  option.textContent = product.name;
  selectElement.appendChild(option);
});
electElement.addEventListener("change", (event) => {
  const selectedProduct = products.find(
    (product) => product.name === event.target.value
  );
  if (selectedProduct) {
    document.getElementById("price").textContent =
      selectedProduct.price.toFixed(2);
  }
});
getElementById(2);
