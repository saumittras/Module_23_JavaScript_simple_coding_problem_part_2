const products = [
  { name: "shampoo", price: 300 },
  { name: "chiruini", price: 100 },
  { name: "shirt", price: 700 },
  { name: "pant", price: 1200 },
];

function getShoppintTotal(products) {
  let total = 0;
  for (const product of products) {
    total += product.price;
  }

  return total;
}

const total = getShoppintTotal(products);
console.log("total ajke khosabe: ", total);
