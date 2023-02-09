

const _ = require('lodash');

function passwordGenerator(charsQuantity) {
  // 사례 1
  if (!_.isInteger(charsQuantity)) {
    return 'Not an Integer'
  }
  // 사례 2
  else if (charsQuantity < 3) {
    return 'Minimum length allowed: 3'
  } 
  // 사례 3
  else {
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const digits = "0123456789";
  const symbols = "~!@#$%^&*_-+=`|(){}[]:;'\"<>,.?/";
  let password = "";

  password += _.sample(uppercase);
  password += _.sample(lowercase);
  password += _.sample(digits);
  password += _.sample(symbols);
    
  for (let i = password.length; i < charsQuantity; i++) {
    const charSet = uppercase + lowercase + digits + symbols;
    password += _.sample(charSet);
  }
    
  password = password.slice(0, charsQuantity)
    
  return password;
  }
}


module.exports = {
    passwordGenerator
};

console.log(passwordGenerator(null))
console.log(passwordGenerator(undefined))
console.log(passwordGenerator({}))
console.log(passwordGenerator([]))
console.log(passwordGenerator(''))
console.log(passwordGenerator(' '))
console.log(passwordGenerator('abc'))
console.log(passwordGenerator('16.1'))
console.log(passwordGenerator(16.1))
console.log(passwordGenerator(2))
console.log(passwordGenerator(3))
// console.log(passwordGenerator(6))