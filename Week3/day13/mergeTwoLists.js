function mergeTwoLists(list1, list2) {
  // 🧱 Step 1: Create a "dummy" node to act as the start of the merged list.
  // This node doesn't hold meaningful data — it's just a placeholder 
  // that gives us a fixed starting point.
  // We'll return dummy.next at the end (the real head of the merged list).
  const dummy = new ListNode(0);

  // 🧭 Step 2: `current` will always point to the last node in the merged list.
  // As we pick nodes from list1 and list2, we'll attach them to current.next.
  let current = dummy;

  // 🧩 Step 3: Traverse both lists as long as *both* still have nodes.
  // We always want to attach the smaller node (in ascending order) to the merged list.
  while (list1 !== null && list2 !== null) {

      // ✅ Compare current values in both lists
      if (list1.val <= list2.val) {
          // list1's value is smaller (or equal)
          // so we attach list1's current node to the merged list
          current.next = list1;

          // then move list1's pointer forward
          list1 = list1.next;
      } else {
          // list2's value is smaller
          // attach list2's node and move list2 forward
          current.next = list2;
          list2 = list2.next;
      }

      // ⏩ move our merged list pointer forward (since we just added a node)
      current = current.next;
  }

  // 🧩 Step 4: If one of the lists is finished, 
  // directly attach the remainder of the other list.
  // At this point, one of them is null, and the other may still have nodes.
  if (list1 !== null) {
      current.next = list1;
  } else if (list2 !== null) {
      current.next = list2;
  }

  // 🧩 Step 5: Return the real head of the merged list.
  // dummy.next points to the first actual node of our merged chain.
  return dummy.next;
}

/** --------------------------------------- OR ------------------------------------------------- */

var mergeTwoLists = function(list1, list2) {
  // Step 1: Create a dummy node (a fake head)
  // Think of this as a "starting point" or "marker"
  // It helps us easily return the merged list later without losing reference.
  let dummy = new ListNode();

  // Step 2: Create a 'cur' pointer that will move and build our merged list.
  let cur = dummy;

  // Step 3: Traverse both lists while both still have nodes.
  // Each step, we compare the current nodes of both lists
  while (list1 && list2) {
      
      // If list1’s value is greater, we pick the smaller one (list2)
      // and attach it to our merged list.
      if (list1.val > list2.val) {
          cur.next = list2;        // Connect current to list2’s node
          list2 = list2.next;      // Move list2 forward
      } else {
          cur.next = list1;        // Connect current to list1’s node
          list1 = list1.next;      // Move list1 forward
      }
      
      // Move 'cur' forward to continue building the list.
      cur = cur.next;
  }

  // Step 4: One list will finish before the other.
  // Instead of using two if-statements like in the first version,
  // this line smartly attaches whichever list still has nodes left.
  cur.next = list1 || list2;  // If list1 is not null, attach it; else attach list2.

  // Step 5: Return the real head of our merged list.
  // 'dummy.next' skips the fake head we started with.
  return dummy.next;    
};
