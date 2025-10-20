function hasCycle(head) {
  // 🧩 Step 1: Handle edge cases
  // If the list is empty (no head) or has only one node (no next), 
  // it’s impossible for it to form a cycle.
  if (!head || !head.next) {
    return false;
  }

  // 🐢🐇 Step 2: Create two pointers
  // 'slow' moves one step at a time.
  // 'fast' moves two steps at a time.
  let slow = head;
  let fast = head;

  // 🔁 Step 3: Traverse the linked list
  // Continue looping while 'fast' and 'fast.next' exist.
  // If 'fast' or 'fast.next' becomes null, it means the list ends — no cycle.
  while (fast && fast.next) {
    // Move slow by 1 step
    slow = slow.next;

    // Move fast by 2 steps
    fast = fast.next.next;

    // ⚡ Step 4: Cycle detection logic
    // If 'slow' and 'fast' point to the same node at any time,
    // it means there's a loop (they are running around the same track).
    if (slow === fast) {
      return true; // Cycle detected
    }
  }

  // 🚫 Step 5: If we exit the loop, it means 'fast' reached null — no cycle
  return false;
}

/** ----------------------------------------- OR ------------------------------------------------- */

function  hasCycle(head) {
  // 🧩 Step 1: Create a new Set (a special data structure in JavaScript)
  // A Set stores unique values — no duplicates allowed.
  // Here, we'll use it to remember which nodes we've already visited.
  const set = new Set();

  // 🧭 Step 2: Start traversing the linked list from the head node.
  let current = head;

  // 🔁 Step 3: Continue moving through the linked list
  // We'll stop if we reach the end (null), or detect a cycle along the way.
  while (current) {

    // 🧠 Step 4: Check if we've seen this node before
    // 'set.has(current)' means: “Have we visited this exact node object already?”
    // If yes, that means we’ve looped back — there’s a CYCLE in the list.
    if (set.has(current)) {
      return true; // ✅ Cycle detected
    }

    // 📌 Step 5: Otherwise, record this node as 'visited' by adding it to the Set.
    // This way, if we ever encounter this same node again later,
    // we’ll know we’re in a loop.
    set.add(current);

    // 🚶 Step 6: Move to the next node in the linked list.
    current = current.next;
  }

  // 🛑 Step 7: If we exit the while loop, it means 'current' became null.
  // That means the list had a clear end — no loop was found.
  return false;
};
