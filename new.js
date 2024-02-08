function monthlySavings(arr, livingCost) {
  let payment = 3000;
  let savings = 0;
  for (const item of arr) {
    if (item >= payment) {
      const tax = (20 / 100) * item;
      const mainIncome = tax - item;
      const totalSavings = livingCost - mainIncome;
      const newSavings = savings - totalSavings;
      savings += newSavings;
    }
  }
  return savings;
}

const savings = monthlySavings([1000, 2000, 3000], 5400);
console.log(savings);
