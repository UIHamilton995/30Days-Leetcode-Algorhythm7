/**
 * invertTree(root)
 * ----------------
 * Inverts (mirrors) a binary tree.
 * For each node, swap its left and right child,
 * then repeat the process recursively for both children.
 */
var invertTree = function(root) {
  // 🧩 Base case: if there’s no node, stop recursion.
  if (!root) return null;

  /* 🧩 Step 1: We temporarily store the left child of the current node. This is needed because the next line will overwrite root.left. Without this step, we’d lose the reference to the original left child forever. */
  const temp = root.left;
  /** We now assign the right child to the left pointer. So, what was originally the right subtree is now moved to the left side. */
  root.left = root.right;
  /** Finally, we restore what we saved earlier — the original left child (which is in temp) — and assign it to the right side. That completes the swap. */
  root.right = temp;

  // 🧩 Step 2: Recursively invert left and right subtrees.
  invertTree(root.left);
  invertTree(root.right);

  // 🧩 Step 3: Return the root node once the entire tree is processed.
  return root;
};

/** -------------------------------------------- OR --------------------------------------------- */

/**
 * Iterative BFS version
 * ---------------------
 * Instead of recursion, this uses a queue to traverse the tree level by level.
 * Each node’s children are swapped before moving to the next level.
 */
var invertTree = function(root) {
  if (!root) return null;

  // 🧩 Step 1: Use a queue (array) for level-order traversal
  let queue = [root];

  // 🧩 Step 2: Process nodes level by level
  while (queue.length > 0) {
      // Take the first node out of the queue
      let current = queue.shift();

      // 🧩 Step 3: Swap its left and right children
      [current.left, current.right] = [current.right, current.left];

      // 🧩 Step 4: Add non-null children to the queue for future processing
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
  }

  // 🧩 Step 5: Return the root after inverting all nodes
  return root;
};
