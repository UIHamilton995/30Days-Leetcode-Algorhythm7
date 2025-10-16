function firstUniqChar(s) {
  // Step 1: Loop through each character in the string
  for (let i = 0; i < s.length; i++) {

      // Step 2: Check if this character appears again in the string
      // We use indexOf and lastIndexOf to see if it’s unique.
      // If both return the same position, it means it appears only once.
      if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {

          // Step 3: Return the index of this unique character
          return i;
      }
  }

  // Step 4: If we finish looping and found no unique character
  return -1;
};


/** ----------------------------------------- OR ----------------------------------------- */

var firstUniqChar = function(s) {
  // 🧩 Step 1: Create an empty object to count character frequency.
  // We'll use this like a "hash map" or "dictionary" in other languages.
  // Key → character, Value → how many times it appears in the string.
  const freq = {};

  // 🧮 Step 2: Loop through each character in the string
  // and count how many times each one appears.
  for (const char of s) {
      // If the character already exists in the freq object, add 1.
      // Otherwise, set it to 1 (meaning it’s appearing for the first time).
      freq[char] = (freq[char] || 0) + 1;
  }

  // 🧠 After this loop, for a string like "leetcode":
  // freq = { l:1, e:3, t:1, c:1, o:1, d:1 }

  // 🧭 Step 3: Now, loop through the string again.
  // This time, we want to find the *first* character whose frequency is exactly 1.
  for (let i = 0; i < s.length; i++) {

      // Check if the frequency of the current character is 1.
      if (freq[s[i]] === 1) {
          // 🎯 Step 4: Return its index immediately —
          // because the question asks for the *first* non-repeating character.
          return i;
      }
  }

  // 🚫 Step 5: If no character had a frequency of 1,
  // that means all characters are repeating → return -1.
  return -1;
};
