function password(obj) {
  const {name, birthYear, siteName} = obj;
  const siteNames =
    siteName.charAt(0).toUpperCase() + siteName.slice(1).toLowerCase();
  const generatePassword = siteNames + "#" + name + "@" + birthYear;
  if (obj.birthYear.length < 999) {
    return "Invalid";
  }
  return generatePassword;
}

const inputObj = password({
  name: "rahat",
  birthYear: 200,
  siteName: "Facebook",
});
console.log(inputObj);
