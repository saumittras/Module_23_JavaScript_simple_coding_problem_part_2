/**
Task -1:
Find the lowest number in the array below.
const heights2 = [167, 190, 120, 165, 137];
 * 
 */

function lowestNumber(numbers) {
  let lowestNum = numbers[0];
  for (const number of numbers) {
    if (number < lowestNum) {
      lowestNum = number;
    }
  }
  return lowestNum;
}
const heights2 = [167, 190, 120, 11, 165, 137];

const height = lowestNumber(heights2);
console.log("The lowest number is: ", height);
