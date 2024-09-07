const jim = 56;
const tim = 89;
const kim = 68;

function maxNumOf3(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    return num1;
  } else if (num2 > num1 && num2 > num3) {
    return num2;
  } else {
    return num3;
  }
}

const maxof3 = maxNumOf3(jim, tim, kim);
console.log("The max number from number of 3 is: ", maxof3);
