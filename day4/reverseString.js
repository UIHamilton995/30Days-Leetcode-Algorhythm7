function reverseString(s) {
  // Imagine you have an array of letters like ["h", "e", "l", "l", "o"]
  // Your goal is to reverse this same array to become ["o", "l", "l", "e", "h"]
  // BUT the rule says: you are not allowed to create a new array
  // You must rearrange the original one in place.

  // Step 1: Create two pointers.
  // One will start from the beginning (left)
  // The other will start from the end (right)
  let left = 0;
  let right = s.length - 1;

  // Step 2: Keep swapping characters until the two pointers meet in the middle.
  // This will effectively reverse the array.
  while (left < right) {
      // Swap the two letters currently pointed at by `left` and `right`.
      // This uses ES6 array destructuring to swap easily.
      [s[left], s[right]] = [s[right], s[left]];

      // Move the pointers closer to the center
      left++;
      right--;
  }

  // Step 3: Notice — we didn’t return anything.
  // The function modifies the array `s` directly in place.
  // This is a memory-efficient operation, as required by the problem.
};


/* ---------------------------------------- OR ---------------------------------------------------- */

function reverseString(s) {
  s.reverse()
}