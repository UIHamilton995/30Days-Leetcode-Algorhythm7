// Move all zeros in `nums` to the end while preserving the order of non-zero elements.
// This modifies the array in place and returns the same array reference.
function moveZeroes(nums) {
  // STEP 1: Move all non-zero elements to the front of the array
  // The 'left' pointer tracks the position where the next non-zero element should be placed
  let left = 0; 
  
  // The 'right' pointer scans through every element in the array
  for (let right = 0; right < nums.length; right++) {
      
      // When we find a non-zero element...
      if (nums[right] !== 0) {
          
          // ...we copy it to the 'left' position
          // This effectively moves all non-zero elements to the front
          nums[left] = nums[right];
          
          // Move the 'left' pointer forward to prepare for the next non-zero element
          left++;
      }
      
      // If nums[right] is 0, we do nothing and just continue scanning
      // This means zeros are automatically "skipped" and left behind
  }
  
  // At this point:
  // - All non-zero elements are at the front (indices 0 to left-1)
  // - The 'left' pointer is now at the first position that needs to be zero
  // - Everything from 'left' to the end needs to be filled with zeros
  
  // Example after first loop with [0,1,0,3,12]:
  // nums = [1,3,12,3,12] and left = 3
  //         └─non-zero─┘ └─need zeros─┘
  
  
  // STEP 2: Fill all remaining positions with zeros
  // Start from where 'left' is pointing and go to the end of the array
  for (let i = left; i < nums.length; i++) {
      nums[i] = 0;
  }
  
  // Final result with [0,1,0,3,12]:
  // nums = [1,3,12,0,0]
  
  return nums;
};


/**--------------------------------------------- OR ------------------------------------------------- */

/**this one right here is the most elegant and performant version of moveZeroes. It’s built on a two-pointer swap technique, and it runs in clean O(n) time with O(1) space. */

function moveZeroes(nums) {
  // Initialize two pointers: `left` and `right`.
  // Both start at index 0.
  let left = 0;
  let right = 0;
 
  // Continue looping while `right` has not scanned the whole array.
  while (right < nums.length) {

      // Check if the element at the `right` pointer is non-zero.
      if (nums[right] !== 0) {

          // 🔄 SWAP:
          // Swap the elements at indices `left` and `right`.
          // This ensures that all non-zero elements are "compacted" toward the front.
          [nums[left], nums[right]] = [nums[right], nums[left]];

          // After a successful swap (or even if both are the same value),
          // increment `left` to point to the next position
          // where a new non-zero element should be placed.
          left++;
      }

      // Regardless of whether a swap happened or not,
      // always move `right` forward to scan the next element.
      right++;
  }

  // Return the modified array (done in place).
  return nums;
};
