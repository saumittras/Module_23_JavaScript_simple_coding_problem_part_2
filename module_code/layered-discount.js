/**
 *
 * first100 --> 100
 * 101To200 --> 90
 * above200 -->70
 */

function layerDiscountedTotal(quantity) {
  const first100Price = 100;
  const first200Price = 90;
  const above200Price = 70;

  if (quantity <= 100) {
    const total = quantity * first100Price;
    return total;
  } else if (quantity <= 200) {
    const first100Total = quantity * first100Price;
    const remainingQuantity = quantity - 100;
    const total = first100Total + remainingQuantity * first200Price;
    return total;
  } else {
    const first100Total = quantity * first100Price;
    const first200Total = quantity * first200Price;
    const remainingQuantity = quantity - 200;
    const total =
      first100Total + first200Total + remainingQuantity * first200Price;
    return total;
  }
}
console.log(layerDiscountedTotal(300));
