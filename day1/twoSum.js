function twoSum(nums, target) {
  let positions = []  // to keep track of matching numbers’ indices
  let indices = []    // to store final answer pair

  for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
          // check if current pair adds up to target
          if (nums[i] + nums[j] === target) {
              positions.push(nums[i], nums[j])
              indices.push(i, j)
              break
          }
      }
      // if we already found a valid pair, stop looping
      if (indices.length) break
  }

  return indices
};

/*--------------------------- OR -------------------------*/

const twoSum = (nums, target) => {
  // 🧾 Step 1: Create a "hash map" (like a mini database)
  // It will store numbers we've seen so far along with their index positions.
  // Example: if nums = [2, 7, 11], after first loop -> hashMap = { 2 => 0 }
  const hashMap = new Map();

  // 🧮 Step 2: Go through the list one number at a time
  for (let i = 0; i < nums.length; i++) {

      // 🎯 Step 3: Find what number we need to reach the target.
      // For example, if target = 9 and nums[i] = 2, then we need 7 (9 - 2).
      const diff = target - nums[i];

      // 🔎 Step 4: Check if that "needed number" already exists in our hashMap.
      // If it does, it means we've seen its matching pair earlier.
      if (hashMap.has(diff)) {
          // ✅ Step 5: Return both indices: 
          // - the one we stored earlier for the matching number,
          // - and the current index.
          return [hashMap.get(diff), i];
      }

      // 🧩 Step 6: If no match yet, store this number with its index in our hashMap
      // So future numbers can check against it.
      hashMap.set(nums[i], i);
  }

  // 🪣 Step 7: If we reach here, no pair adds up to the target (rare for this problem).
  return [];
};

/*--------------------------- OR  FASTEST -------------------------*/

var twoSum = function(nums, target) {
  // obj will store the numbers we *expect to see later* (the complements)
  // as keys, and the index of the number that created that expectation as the value.
  // Key idea: when we see a number that someone earlier expected, we found the pair.
  let obj = {}

  // Loop through the array with both index and value.
  // `nums.entries()` gives pairs like [0, nums[0]], [1, nums[1]], ...
  for (let [index, num] of nums.entries()) {

      // 1) Check if current number `num` is already a key in obj.
      //    If it is, that means we previously stored this number as the needed complement
      //    for some earlier element. obj[num] holds the index of that earlier element.
      //
      //    Example: previously we saw a value 2 and stored obj[7] = 0 (meaning: "I need a 7 to pair with index 0").
      //    If now num === 7, then obj[7] !== undefined and we have a match: [obj[7], index] -> [0, currentIndex].
      if (obj[num] !== undefined) {
          // Return indices: the earlier index that wanted this number, and the current index.
          return [obj[num], index];
      }

      // 2) If no match yet, store the *complement* we need for the current number.
      //    We set obj[target - num] = index to say:
      //      "If you find (target - num) later, pair it with my index."
      //
      //    Example: target = 9, current num = 2, current index = 0
      //    We store obj[7] = 0, meaning "index 0 needs a 7 to make 9".
      obj[target - num] = index;
  }

  // If we finish the loop without finding a pair, return an empty array.
  // (LeetCode guarantees a solution in the problem, but it's good practice.)
  return [];
};
