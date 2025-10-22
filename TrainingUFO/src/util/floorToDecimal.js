export function floorToDecimal(num, precision) {
  const order = Math.pow(10, precision);
  return Math.floor(num * order) / order;
}

export function floorToTenth(num) {
  return floorToDecimal(num, 1);
}

export function floorToHundredth(num) {
  return floorToDecimal(num, 2);
}