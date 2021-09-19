let input = `Red Alder
Ash
Aspen
Basswood
Ash
Beech
Yellow Birch
Ash
Cherry
Cottonwood
Ash
Cypress
Red Elm
Gum
Hackberry
White Oak
Hickory
Pecan
Hard Maple
White Oak
Soft Maple
Red Oak
Red Oak
White Oak
Poplan
Sassafras
Sycamore
Black Walnut
Willow`.split(/\n/g);

let n = input.length;
let hash = new Map();
for (let i = 0; i < input.length; i++) {
  hash.has(input[i]) ? hash.set(input[i], hash.get(input[i]) + 1) : hash.set(input[i], 1);
}
let sort_list = [...hash].sort((a, b) => (a[0] > b[0] ? 1 : -1));
for (let i = 0; i < sort_list.length; i++) {
  console.log(`${sort_list[i][0]} ${((sort_list[i][1] / n) * 100).toFixed(4)}`);
}
