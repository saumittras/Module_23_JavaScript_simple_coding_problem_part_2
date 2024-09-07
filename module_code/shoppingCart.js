const products = [
  { name: "shampoo", price: 300, quantity: 2 },
  { name: "chiruini", price: 100, quantity: 3 },
  { name: "shirt", price: 700, quantity: 5 },
  { name: "pant", price: 1200, quantity: 1 },
];

function cartTotal(products) {
  let total = 0;
  for (const product of products) {
    total += product.price * product.quantity;
  }
  return total;
}
console.log(cartTotal(products));
