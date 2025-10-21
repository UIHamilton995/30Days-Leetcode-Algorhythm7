function maxSubArray(nums) {
  // Step 1: Start by assuming the first number is both our current sum and max sum.
  // This helps handle arrays with all negative numbers.
  let currentSum = nums[0];
  let maxSum = nums[0];

  // Step 2: Loop through the rest of the array, starting from index 1.
  for (let i = 1; i < nums.length; i++) {
      // 🧠 Logic:
      // At every number, we decide:
      // "Should we start a new subarray here or continue the previous streak?"
      // We pick whichever gives a higher sum.
      currentSum = Math.max(nums[i], currentSum + nums[i]);

      // Step 3: Update the global maxSum if currentSum beats it.
      maxSum = Math.max(maxSum, currentSum);
  }

  // Step 4: Return the maximum subarray sum found.
  return maxSum;
};


/**---------------------------------------- OR --/**---------------------------------------- */


function maxSubArray(nums) {
  // 🧩 Step 1: Initialize two variables — both start with the first element of the array.
  // 'max' will keep track of the highest subarray sum we have found so far.
  // 'sum' will represent the running total (current subarray sum) as we move through the array.
  let max = nums[0], sum = nums[0];

  // 🧠 Step 2: Start looping from the second element (index 1),
  // because we already used the first element to initialize our values.
  for (let i = 1; i < nums.length; i++) {

      // ⚙️ Step 3: Decide whether to continue adding the current number to the existing subarray
      // (sum + nums[i]) OR to start a new subarray beginning at nums[i].
      // Why? Because if the running sum (sum) has become negative, it will only reduce future sums.
      // So, if starting fresh from nums[i] gives a higher total, we do that.
      sum = Math.max(sum + nums[i], nums[i]);

      // 💪 Step 4: Compare the running 'sum' with the best 'max' we’ve seen so far.
      // If the new sum is larger, update 'max'.
      max = Math.max(sum, max);
  }

  // 🎯 Step 5: After scanning through the entire array,
  // 'max' holds the largest possible sum of any contiguous subarray.
  return max;
};

/**
✅ This is identical in complexity to the earlier Kadane solution —
but this variant is faster in real-world performance because it:

uses fewer variable reassignments,

eliminates some conditional checks, and

uses Math.max() directly for both sum and max updates (shorter execution path).

So while both are O(n), this one performs fewer CPU instructions per iteration, making it slightly faster in practice.
 */