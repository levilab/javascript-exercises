const add = function(a,b) {
  return a+b
};

const subtract = function(a,b) {
	return a-b
};

const sum = function(array) {
	return array.reduce((total, num) => {
    return total + num
  },0)
};

const multiply = function(arrNum) {
  return arrNum.reduce((total, num) => {
    return total * num
  },1)
};

const power = function(a,b) {
  return a**b
	
};

const factorial = function(num) {
  let total = 1;
  if (num === 0 || num ===1) {return 1}  
  else {
  for (let i = 1; i<=num;i++){
    console.log(total)
    total *= i
    } 
  }
  return total
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
