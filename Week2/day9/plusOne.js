// Manual Carry
function plusOne(digits) {
  // Start from the last index (the least significant digit)
  for (let i = digits.length - 1; i >= 0; i--) {

      // Add 1 to the current digit
      digits[i] += 1;

      // If the result is less than 10, it means no carry was generated
      // So we can immediately return the array as the work is done
      if (digits[i] < 10) {
          return digits;
      }

      // If the digit becomes 10, we set it to 0 and loop again
      // The next iteration will handle the carry to the left digit
      digits[i] = 0;
  }

  // If the loop finishes, it means we had a carry all through (e.g. [9,9,9])
  // In that case, we insert 1 at the start to represent the extra carry
  digits.unshift(1);

  // Finally, return the updated array
  return digits;
};



/** ------------------------------------------ OR ----------------------------------------------- */

// The BigInt version
// Add 1 to an integer represented as an array of decimal digits using BigInt.
// Example: [1,2,3] -> [1,2,4]
// NOTE: This approach converts the digits into a string, uses BigInt for the math,
// then converts back to an array of digits.
var plusOne = function (digits) {
  // 1) Convert the digits array to a contiguous string.
  //    digits.join("") turns [0,0,1,2,3] -> "00123".
  //    BigInt("00123") parses fine and becomes 123n (leading zeros dropped by BigInt).
  let numToStr = digits.join("");

  // 2) Convert the decimal string into a BigInt and add 1n (BigInt literal).
  //    BigInt handles integers of arbitrary size (limited by memory), so this
  //    avoids manual carry propagation.
  //    We use the `n` suffix for the literal 1 (1n) to ensure it's a BigInt.
  let bigNumber = BigInt(numToStr) + 1n;

  // (Optional) Debug log so you can see the original string and the BigInt result
  // while developing. Remove or disable in production.
  console.log(numToStr, bigNumber);

  // 3) Convert the BigInt back to a base-10 string and split into characters,
  //    then map each character to a number.
  //    String(big) produces something like "124" and .split("") -> ["1","2","4"].
  //    .map(Number) turns each string digit into a numeric digit [1,2,4].
  return String(bigNumber).split("").map(Number);
};
