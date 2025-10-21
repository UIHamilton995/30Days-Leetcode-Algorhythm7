// Recursive solution: Compare nodes top-down, left and right subtrees recursively.
//
// Core idea:
// Two trees are the same if:
//  1) Both nodes are null (both empty) -> they match here.
//  2) Both nodes are non-null, have equal values, AND their left subtrees match AND their right subtrees match.
//  3) Otherwise -> not the same.
//
// This maps directly to a recursive definition and is very natural to reason about.

var isSameTree = function(p, q) {
  // ---------- Base cases ----------
  // If both nodes are null, we reached the end of both branches at the same time.
  // That means so far they match — return true for this branch.
  if (p === null && q === null) return true;

  // If one is null and the other isn't, shapes differ or one branch ended earlier.
  // Trees cannot be identical in this case.
  if (p === null || q === null) return false;

  // ---------- Value check ----------
  // If current nodes' values differ, trees differ here — stop and return false.
  if (p.val !== q.val) return false;

  // ---------- Recurse down both sides ----------
  // We need both left subtrees to match AND right subtrees to match.
  // Note: the recursive calls return booleans. Using logical AND ensures both must be true.
  const leftSame = isSameTree(p.left, q.left);
  const rightSame = isSameTree(p.right, q.right);

  return leftSame && rightSame;
};

/** ---------------------------------------------- OR ---------------------------------------------- */

// Iterative solution using a queue (BFS-style comparison).
// Idea: Walk both trees in lockstep level-by-level (or node-by-node) and compare corresponding nodes.
// This avoids recursion and explicit call-stack depth limits.

var isSameTree = function(p, q) {
  // If both roots are null, both empty trees -> same
  if (p === null && q === null) return true;

  // If only one is null, not the same
  if (p === null || q === null) return false;

  // Use a queue to process nodes in pairs: [nodeFromP, nodeFromQ]
  const queue = [];
  queue.push([p, q]);

  while (queue.length > 0) {
      // Dequeue a pair to compare
      const [nodeP, nodeQ] = queue.shift();

      // If both null, this pair matches; continue to next pair
      if (nodeP === null && nodeQ === null) continue;

      // If only one null or values differ -> not the same
      if (nodeP === null || nodeQ === null) return false;
      if (nodeP.val !== nodeQ.val) return false;

      // Enqueue children pairs in the same relative order.
      // We must compare corresponding left children and corresponding right children.
      queue.push([nodeP.left, nodeQ.left]);
      queue.push([nodeP.right, nodeQ.right]);
  }

  // If we exhausted all pairs without finding a mismatch, trees are the same
  return true;
};
