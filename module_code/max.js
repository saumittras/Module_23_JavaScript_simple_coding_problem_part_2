const disha = 95;
const salman = 99;

if (disha > salman) {
  console.log("Disha will get the strawberry");
} else {
  console.log("salman will eat the strawberry");
}

// inside a number

function getmax(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}
// function example one
const max = getmax(96, 79);
const max2 = getmax(56, 98);

console.log("max of two is: ", max);
console.log("max of two is: ", max2);
