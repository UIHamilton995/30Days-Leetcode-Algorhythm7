var climbStairs = function(n) {
  // 🧩 STEP 1: Handle the smallest cases directly
  // If there is 1 stair → only 1 way (just climb it once)
  // If there are 2 stairs → two ways ([1+1], [2])
  if (n <= 2) return n;

  // 🧩 STEP 2: Initialize variables for the previous two steps
  //
  // Here's the core pattern:
  //   ways(n) = ways(n - 1) + ways(n - 2)
  //
  // This means:
  //  - To reach step 'n', you could have come from (n - 1) by taking 1 step
  //  - OR you could have come from (n - 2) by taking a 2-step jump
  //
  // So we only need to remember the **number of ways to reach**
  // the last two steps before the current one.
  //
  // Let's name them:
  let oneStepBefore = 2; // 🪜 Ways to reach step 2
  let twoStepsBefore = 1; // 🪜 Ways to reach step 1

  // We'll use this variable to store the total ways to reach the current step
  let allWays = 0;

  // 🧩 STEP 3: Calculate the number of ways for every step from 3 up to n
  //
  // We’ll move up one stair at a time, each time reusing the results
  // from the previous two stairs — just like updating two memory slots.
  //
  // Think of it like sliding a 2-step window up the stairs.
  for (let i = 3; i <= n; i++) {
      // For the current stair 'i':
      // ways(i) = ways(i - 1) + ways(i - 2)
      allWays = oneStepBefore + twoStepsBefore;

      // 🌀 Now shift the window forward:
      //   - What was oneStepBefore becomes twoStepsBefore
      //   - allWays becomes the new oneStepBefore
      //
      // This keeps only the last two results in memory
      twoStepsBefore = oneStepBefore;
      oneStepBefore = allWays;
  }

  // 🧩 STEP 4: Return the total ways to reach the nth step
  return allWays;
};


/** ---------------------------------------------- OR ----------------------------------------------- */


// Recursive (naive) solution for Climbing Stairs which passes all tests but takes too long and fails
// -------------------------------------------------
// Problem recap (one-liner):  
// Count how many distinct ways to climb `n` stairs if you can take 1 or 2 steps.
//
// This is the pure recursive translation of the recurrence:
//   ways(n) = ways(n-1) + ways(n-2)
//
// It is correct and expresses the idea clearly, but it's not efficient
// for large n because it recomputes the same subproblems many times.

function climbStairs(n) {
  // ---------------------------
  // BASE CASES (stopping rules)
  // ---------------------------
  // If n is 1 → there is exactly 1 way: [1]
  // If n is 2 → there are exactly 2 ways: [1+1], [2]
  // These are the smallest problems that we know the answer to directly.
  if (n <= 2) return n;

  // -----------------------------------
  // RECURSIVE STEP (the mathematical rule)
  // -----------------------------------
  // To get to step n you either:
  //  - come from step n-1 with a single step (so there are ways(n-1) ways to get to n that way),
  //  - OR come from step n-2 with a 2-step jump (so there are ways(n-2) ways that way).
  //
  // Because these two sets of ways are disjoint, total ways = ways(n-1) + ways(n-2).
  // The function asks itself to solve two smaller versions of the same problem.
  return climbStairs(n - 1) + climbStairs(n - 2);
}


/** ---------------------------------------------- OR ----------------------------------------------- */


var climbStairs = function(n) {
  // Golden ratio constants
  const sqrt5 = Math.sqrt(5);
  const phi = (1 + sqrt5) / 2;
  const psi = (1 - sqrt5) / 2;

  // Use Binet’s Formula to get the nth Fibonacci number
  const fibN = (Math.pow(phi, n + 1) - Math.pow(psi, n + 1)) / sqrt5;

  // Round to nearest integer because of floating-point precision
  return Math.round(fibN);
};
