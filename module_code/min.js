const prices = [20000, 16000, 50000, 100000, 12000, 30000, 35000];

function getMin(numbers) {
  let minNumber = numbers[0];
  for (const number of numbers) {
    if (number < minNumber) {
      minNumber = number;
    }
  }
  return minNumber;
}

const min = getMin(prices);
console.log(min);
