function isValid(s) {
  // ---------------------------
  // 🧠 Step 1: Setup our helper tools
  // ---------------------------

  // This object works like a dictionary that shows which bracket closes which.
  // For example:
  // ')' should match '('
  // ']' should match '['
  // '}' should match '{'
  //
  // So whenever we meet a closing bracket, we can look inside this "map"
  // to see what kind of opening bracket we are expecting to match it with.
  const pairs = { ')': '(', ']': '[', '}': '{' };

  // We'll use a STACK (array) to keep track of opening brackets.
  //
  // Think of a stack like a pile of books or plates:
  //  - You always put a new book on top (PUSH)
  //  - You always remove the top book first (POP)
  //
  // This structure helps us check if brackets are closed in the correct order.
  const stack = [];

  // ---------------------------
  // 🧩 Step 2: Loop through every character in the string
  // ---------------------------
  //
  // Example: for the string "({[]})", we’ll check each symbol one by one.
  for (let ch of s) {

      // ---------------------------
      // ✅ CASE 1: It's an OPENING bracket
      // ---------------------------
      //
      // When we meet '(', '[', or '{' — we don't yet know where it closes,
      // so we add (PUSH) it onto our stack to remember that it’s waiting
      // for a matching closing bracket later on.
      if (ch === '(' || ch === '[' || ch === '{') {
          stack.push(ch);
      } 
      // ---------------------------
      // ✅ CASE 2: It's a CLOSING bracket
      // ---------------------------
      //
      // When we meet ')', ']', or '}', we expect it to close the *most recent*
      // opening bracket we saw. So we check the top of our stack.
      else {
          // We remove (POP) the top opening bracket from our stack.
          // If the stack is empty or doesn't match the type of closing bracket,
          // then the brackets are not properly paired.
          if (stack.pop() !== pairs[ch]) {
              return false; // ❌ Not valid structure
          }
      }
  }

  // ---------------------------
  // 🏁 Step 3: After checking every character
  // ---------------------------
  //
  // If our stack is empty, it means every opening bracket had a matching close.
  // But if something is still in the stack, it means there were unclosed brackets.
  return stack.length === 0;
};

/*------------------------------------------- OR --------------------------------------------*/

function isValid(s) {
  // 🧺 Step 1: Create an empty array that we’ll use as a “stack”.
  // Think of it like a backpack where we drop opening brackets as we meet them.
  let arr = [];

  // 🗺️ Step 2: Create a "map" (key-value pair) that helps us know
  // which closing bracket corresponds to which opening bracket.
  // Example: ')' maps to '(' — meaning whenever we see a ')',
  // we expect the top of our stack to be '(' for it to be valid.
  let map = {
      ')': '(',
      ']': '[',
      '}': '{'
  };

  // 🧩 Step 3: Loop through every character in the input string 's'
  for (let i = 0; i < s.length; i++) {
      let char = s[i]; // current character

      // ✅ Step 4: If the character is an opening bracket — like '(', '[', or '{'
      // we push it into our stack. It’s like keeping track of what we’ve opened.
      if (['(', '[', '{'].includes(char)) {
          arr.push(char); // add it to the stack
      } 
      // ⚙️ Step 5: Else, it must be a closing bracket — like ')', ']', or '}'
      else {
          // We “pop” the last opening bracket we saw from the stack
          // and check if it matches the current closing bracket.
          // If it doesn’t match, then this bracket is invalid — return false.
          if (arr.pop() !== map[char]) {
              return false;
          }
      }
  }

  // 🧾 Step 6: After looping through all characters,
  // if the stack is empty, it means every opening bracket found its matching closing bracket.
  // If the stack still has leftover items, that means some brackets were never closed.
  return arr.length === 0 ? true : false;
}
