const validatePassword = (somePassword) => {
  
  let hasLowerCase = false;
  let hasUpperCase = false;
  let hasNumeric = false;
  let hasSpecial = false;
  
  if (somePassword.length < 8) {
    return false;
  }  

  for (let i = 0; i < somePassword.length; i++) {
    const isLower = /^[a-z]*$/.test(somePassword[i]);
    const isUpper = /^[A-Z]*$/.test(somePassword[i]);
    const isNumeric = /\d/.test(somePassword[i]);
    const isSpecial = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(somePassword[i]);
      
    if (isSpecial) hasSpecial = true;
    if (isLower) hasLowerCase = true;
    if (isUpper) hasUpperCase = true;
    if (isNumeric) hasNumeric = true;
  }
  
  if (hasLowerCase && hasUpperCase && hasNumeric && hasSpecial) {
    return true;
  }
  
  return false;

}


module.exports = validatePassword

