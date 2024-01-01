function isArmstrongNumber(number) {
  const numStr = number.toString();
  const numDigits = numStr.length;
  let sum = 0;

  for (let i = 0; i < numDigits; i++) {
    const digit = parseInt(numStr[i]);
    sum += Math.pow(digit, numDigits);
  }

  return sum === number;
}

// Example: Check if 153 is an Armstrong number
const numberToCheck = 153;
if (isArmstrongNumber(numberToCheck)) {
  console.log(`${numberToCheck} is an Armstrong number.`);
} else {
  console.log(`${numberToCheck} is not an Armstrong number.`);
}
