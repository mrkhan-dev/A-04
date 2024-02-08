function monthlySavings(arr, livingCost) {
  let highestPayment = 3000;
  const incomeTax = (20 / 100) * highestPayment;
  let savings = 0;
  for (const item of arr) {
    if (item >= highestPayment) {
      const tax = item - incomeTax;
      savings += tax;
    } else {
      savings += item;
    }
  }
  return savings - livingCost;
}

const savings = monthlySavings([1000, 2000, 2500], 5000);
console.log(savings);
