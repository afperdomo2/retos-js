function groupProducts(products, category) {
  const productsByCategory = [];
  let totalPrice = 0;

  products
    .filter((product) => product.category === category)
    .map((product) => {
      productsByCategory.push(product.name);
      totalPrice += product.price;
    });

  return {
    products: productsByCategory.join(", "),
    totalPrice: parseInt(totalPrice),
  };
}

const products = [
  { name: "Smartphone", category: "Electronics", price: 800 },
  { name: "Laptop", category: "Electronics", price: 1200 },
  { name: "Shirt", category: "Clothing", price: 50 },
  { name: "Pants", category: "Clothing", price: 100 },
];

console.log(groupProducts(products, "Electronics"));
