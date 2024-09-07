const heights = [65, 66, 72, 78, 60, 68, 99];

function tallestHeight(heights) {
  let tallest = heights[0];
  for (const height of heights) {
    if (height > tallest) {
      tallest = height;
    }
  }
  return tallest;
}

console.log(tallestHeight(heights));
