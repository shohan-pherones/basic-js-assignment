function seerToMon(seer) {
  if (typeof seer != "number") {
    return "invalid number";
  } else if (seer < 40) {
    return "increase number";
  }
  const totalMon = seer / 40;
  return totalMon;
}

let mySeer = 39;
const calculatedMon = seerToMon(mySeer);
console.log(calculatedMon);
