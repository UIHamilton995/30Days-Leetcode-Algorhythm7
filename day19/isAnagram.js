var isAnagram = function (s, t) {
  // 🧩 First sanity check: if the words don't have the same number of letters,
  // they can never be perfect rearrangements of each other.
  if (s.length !== t.length) return false;
  
  // 🧩 Step 2: Compare both sorted strings.
  // If they match exactly, they're anagrams.
  return s.split('').sort().join('') === t.split('').sort().join('');
};


/**------------------------------------------ OR ----------------------------------------------- */


var isAnagram = function(s, t) {
  // 🧩 Step 1: Quick check — if both words don’t have the same number of letters,
  // they can never be rearrangements of each other.
  if (s.length !== t.length) return false;

  // 🧱 Step 2: Create an empty object (hash map) to store letter counts.
  // Think of this as a "letter frequency counter".
  let map = {};

  // 🧮 Step 3: Loop through each letter in the first word (s)
  // and count how many times each letter appears.
  for (let char of s) {
      // If the letter doesn’t exist yet in the map, start it at 0.
      // Then increase it by 1.
      map[char] = (map[char] || 0) + 1;
  }

  // 🧩 Step 4: Now, loop through the second word (t)
  // and reduce the count of each letter from the map.
  for (let char of t) {
      // If the letter doesn’t exist in the map at all,
      // it means this letter wasn’t in the first word — not an anagram!
      if (!map[char]) return false;

      // Otherwise, reduce its count by 1.
      map[char]--;
  }

  // ✅ Step 5: If we finish the loop and never return false,
  // it means both words used the exact same letters the same number of times.
  return true;
};
