const convertToCelsius = function(temp) {
  const cTemp = (temp-32)*(5/9)
  const result = Number.isInteger(cTemp) ? parseInt(cTemp) : parseFloat(cTemp.toFixed(1))
  return result
};

const convertToFahrenheit = function(temp) {
  const fTemp = (temp*(9/5) + 32)
  const result = Number.isInteger(fTemp) ? parseInt(fTemp) : parseFloat(fTemp.toFixed(1))
  return result
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
