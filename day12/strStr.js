var strStr = function(haystack, needle) {
  for (let i = 0; i < haystack.length; i++) {
    // loop through haystack checking through for iteration starting at i and having the same length as the needle to get exactly that substring window.
    if (needle === haystack.slice(i, i + needle.length)) {
        // Since we’re already looping through i, we can directly return i when we find a match, having the entirety of needle
        return i;
    }
  }

  // If no match found, return -1
  return -1;
};

/** ----------------------------------------- OR ------------------------------------------------ */

var strStr = function (haystack, needle) {
  // Outer loop: move the "r" pointer across each position of haystack
  // We’ll attempt to match needle starting from each possible index r.
  for (let r = 0; r < haystack.length; r++) {

    // l pointer tracks how many characters have matched so far
    let l = 0;

    // Inner while loop:
    // As long as:
    //   - l is still within needle length, and
    //   - haystack[r + l] === needle[l]
    // We keep moving both pointers forward (l++)
    while (l < needle.length && haystack[r + l] === needle[l]) {
      l++;
    }

    // If we exit the while loop because l == needle.length,
    // that means we matched *all characters* of the needle successfully.
    if (l === needle.length) return r;  // return starting index r
  }

  // If we finished checking all positions and never matched fully,
  // that means the needle doesn’t exist in the haystack.
  return -1;
};
