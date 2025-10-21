/**
 * Binary Tree Level Order Traversal (BFS)
 * ---------------------------------------
 * We are asked to traverse a binary tree level by level — from top to bottom.
 * Each "level" of the tree becomes one subarray in the final result.
 *
 * Example:
 *      3
 *     / \
 *    9  20
 *       / \
 *      15  7
 * 
 * Output: [[3], [9,20], [15,7]]
 */

var levelOrder = function(root) {
  // ✅ STEP 1: Handle the base case
  // If there is no tree (root is null), there are no levels to traverse.
  if (!root) return [];

  // ✅ STEP 2: Initialize our result array
  // This will eventually hold arrays like [[3], [9,20], [15,7]]
  let result = [];

  // ✅ STEP 3: Initialize a queue for BFS traversal
  // The queue helps us process nodes level by level.
  // Start with the root node (the first level).
  let queue = [root];

  // ✅ STEP 4: Loop while there are still nodes to process
  while (queue.length > 0) {

      // The number of nodes currently in the queue represents one *full level*
      let levelSize = queue.length;

      // We'll collect all node values at this level in a temporary array
      let currentLevel = [];

      // ✅ STEP 5: Process exactly 'levelSize' nodes from the queue
      for (let i = 0; i < levelSize; i++) {
          // Dequeue the first node (FIFO)
          let node = queue.shift();

          // Record its value into the current level array
          currentLevel.push(node.val);

          // Enqueue the node’s children for the next level (if they exist)
          if (node.left) queue.push(node.left);
          if (node.right) queue.push(node.right);
      }

      // ✅ STEP 6: Add the current level array to the result
      result.push(currentLevel);
  }

  // ✅ STEP 7: Once the queue is empty, return the result
  return result;
};


/** ------------------------------------------- OR ---------------------------------------------------- */

/**
 * Recursive Level Order Traversal
 * ---------------------------------
 * Problem: Return an array of arrays where each inner array contains all
 * the node values at that specific depth (level) of the binary tree.
 *
 * Example Tree:
 *       3
 *      / \
 *     9  20
 *        / \
 *       15  7
 *
 * Output: [[3], [9, 20], [15, 7]]
 *
 * This approach uses RECURSION instead of a queue (like BFS).
 * It keeps track of the depth (or "level") of each node
 * and stores node values inside their corresponding subarray in `result`.
 */

var levelOrder = function(root) {
  // ✅ STEP 1: Prepare the final result array
  // Each index in `levels` will represent a depth level in the tree.
  // Example: levels[0] = [3], levels[1] = [9,20], levels[2] = [15,7]
  const levels = [];

  /**
   * Helper Function: traverseTree(node, levelIndex)
   * ------------------------------------------------
   * @param {TreeNode} node - the current node being visited
   * @param {number} levelIndex - how deep we are in the tree (starting from 0)
   *
   * This recursive helper:
   *  - Stops if the node is null
   *  - Ensures an array exists for the current level in `levels`
   *  - Pushes the node's value into the correct level array
   *  - Recursively processes left and right child nodes, increasing level by 1
   */
  function traverseTree(node, levelIndex) {
      // Base case: if the current node is null, stop recursion.
      if (!node) return;

      // If no array exists yet for this level, create one.
      // Optional chaining check was removed for clarity; this is beginner-safe.
      if (!levels[levelIndex]) {
          levels[levelIndex] = [];
      }

      // Add the current node's value to the correct level array.
      levels[levelIndex].push(node.val);

      // Recursively go down one level to the left and right children.
      traverseTree(node.left, levelIndex + 1);
      traverseTree(node.right, levelIndex + 1);
  }

  // ✅ STEP 2: Start recursion at the root node, which is level 0
  traverseTree(root, 0);

  // ✅ STEP 3: Return the completed 2D array of levels
  return levels;
};
