// 💰 HOUSE ROBBER — Dynamic Programming (Iterative) Approach
// -----------------------------------------------------------
// Problem: Given an array `nums` representing money in each house,
// you can’t rob two adjacent houses (the police will be alerted).
// Find the maximum money you can rob without breaking that rule.
//
// Example: [2, 7, 9, 3, 1]
// You can rob houses 1, 3, 5 → 2 + 9 + 1 = 12 (maximum)
//
// 🧠 Boss Hamilton’s intuition: 
// "Loop through the houses and compare two-step intervals — 
// the total if I rob this one and skip the previous, vs. if I skip this one."
// That’s *exactly* what dynamic programming does here.

var rob = function(nums) {
  // ✅ Step 1: Handle small input cases
  if (nums.length === 0) return 0; // No houses → no money
  if (nums.length === 1) return nums[0]; // One house → rob it
  if (nums.length === 2) return Math.max(nums[0], nums[1]); // Two houses → pick richer one

  // ✅ Step 2: Prepare tracking variables
  // `prev1` = max money we can have robbed up to the *previous* house.
  // `prev2` = max money we can have robbed up to the house *before that*.
  let prev2 = nums[0];                  // max till house[0]
  let prev1 = Math.max(nums[0], nums[1]); // max till house[1]
  
  // ✅ Step 3: Loop through the rest of the houses
  for (let i = 2; i < nums.length; i++) {
    // If we rob current house (nums[i]),
    // we must skip the previous one → add nums[i] + prev2
    const robCurrent = nums[i] + prev2;

    // If we skip current house, we keep the best so far → prev1
    const skipCurrent = prev1;

    // Pick whichever choice gives more money
    const currentMax = Math.max(robCurrent, skipCurrent);

    // Move our two-step tracker forward
    prev2 = prev1;        // shift “two steps back” window
    prev1 = currentMax;   // store latest max
  }

  // ✅ Step 4: return the final computed maximum
  return prev1;
};

/** ------------------------------------------ OR ------------------------------------------ */

var rob = function(nums) {
  const cache = {}

  function profit(nums) {
      if (!nums.length) return 0;                       // if no houses left → no money
      if (nums.length in cache) return cache[nums.length]; // use cache if we've solved this length

      // choose: rob current (nums[0]) + best from skipping next (slice(2))
      // or skip current and take best from the rest (slice(1))
      const p = Math.max(nums[0] + profit(nums.slice(2)), profit(nums.slice(1)))

      cache[nums.length] = p; // store result keyed by the remaining length
      return p
  }

  return profit(nums);
};


/**
 * profit is a recursive helper that returns the maximum money you can get from the current array of houses (nums).

At each step you compute:

nums[0] + profit(nums.slice(2)) = rob the current house and then solve the subproblem that starts two houses ahead, or

profit(nums.slice(1)) = skip current house and solve the subproblem starting one house ahead.

The result p is the max of those two choices.

The author intended to memoize results in cache using nums.length as the key.

2) Big problem in the current implementation (must know)

You used nums.length as the cache key. That is incorrect here.

Different suffixes with the same length may have different values. Example:

nums.slice(1) might be [7,9,3] and nums.slice(2) might be [9,3]. Later we could call profit on other suffixes of length 2 that are [4,5] — they are not the same subproblem, but cache[length] would treat them as identical.

Therefore, caching by length only is wrong — it will return incorrect values in many inputs.

Additionally, nums.slice(...) creates a new array copy each call (O(k) work). Using slice frequently inside recursion makes the algorithm much slower and uses more memory.

So:
Bug = wrong cache key.
Performance problem = repeated array slicing (creates many arrays, increases time & space).

3) Correct approach (keep memoization, avoid slicing, cache by index)

A correct memoized recursion should track a start index into the original array (so each subproblem is uniquely identified by that start index). Also avoid slice so we don't allocate O(n) arrays repeatedly.

Here’s a correct, well-commented version:
 */

// Correct memoized recursive solution (no slicing, cache by index)
var rob = function(nums) {
  // memo[i] will store the max profit we can get starting from house i
  const memo = {}; // or new Array(nums.length).fill(undefined)

  // profitFrom(i) = best profit from subarray nums[i..end]
  function profitFrom(i) {
    // base: no houses left
    if (i >= nums.length) return 0;

    // return cached answer if we computed it before
    if (i in memo) return memo[i];

    // Option 1: rob current house i, then continue from i+2
    const robCurrent = nums[i] + profitFrom(i + 2);

    // Option 2: skip current house, continue from i+1
    const skipCurrent = profitFrom(i + 1);

    // best of both
    const ans = Math.max(robCurrent, skipCurrent);

    memo[i] = ans; // cache by index (unique subproblem)
    return ans;
  }

  return profitFrom(0);
};

/**
 * Why this fixes the problems:

memo keyed by i uniquely identifies each suffix nums[i..].

No slice() calls → avoids repeated array copies.

Each subproblem i is solved once → O(n) work total.

4) Complexity: compare the three approaches

Your original (with slice + cache[length])

Correctness: Possibly incorrect because cache by length is wrong.

Time: worse than O(n) due to array copying in .slice(); in practice could be O(n²) because each recursive call copies subarrays of length ~n, n-1, n-2, ...

Space: high — many temporary arrays plus recursion stack. Also the cache keyed by length may hold up to n entries but they’re wrong/overlapping.

Correct memoized recursion (index-based, no slicing)

Time: O(n). Each index i computed once; each call does O(1) work (two recursive lookups and a max).

Space: O(n) for memo + O(n) recursion stack worst-case (skewed). If tail recursion eliminated or implemented iteratively, stack could be improved.

Iterative DP / two-variable iterative solution (the one I gave earlier)

Time: O(n) — single pass.

Space: O(1) — only two variables (prev1, prev2). No recursion stack.

Practical: most memory-efficient and fast; usually preferred in production.

5) Practical notes / tradeoffs (what to use when)

Use iterative DP two-variable when you want the simplest, fastest, smallest-memory solution.

Use memoized recursion (index-based) when:

You want clarity that closely matches recursive reasoning.

You may want to extend the function to return the actual choices (path), or add other logic — recursion makes some extensions easier to express.

Avoid slicing inside recursion for large inputs — it kills performance.

Never cache by length unless the subproblem truly depends only on the length (it doesn’t here).

6) Quick final checklist for your code reviews / videos

✅ Cache by a unique subproblem identifier (start index), not by length.

✅ Avoid creating new arrays (slice) inside tight recursive loops.

✅ Use memoization to reduce time from exponential to linear.

✅ Prefer iterative O(1)-space DP for production if you only need the number.
 */
