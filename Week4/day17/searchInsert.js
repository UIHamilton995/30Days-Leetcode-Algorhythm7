var searchInsert = function(nums, target) {
  // 🔁 Step 1: Loop through every element in the array
  for (let i = 0; i < nums.length; i++) {

    // 💡 Step 2: If target is less than or equal to current number,
    // it means target should be placed *here*.
    // Either because it matches nums[i], or because it should come before it.
    if (target <= nums[i]) {
      return i; // Return the current index as the correct position
    }
  }

  // 🚪 Step 3: If the loop finishes and we didn't return,
  // it means the target is greater than all elements.
  // So, it belongs *at the end* of the array.
  return nums.length;
};


/** ------------------------------------------ OR ------------------------------------------ */

var searchInsert = function(nums, target) {
  // 🎯 Step 1: Initialize two pointers for the search boundaries.
  let left = 0; 
  let right = nums.length - 1;

  // 🔁 Step 2: Keep searching while the left boundary hasn’t crossed the right.
  while (left <= right) {
    // 🧮 Step 3: Find the middle index between left and right
    const mid = Math.floor((left + right) / 2);

    // 🎯 Step 4a: If the middle element is exactly the target, return its index.
    if (nums[mid] === target) return mid;

    // 🎯 Step 4b: If the target is greater than the middle value,
    // we know it must be in the *right half* of the array.
    if (nums[mid] < target) {
      left = mid + 1; // Move left boundary just after mid
    } 
    // 🎯 Step 4c: If the target is smaller, search the *left half*.
    else {
      right = mid - 1; // Move right boundary just before mid
    }
  }

  // 🧭 Step 5: If we finish and haven’t found the target,
  // 'left' will be the exact index where target should be inserted.
  return left;
};
