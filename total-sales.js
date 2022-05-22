function totalSales(shirtQuantity, pantQuantity, shoeQuantity) {
  const singleShirtPrice = 500;
  const singlePantPrice = 1000;
  const singleShoePrice = 1500;

  const totalShirtPrice = shirtQuantity * singleShirtPrice;
  const totalPantPrice = pantQuantity * singlePantPrice;
  const totalShoePrice = shoeQuantity * singleShoePrice;

  const totalPrice = totalShirtPrice + totalPantPrice + totalShoePrice;
  return totalPrice;
}

let shirtCount = 11;
let pantCount = 18;
let shoeCount = 7;
const calculatedTotalPrice = totalSales(shirtCount, pantCount, shoeCount);
console.log(calculatedTotalPrice);
