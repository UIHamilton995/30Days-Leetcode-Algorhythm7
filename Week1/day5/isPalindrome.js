function isPalindrome(x) {
  // Convert the number to a string first
  x = x.toString();

  // Compare the original string with its reversed version
  if (x === x.split("").reverse().join("")) {
      return true;
  }
  return false;
};

/* ------------------------------------- OR ------------------------------------------- */

function isPalindrome(x) {
  let reversed = x.toString().split("").reverse().join("")

  return x.toString() === reversed ? true : false
}

/* ------------------------------------- OR ------------------------------------------- */

var isPalindrome = function(x) {
  return String(x).split("").reverse().join("") == x;
};

// ⚡ The Hidden Power: Why it Returns true or false Without Saying “if”

// When you write:

// return something == somethingElse;


// JavaScript evaluates the expression (something == somethingElse) and automatically gives you the boolean value — either true or false.

// It’s not magic.
// It’s just how comparison operators (==, ===, >, <, etc.) work in JavaScript.

// They always return a boolean.