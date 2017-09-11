var adder = function(number1, number2) {

    return `The sum of the two values is ${ number1 + number2}`;
}

var miner = function(number1, number2) {
  return `The sum of the two values is ${ number2 - number1}`;
}

var multiplier = function(number1, number2) {
  return `The sum of the two values is ${ number1 * number2}`;
}

var divisor = function(number1, number2) {
  return `The sum of the two values is ${ number1 / number2}`;
}

/*
module.exports.adder = adder;
module.exports.miner = miner;
module.exports.multiplier = multiplier;
module.exports.divisor = divisor;
*/

module.exports.calc = {
   'adder': function(number1, number2) {
       return `The sum of the two values is ${ number1 + number2}`;
   },

    'miner': function(number1, number2) {
     return `The sum of the two values is ${ number2 - number1}`;
   },

    'multiplier': function(number1, number2) {
     return `The sum of the two values is ${ number1 * number2}`;
   },

    'divisor':  function(number1, number2) {
     return `The sum of the two values is ${ number1 / number2}`;
   }
}
