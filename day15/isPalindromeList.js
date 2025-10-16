var isPalindrome = function(head) {
  // 🟢 Step 1: Convert linked list into an array to simulate head & tail access
  const values = [];
  let current = head;

  // Traverse the linked list and store all node values
  while (current) {
      values.push(current.val);
      current = current.next;
  }

  // 🟢 Step 2: Initialize head and tail pointers
  let left = 0;
  let right = values.length - 1;

  // 🟢 Step 3: Compare values from both ends
  while (left < right) {
      // If head (left) and tail (right) mismatch — not palindrome
      if (values[left] !== values[right]) {
          return false;
      }
      // Move inward from both ends
      left++;
      right--;
  }

  // 🟢 Step 4: If loop completes with no mismatch, it’s a palindrome
  return true;
};

/** ------------------------------------------- OR -------------------------------------------- */

var isPalindrome = function(head) {
  if (!head || !head.next) return true; 
  // If list is empty or has one node → it's trivially a palindrome

  // 🟢 Step 1: Use two pointers (slow & fast) to find the middle of the list
  let slow = head, fast = head;
  while (fast && fast.next) {
      slow = slow.next;       // moves one step
      fast = fast.next.next;  // moves two steps
  }

  // 🟢 Step 2: Reverse the second half of the list starting from 'slow'
  let prev = null, curr = slow;
  while (curr) {
      let nextTemp = curr.next; // temporarily hold next node
      curr.next = prev;         // reverse the pointer
      prev = curr;              // move prev forward
      curr = nextTemp;          // move current forward
  }
  // After this, 'prev' points to the head of the reversed second half

  // 🟢 Step 3: Compare the first half and the reversed second half
  let left = head;      // start from the beginning (head)
  let right = prev;     // start from the end (reversed half)
  while (right) {
      if (left.val !== right.val) {
          return false; // mismatch → not a palindrome
      }
      left = left.next;
      right = right.next;
  }

  // 🟢 Step 4 (Optional): Restore the list (reverse back second half)
  // — not required for LeetCode, but good practice in real projects

  return true; // If we finish loop with no mismatches → palindrome!
};
