/**
 *
 * chair --> 3cft
 * table --> 10cft
 * bed --> 50cft
 */

function woodQCalculater(chair, table, bed) {
  const perChairWood = 3;
  const perTableWood = 10;
  const perBedWood = 50;

  const totalWood =
    perChairWood * chair + perTableWood * table + perBedWood * bed;
  return totalWood;
}

console.log(woodQCalculater(3, 5, 4), "CFT wood needed for chair");
