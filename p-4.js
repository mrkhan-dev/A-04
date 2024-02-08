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

const inputObj = password({
  name: "rahat",
  birthYear: 2004,
  siteName: "Facebook",
});
console.log(inputObj);
