var reverse = function(x) {
  // Step 1: Check if number is negative and store its sign
  const sign = x < 0 ? -1 : 1;

  // Convert to string, remove the negative sign if any
  let rev = Math.abs(x).toString().split("").reverse().join("");

  // Convert back to number and restore sign
  rev = parseInt(rev) * sign;

  // Handle overflow (for 32-bit signed integer range)
  if (rev < -(2 ** 31) || rev > 2 ** 31 - 1) return 0;

  return rev;
};


/** ------------------------------------------ OR ------------------------------------------------- */


var reverse = function(x) {
  let rev = 0; // this will hold our reversed number
  const sign = x < 0 ? -1 : 1; // store the original sign

  x = Math.abs(x); // work only with positive part of the number

  // loop until x becomes 0
  while (x > 0) {
      const lastDigit = x % 10; // extract the last digit
      rev = rev * 10 + lastDigit; // shift rev left by one place and add the digit
      x = Math.floor(x / 10); // remove the last digit from x
  }

  // restore the sign
  rev = rev * sign;

  // handle 32-bit integer overflow (LeetCode-specific)
  if (rev < -(2 ** 31) || rev > 2 ** 31 - 1) return 0;

  return rev;
};
