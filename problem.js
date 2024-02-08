function calculateMoney(ticket) {
  const ticketPrice = 120;
  const securityBill = 500;
  const stuff = 8;
  const stuffLunchBill = 50 * stuff;

  if (ticket < 0) {
    return "Only positive number allowed";
  }
  const ticketTotal = ticket * ticketPrice;
  const dailyIncome = ticketTotal - (securityBill + stuffLunchBill);
  return dailyIncome;
}

// problem 2

// function checkName(names) {
//   const characters = ["a", "y", "e", "o", "u", "w"];
//   const lastLetter = names.length - 1;
//   if (characters.includes(lastLetter)) {
//     return "good name";
//   } else if (typeof names !== "string") {
//     return "inv";
//   } else {
//     return "bad name";
//   }
// }

// const checkNames = checkName("ma");
// console.log(checkNames);

// problem 3
function deleteInvalids(array) {
  const filter = [];
  for (const item of array) {
    if (typeof item === "number" && !isNaN(item)) {
      filter.push(item);
    }
  }
  return filter;
}

// problem 4
