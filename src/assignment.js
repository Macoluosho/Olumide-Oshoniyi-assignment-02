// ========================
// DO NOT EDIT THIS BLOCK
const assignment = {};
// ========================


/**
 * Challenge - 1
 * 
 * Calculate and return the sum of the numbers in an array.
 * If you did Challenge - 1, remove the comment in the line just after this function
 * 
 * @param {Array} arrayOfNumbers the array of numbers to sum
 * @returns number the sum of the numbers
 */
function sumOfNumbers(arrayOfNumbers) {
  var sum = 0
  for (let i = 0; i < arrayOfNumbers.length; i++) {
// first check that the indexed item is an integer
    if (isNaN(arrayOfNumber[i]) {
      sum = sum + 0;
    }
    else {//if it is a number do a simple addition
      sum = sum + arrayOfNumbers [i];
    }
  }
  return sum;
}

/**
 * Challenge - 2
 * 
 * Count all even numbers within an array of numbers.
 * If you did Challenge - 2, remove the comment in the line just after this function
 * 
 * @param {Array} arrayOfNumbers the array containing even or non-even numbers
 * @returns number the count of even numbers
 */
function countEvenNumbers(arrayOfNumbers) {
  var countEven = 0
  for (let i = 0; i < arrayOfNumbers.length; i++) {
  //first check that the indexed item is an integer
    if (isNaN(arrayOfNumber[i]) {
      countEven = countEven + 0;
    }
    else if (arrayNumbers[i] % 2 == 0){//if it is a number, check if it is divisible by 2
      countEven = countEven + 1;
    }
    else{//if it is a number, check if it is not divisible by 2
      countEven = countEven + 0;
    }
  }
  return countEven;
}

/**
 * Challenge - 3
 * 
 * Given an array of numbers representing temperatures in Celsius,
 * convert each number to Fahrenheit and return a new array containing the converted
 * temperatures in Fahrenheit. Decimal figures in the converted values in Fahrenheit should be removed.
 * E.g 51.21 should just be 51 (hint: Math.trunc(...) function)
 * If you did Challenge - 3, remove the comment in the line just after this function
 * 
 * See https://www.thoughtco.com/celcius-to-farenheit-formula-609227 for the conversion formula
 * 
 * @param {Array} arrayOfNumbers the array containing temperatures in Celsius to be converted
 * @returns Array the converted temperatures in Fahrenheit
 */
function celsiusToFahrenheit(arrayOfNumbers) {
  var fahrenheitArray = Array();
  var fahrenheitArray = [];
  
  for (let i = 0; i < arrayOfNumbers.length; i++) {
    // first check that the indexed item is an integer
    if (isNaN(arrayOfNumber[i]) {
      var fah = 0;
      //fahrenheitArray[i] = fah;
      fahrenheitArray.push(fah);
    }
    else {//if it is a number do a simple addition
      var fah = (1.8 *arrayOfNumber[i]) + 32;
      //fahrenheitArray[i] = fah;
      fahrenheitArray.push(Math.trunc(fah));
    }
  }
  return sum;
}
// assignment.celsiusToFahrenheit = celsiusToFahrenheit;


// ========================
// DO NOT EDIT THIS BLOCK
module.exports = assignment;
// ========================

