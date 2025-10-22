/**
 * Single Number — Beginner-Friendly (Nested Loop Logic)
 * ----------------------------------------------------
 * Approach: Compare each number with all others.
 * If a number appears only once, that’s our answer.
 */
var singleNumber = function(nums) {
  // Variable to store the unique number
  let counter = 0;

  // Outer loop → pick one number at a time
  for (let i = 0; i < nums.length; i++) {
      let isUnique = true; // Assume current number is unique

      // Inner loop → check current number against all others
      for (let j = 0; j < nums.length; j++) {
          if (i !== j && nums[i] === nums[j]) {
              // If we find a duplicate, mark as not unique
              isUnique = false;
              break; // No need to keep checking
          }
      }

      // If number stayed unique after checking all others
      if (isUnique) {
          counter = nums[i];
          break; // Found the answer — exit loop
      }
  }

  // Return the single number
  return counter;
};


/** ---------------------------------------------- OR ----------------------------------------------- */

// 🧠 PROBLEM: Find the number that appears only once in the array.
// Every other number appears exactly twice.
// Example: [4, 1, 2, 1, 2] → Output: 4

var singleNumber = function(nums) {
  // 💡 Step 1: Initialize result to 0.
  // We'll use this variable to "accumulate" results using XOR.
  let result = 0;

  // 🔍 Step 2: Loop through every number in the array
  for (let num of nums) {

      // 🧩 BITWISE CONCEPT — XOR (Exclusive OR)
      // ----------------------------------------------------
      // XOR compares each bit of two numbers:
      // - If the bits are DIFFERENT → result bit becomes 1
      // - If the bits are the SAME → result bit becomes 0
      //
      // Example:
      // 5 in binary  = 0101
      // 3 in binary  = 0011
      // ---------------
      // 5 ^ 3  = 0110 (which is 6)
      //
      // In short: XOR highlights differences and cancels similarities.

      // 🧙🏽‍♂️ The XOR Magic Trick (Why duplicates cancel out)
      // ----------------------------------------------------
      // Property #1: a ^ a = 0   (same numbers "cancel" each other)
      // Property #2: a ^ 0 = a   (0 does nothing to the number)
      //
      // So if every number appears twice except one,
      // XOR-ing everything together cancels all pairs, leaving the single one.
      //
      // Example dry run with nums = [4, 1, 2, 1, 2]:
      //
      // result = 0
      // 0 ^ 4 = 4       (first number)
      // 4 ^ 1 = 5
      // 5 ^ 2 = 7
      // 7 ^ 1 = 6       (1 cancels with the earlier 1)
      // 6 ^ 2 = 4       (2 cancels with the earlier 2)
      //
      // ✅ Final answer = 4
      //
      // The duplicates “zero out” each other’s bits, leaving only the unique one.

      // 🧮 Step 3: Apply XOR between current result and this number
      result ^= num; 
  }

  // 🏁 Step 4: Return the only number that wasn’t cancelled
  return result;
};

/** ---------------------------------------------- OR ----------------------------------------------- */


// 🧠 PROBLEM: Find the element that appears only once in the array.
// Every other element appears exactly twice.
// Example: [4, 1, 2, 1, 2] → Output: 4

var singleNumber = function(nums) {
  // ✅ Step 1: Create an empty object to act as a frequency map (hashmap)
  // We'll store each number as a "key" and how many times it appears as the "value"
  const count = {};

  // ✅ Step 2: Loop through every number in the input array
  for (let num of nums) {
      // The expression (count[num] || 0) means:
      // "If count[num] already exists, use that value; otherwise, use 0"
      //
      // Then we add 1 — effectively counting how many times each number appears.
      count[num] = (count[num] || 0) + 1;
  }

  // 🧩 Example dry run with nums = [4, 1, 2, 1, 2]:
  // count = {
  //   4: 1,  ← appears once
  //   1: 2,  ← appears twice
  //   2: 2   ← appears twice
  // }

  // ✅ Step 3: Loop through our count object to find the key with value 1
  for (let num in count) {
      // Remember: all keys from an object are stored as strings.
      // That’s why we return Number(num) to convert it back to a number type.
      if (count[num] === 1) return Number(num);
  }
};
