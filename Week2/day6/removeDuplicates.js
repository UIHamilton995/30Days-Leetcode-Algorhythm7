function removeDuplicates(nums) {
  if (nums.length === 0) return 0;

  // write pointer — position to write the next unique value
  let write = 1;

  // read pointer scans the array from 1..end
  for (let read = 1; read < nums.length; read++) {
      // when we see a new value (different from previous),
      // write it at the write pointer and advance write.
      if (nums[read] !== nums[read - 1]) {
          nums[write] = nums[read];
          write++;
      }
  }

  // `write` is now the length of the unique-prefix
  return write;
};

/* ------------------------------------------ OR ------------------------------------------- */

function removeDuplicates(nums) {
  // 🧠 Step 1: Handle the smallest possible case — if there's only one number, 
  // there's nothing to remove. We just return 1 (because there's one unique number).
  if (nums.length === 1) {
      return 1;
  }

  // 🧠 Step 2: Initialize two pointers.
  // 'left' will mark the position where the next unique number should be written.
  // 'right' will scan through the array to find new unique numbers.
  // Both start at index 1, because the first element is always unique.
  let left = 1;
  let right = 1;

  // 🧠 Step 3: Loop through the array while 'right' hasn’t reached the end.
  while (right < nums.length) {

      // 🧠 Step 4: Compare the current number with the one before it.
      // Since the array is sorted, duplicates will appear next to each other.
      if (nums[right] === nums[right - 1]) {
          // If they are the same, it means it's a duplicate. 
          // We don’t want it in the "unique" section, so we just skip it.
          // To skip, we simply move the right pointer ahead.
          right++;
      } else {
          // 🧠 Step 5: When we find a new unique number:
          // - We copy that number into the next available "unique" slot (nums[left])
          // - Then we move both pointers ahead by 1
          nums[left] = nums[right];
          left++;
          right++;
      }
  }

  // 🧠 Step 6: The 'left' pointer now represents how many unique numbers we have.
  // That’s exactly what the problem wants us to return.
  return left;
};
