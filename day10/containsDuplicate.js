var containsDuplicate = function(nums) {
  for(let i =0; i < nums.length; i++){
      for(let j= i+1; j < nums.length; j++){
          if(nums[i] === nums[j])
          return true
      }
  }
  return false
};


/**
 * ⚠️ The Core Problem

You’re running two nested loops, meaning for an input of length n,
you’re performing about n × n = n² comparisons.

If n is large — like 10⁵ (100,000) elements —
you’re asking the program to do about 10 billion comparisons (10¹⁰) 😱

LeetCode has strict time limits (usually around 1–2 seconds per test case).
An O(n²) algorithm just can’t finish in time for large test cases.

🧩 What Makes It Worse

Your inner loop also starts from j = 1 and goes up to nums.length - 2, which:

Misses the last element (bug in logic).

Still repeats comparisons unnecessarily (e.g. compares same pairs multiple times).

So we’ve got:

Wrong range ✅

Redundant comparisons ✅

Explosive growth in time ✅
💣 That’s a guaranteed Time Limit Exceeded.
 */


/** ---------------------------------------- OR ---------------------------------------- */

function containsDuplicate(nums) {
  // 🧠 Step 1: Create a Set to keep track of numbers we've seen so far.
  // A Set is a special data structure in JavaScript that stores *unique* values only.
  // This means that if you try to add a duplicate value, the Set simply ignores it.
  // We'll use this property to efficiently detect duplicates.
  const seen = new Set();

  // 🧩 Step 2: Loop through every number in the given array `nums`
  for (const num of nums) {

      // 🔍 Step 3: Check if the current number already exists in the Set
      // If it does, that means we've seen this number before → a duplicate is found.
      if (seen.has(num)) {
          // ✅ Since the problem only asks "if there is any duplicate",
          // we can immediately return true as soon as we find one.
          return true;
      }

      // 📝 Step 4: If it's not in the Set, we add it.
      // This means: "I've seen this number now; remember it for future checks."
      seen.add(num);
  }

  // 🚫 Step 5: If the loop finishes without returning true,
  // it means we went through all numbers and found no duplicates.
  return false;
};

/** -------------------------------------- OR ---------------------------------------- */

function containsDuplicate(nums) {
  // When you pass an array into a Set constructor,
  // it automatically filters out duplicates because Sets can’t store the same value twice.
  // The .size property gives you the number of unique elements in the Set.
  // If .size < .length → some elements were removed as duplicates → return true
  return new Set(nums).size< nums.length;
}