/**
Task -2:
Find the friend with the smallest name.
const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
 * 
 */
const names = ["rahim", "robin", "rafi", "ron", "rashed", "ri"];

function shortString(names) {
  let shorestString = names[0];
  for (const name of names) {
    if (shorestString.length > name.length) {
      shorestString = name;
    }
  }
  return shorestString;
}

console.log("The shortest name is: ", shortString(names));
