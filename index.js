// const validatePassword = (somePassword) => {
  
//   let hasLowerCase = false;
//   let hasUpperCase = false;
//   let hasNumeric = false;
//   let hasSpecial = false;
  
//   if (somePassword.length < 8) {
//     return false;
//   }  

//   for (let i = 0; i < somePassword.length; i++) {
//     const isLower = /^[a-z]*$/.test(somePassword[i]);
//     const isUpper = /^[A-Z]*$/.test(somePassword[i]);
//     const isNumeric = /\d/.test(somePassword[i]);
//     const isSpecial = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(somePassword[i]);
      
//     if (isSpecial) hasSpecial = true;
//     if (isLower) hasLowerCase = true;
//     if (isUpper) hasUpperCase = true;
//     if (isNumeric) hasNumeric = true;
//   }
  
//   if (hasLowerCase && hasUpperCase && hasNumeric && hasSpecial) {
//     return true;
//   }
  
//   return false;

// }



function isLowerCase(pwd, index) {
  return pwd.charCodeAt(index) >= 97 && pwd.charCodeAt(index) <= 122
}
console.log(isLowerCase('hELLO', 0)) // should return true
console.log(isLowerCase('hEllo', 1)) // should return false



function isUpperCase(pwd, index) {
  return pwd.charCodeAt(index) >= 65 && pwd.charCodeAt(index) <= 90
}
console.log(isUpperCase('WElcome', 0)) // should return true
console.log(isUpperCase('wElcome', 4)) // should return false



function isNumeric(pwd, index) {
  return !isNaN(pwd[index])
}
console.log(isNumeric('ppp4', 3)) // should return true
console.log(isNumeric('pppp%', 0)) // should return false



function validatePassword(pwd) {
  
  if (pwd.length < 8) return false
  
  let upper = 0
  let lower = 0
  let numeric = 0
  let special = 0

 
  for (let i = 0; i < pwd.length; i++) {
    if (isLowerCase(pwd, i)) {
      lower++
    } else if (isUpperCase(pwd, i)) {
      upper++
    } else if (isNumeric(pwd, i)) {
      numeric++
    } else {
      special++
    }
  }

  
  return lower > 0 && upper > 0 && numeric > 0 && special > 0
}

 module.exports = validatePassword

