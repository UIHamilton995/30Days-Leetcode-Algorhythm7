function removeElements(head, val) {
  // Step 1: Create a dummy node that points to head.
  // This helps handle cases where the head node itself needs to be removed.
  const dummy = new ListNode(0);
  dummy.next = head;

  // Step 2: Use a pointer to traverse the list.
  // 'current' will always point to the node *before* the one we are checking.
  let current = dummy;

  // Step 3: Traverse while the next node exists
  while (current.next !== null) {

      // If the next node’s value equals the target value,
      // we skip it by linking current.next to the node after it.
      if (current.next.val === val) {
          current.next = current.next.next; // this "removes" the node
      } 
      else {
          // Otherwise, just move forward normally.
          current = current.next;
      }
  }

  // Step 4: Return the "fixed" list (skip the dummy node)
  return dummy.next;
}


/** ---------------------------------------------- OR ---------------------------------------------- */


var removeElements = function (head, val) {
  // 🟢 Step 1: Base case check
  // If the linked list is empty, there's nothing to remove — return it as is.
  if (head == null) return head;

  // 🟢 Step 2: Create a dummy node that points to the head.
  // This is a trick to simplify edge cases (like removing the first node itself).
  // The dummy node acts as a "safe starting point" before the real list begins.
  let dummy = new ListNode(0, head);

  // 🟢 Step 3: Initialize two pointers:
  // 'node' traverses through the list (current node),
  // 'pre' always points to the node *before* 'node' (previous node).
  let node = head,
      pre = dummy;

  // 🟢 Step 4: Traverse the linked list until we reach the end (node becomes null)
  while (node != null) {
      // If the current node's value is NOT the target,
      // just move 'pre' forward to follow 'node'
      if (node.val != val) {
          pre = node;
      }
      // Else, if the node's value matches the one we want to remove,
      // skip this node by linking the previous node's 'next' to the next node
      else {
          pre.next = node.next;
      }

      // Move the 'node' pointer forward to the next node regardless
      node = node.next;
  }

  // 🟢 Step 5: Return the new head (skipping dummy)
  // dummy.next now points to the first valid node after all removals
  return dummy.next;
};
