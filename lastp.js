// function monthlySavings(arr, livingCost) {
//   let savings = 0;
//   const highestPayment = 300;
//   const incomeTax = (20 / 100) * highestPayment;
//   for (const items of arr) {
//     if (items >= highestPayment) {
//       savings += incomeTax;
//     }
//   }
//   return savings;
// }

// const savings = monthlySavings([1000, 2000, 3000], 5400);
// console.log(savings);
function monthlySavings(arr, livingCost) {
  if (typeof livingCost !== "number" && typeof arr !== Array) {
    return false;
  }
  let highestPayment = 3000;
  const incomeTax = (20 / 100) * highestPayment;
  let savings = 0;
  for (const item of arr) {
    if (item >= highestPayment) {
      const tax = item - incomeTax;
      savings += tax;
    } else if (livingCost >= 10000) {
      return "Earn More";
      // } else if (typeof livingCost === "string") {
      //   return "invalid";
      // } else {
      //   savings += item;
    }
  }
  return savings - livingCost;
}

const savings = monthlySavings(900, 2700, 3400, 10000);
console.log(savings);
