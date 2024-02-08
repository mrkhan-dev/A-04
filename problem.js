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

function checkName(names) {
  if (typeof names !== "string") {
    return "invalid";
  }
  const characters = ["a", "y", "e", "o", "u", "w"];
  const lastLetter = names.charAt(names.length - 1);
  if (characters.includes(lastLetter)) {
    return "good name";
  } else {
    return "bad name";
  }
}

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
function password(obj) {
  const {name, birthYear, siteName} = obj;
  const userBirthYear = JSON.stringify(birthYear);
  if (userBirthYear.length < 4) {
    return "invalid";
  }
  const siteNames =
    siteName.charAt(0).toUpperCase() + siteName.slice(1).toLowerCase();
  const generatePassword = siteNames + "#" + name + "@" + birthYear;
  return generatePassword;
}

// problem 5
function monthlySavings(arr, livingCost) {
  if (typeof livingCost !== "number") {
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
