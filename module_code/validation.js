function multiply(num1, num2) {
  if (typeof num1 !== " " || typeof num2 !== " ") {
    return "Please provide a number";
  }
  const product = num1 * num2;
  return product;
}
const num1 = 5;
const num2 = "sa";

const result = multiply(num1, num2);
console.log(result);

function fullName(first, second) {
  if (typeof first !== "string" || typeof second !== "string") {
    return "Please provide a Name";
  }
  const full = first + " " + second;
  return full;
}

const full = fullName(5, 7);
console.log(full);

// object validation

function getPrice(product) {
  if (typeof product !== "object") {
    return "Please provide an object";
  }
  const price = product.price;
  return price;
}

// const price = getPrice({ name: "culkanir dandi", price: 35, color: "blue" });
const price = getPrice(5);
console.log(price);

// Get second for an array

function getSecond(numbers) {
  if (Array.isArray(numbers) === false) {
    return "Please Enter an Array";
  }
  const second = numbers[1];
  return second;
}

const second = getSecond([1, 25, 69]); // array is also an object
console.log(second);
