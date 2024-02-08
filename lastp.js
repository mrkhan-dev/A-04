function monthlySavings(arr, livingCost) {
  if (typeof livingCost !== "number" && Array.isArray(arr)) {
    return "invalid input";
  }
  let highestPayment = 3000;
  const incomeTax = (20 / 100) * highestPayment;
  let savings = 0;
  for (const item of arr) {
    if (item >= highestPayment) {
      const tax = item - incomeTax;
      savings += tax;
    } else if (livingCost >= 10000) {
      return "earn more";
    } else {
      savings += item;
    }
  }
  return savings - livingCost;
}
const income = monthlySavings("shahjalal", 5000);
console.log(income);
