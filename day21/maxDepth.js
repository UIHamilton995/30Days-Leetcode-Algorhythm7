var maxDepth = function(root) {
  // 🧩 Base Case 1: If the root is null (tree is empty)
  // ---------------------------------------------------
  // In recursion, we always need a stopping condition — a "base case".
  // Here, if there's no node (root === null), that means we've gone
  // past a leaf node and reached an empty branch. So, depth = 0.
  if (root === null) return 0;

  // 🧠 Recursive Breakdown:
  // Each node is like a "mini tree" — we’ll calculate how deep its left
  // and right branches go, and then pick the deeper one.

  // Step 1: Recurse (go deeper) into the LEFT subtree
  // This will keep calling maxDepth() on every left child until it reaches null.
  let leftDepth = maxDepth(root.left);

  // Step 2: Recurse (go deeper) into the RIGHT subtree
  // Same process for the right branch.
  let rightDepth = maxDepth(root.right);

  // Step 3: Combine Results
  // After exploring both sides, whichever side is deeper determines how deep this node’s tree is.
  // Add +1 to count the current node level itself.
  let currentDepth = 1 + Math.max(leftDepth, rightDepth);

  // 🪜 Example: 
  // If leftDepth = 2 and rightDepth = 4 → current node depth = 1 + 4 = 5

  return currentDepth;
};

/** ------------------------------------------ OR ---------------------------------------------------- */

var maxDepth = function(root) {
  // 🧩 Base Case: If there's no root (tree is empty)
  if (!root) return 0;

  // 📦 We’ll use a queue (like a line of people waiting) to explore the tree level by level.
  // Start by adding the root node to the queue.
  let queue = [root];

  // 🧮 This variable will count how many "levels" we’ve traversed — that’s our depth.
  let depth = 0;

  // 🔁 Keep going while there are still nodes to process in the queue
  while (queue.length > 0) {

    // 🧾 The queue currently holds all nodes of the current level.
    // We’ll process them all before moving to the next.
    let levelSize = queue.length;

    // 🪜 Each loop through this while() represents going down one level
    depth++;

    // 🧍 Loop through all nodes currently in this level
    for (let i = 0; i < levelSize; i++) {
      // Remove (dequeue) the front node in the queue
      let node = queue.shift();

      // 🫱 If this node has a left child, we add it to the queue
      if (node.left) queue.push(node.left);

      // 🫲 Same for the right child
      if (node.right) queue.push(node.right);
    }

    // 🔁 After processing this entire level, the queue now contains
    // all the nodes of the next level.
  }

  // 🧮 When the queue is empty, we’ve processed all levels.
  // The 'depth' variable now equals the number of levels in the tree.
  return depth;
};
