var twoSum = function(numbers, target) {
  // 🧩 Step 1: Initialize two pointers
  let left = 0;
  let right = numbers.length - 1;

  // 🧭 Step 2: Move the pointers toward each other until they meet
  while (left < right) {
      const sum = numbers[left] + numbers[right]; // get current sum

      // 🎯 Case 1: Found the exact match
      if (sum === target) {
          // Problem says we must return 1-based indices
          return [left + 1, right + 1];
      }

      // 📉 Case 2: Sum too small → move left pointer to the right
      else if (sum < target) {
          left++;
      }

      // 📈 Case 3: Sum too big → move right pointer to the left
      else {
          right--;
      }
  }

  // 🪫 Step 3: If no pair found (though problem guarantees one exists)
  return [];
};


/** ----------------------------------------------- OR ----------------------------------------------- */


var twoSum = function (numbers, target) {
  // Create a Map (like an advanced object) to store each number and its indices.
  // Map allows key-value storage: we can store a number as key, and its index(es) as value.
  let map = new Map();

  // First loop: populate the map
  for (let i = 0; i < numbers.length; i++) {
    // If this number hasn't been stored yet, initialize it with an empty array
    if (!map.has(numbers[i])) {
        map.set(numbers[i], []);
    }

    // Push the current index into the array for that number
    // (useful if the same number appears multiple times)
    map.get(numbers[i]).push(i);
  }

  // Second loop: look for a "complement" for each number
  // A complement is simply (target - current number)
  for (let i = 0; i < numbers.length; i++) {
    // Check if the complement exists in the map
    if (map.has(target - numbers[i])) {
      // Retrieve the list of indices for the complement
      // and find one that is not equal to the current index (so we don't reuse the same element)
      let ix = map.get(target - numbers[i]).find(v => v !== i);

      // If a valid pair is found, return their indices (1-based)
      // because in LeetCode’s “Two Sum II”, the indices are 1-based
      return [i + 1, ix + 1];
    }
  }
};
