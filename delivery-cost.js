function deliveryCost(tShirtQuantity) {
  //delivery charges
  const chargeUnder100 = 100;
  const chargeUnder200 = 80;
  const chargeOver200 = 50;

  //error handling
  if (typeof tShirtQuantity != "number") {
    return "invalid quantity";
  } else if (tShirtQuantity <= 0) {
    return "increase quantity";
  }
  //conditions
  //less than 100
  else if (tShirtQuantity <= 100) {
    const totalCharges = tShirtQuantity * chargeUnder100;
    return totalCharges;
  }
  //over 100 but less than 200
  else if (tShirtQuantity <= 200) {
    const furthurQuantity = tShirtQuantity - 100;
    const totalChargesFor100 = 100 * chargeUnder100;
    const totalChargesOver100 = furthurQuantity * chargeUnder200;
    const totalCharges = totalChargesFor100 + totalChargesOver100;
    return totalCharges;
  }
  //over 200
  else if (tShirtQuantity > 200) {
    const furthurQuantity = tShirtQuantity - 200;
    const totalChargesFor100 = 100 * chargeUnder100;
    const totalChargesOver100 = 100 * chargeUnder200;
    const totalChargesOver200 = furthurQuantity * chargeOver200;
    const totalCharges =
      totalChargesFor100 + totalChargesOver100 + totalChargesOver200;
    return totalCharges;
  }
}

let tShirtCount = "a";
const calculatedDeliveryCharges = deliveryCost(tShirtCount);
console.log(calculatedDeliveryCharges);
