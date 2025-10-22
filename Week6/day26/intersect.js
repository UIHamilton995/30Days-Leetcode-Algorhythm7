/**
 * Problem: Intersection of Two Arrays II
 * --------------------------------------
 * Given two integer arrays nums1 and nums2,
 * return an array of their intersection.
 * Each element in the result should appear as many times as it shows in both arrays.
 *
 * Example:
 * nums1 = [4,9,5]
 * nums2 = [9,4,9,8,4]
 * Output = [4,9]
 */

var intersect = function(nums1, nums2) {
  // 🧠 Think of `counter` as your "result basket"
  // where we will store the intersecting elements.
  let counter = [];

  // 🧩 Outer loop: go through each number in nums1 one by one
  for (let i = 0; i < nums1.length; i++) {
      // 🔁 Inner loop: for each number in nums1, check all numbers in nums2
      for (let j = 0; j < nums2.length; j++) {

          // 🎯 If both numbers match, it means they intersect
          if (nums1[i] === nums2[j]) {
              counter.push(nums1[i]); // ✅ Add it to our result basket

              // ⚠️ Mark nums2[j] as "used" so it won't match again
              // This prevents duplicate matching from nums2.
              nums2[j] = null;

              // 🚀 Break out of the inner loop
              // because we’ve already matched nums1[i] once.
              break;
          }
      }
  }

  // 🏁 Return the collected intersection elements
  return counter;
};
/**
 * 🎥 How to Explain It on Video

“Imagine nums1 and nums2 as two lists of people who attended two separate events.
We’re trying to find people who attended both events — but we don’t want to count someone twice.

So, we check person by person from the first list (nums1),
and for each, we go through the second list (nums2).
When we find a match, we mark that person as ‘already used’ (set them to null) so they won’t get counted again.

At the end, the counter array shows the people who attended both events — that’s our intersection!”
 */

/** ------------------------------------------- OR ----------------------------------------------- */


/**
 * Optimized Intersection Solution using a Frequency Map
 * -----------------------------------------------------
 * This version is more efficient and cleaner.
 * Instead of looping twice over both arrays, we build a frequency map of nums1,
 * then only loop once through nums2 to check which elements exist and how many times.
 */

var intersect = function(nums1, nums2) {
  // 🧠 Step 1: Create a "frequency counter" object
  // Key = number, Value = how many times that number appears in nums1
  let count = {};

  // 🧺 Step 2: Store each number's occurrence count in nums1
  for (const num1 of nums1) {
      // If num1 already exists in count, increment it by 1
      // Else, initialize it to 1
      count[num1] = (count[num1] || 0) + 1;
  }

  // 🧩 Step 3: Prepare an array to store intersecting elements
  let output = [];

  // 🔁 Step 4: Traverse nums2 and check if a number exists in count
  for (const num2 of nums2) {
      // If count[num2] > 0, it means that number still has an occurrence left in nums1
      if (count[num2] > 0) {
          output.push(num2);     // ✅ Add it to our output
          count[num2] = count[num2] - 1; // 🔄 Decrease its count by 1 (use one occurrence)
      }
  }

  // 🏁 Step 5: Return the final intersection array
  return output;
};
/**
 * 🎯 How to Explain It on Video

“Alright team, let’s think like developers now.
Instead of comparing both arrays element by element (which is costly),
let’s take nums1 and first record how many times each number appears.

That’s like creating a small ledger —
‘Hey, I’ve got two 2’s, one 4, and one 9’.

Then, as we move through nums2, we simply check:
‘Does my ledger say I still have this number available?’
If yes — we add it to our output and reduce the count.

This eliminates unnecessary looping and works much faster in large data scenarios.”
 */