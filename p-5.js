function monthlySavings(arr, livingCost) {
  let tax = 0;
  for (const item of arr)
    if (item >= 3000) {
      tax = tax + item;
    }
  return tax;
}

const input = monthlySavings([1000, 2000, 3000]);
console.log(input);
