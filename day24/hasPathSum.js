/**
 * hasPathSum(root, targetSum)
 * ---------------------------
 * Given the root of a binary tree and an integer targetSum,
 * determine if the tree has a path from the root to any *leaf*
 * such that the sum of all the node values along that path equals targetSum.
 *
 * @param {TreeNode} root - the root node of the binary tree
 * @param {number} targetSum - the desired total from root to leaf
 * @return {boolean} - true if such a path exists, otherwise false
 */

var hasPathSum = function(root, targetSum) {
  // 🧩 STEP 1: Handle the base case where the tree is empty
  // If there’s no root, there’s nothing to traverse — no path can exist.
  if (!root) return false;

  // 🧩 STEP 2: Check if we are currently at a leaf node
  // A leaf node is a node that has no left and right children.
  // If we are at a leaf, we check whether the value of this leaf
  // exactly matches the remaining target sum.
  if (!root.left && !root.right) {
      // If the current node value equals the targetSum, we found a valid path.
      return root.val === targetSum;
  }

  // 🧩 STEP 3: If not a leaf, we still have branches to explore.
  // Subtract the current node’s value from the target sum.
  // This means we’ve “used up” part of the target by including this node.
  const remainingSum = targetSum - root.val;

  // 🧩 STEP 4: Recursively explore both left and right subtrees.
  // At each recursive call:
  //  - The tree gets smaller (we move down one level).
  //  - The target sum gets smaller (we reduce by the current node’s value).
  // We return true if *either* the left or the right subtree contains
  // a valid path that matches the remaining sum.
  return (
      hasPathSum(root.left, remainingSum) ||
      hasPathSum(root.right, remainingSum)
  );
};

// Having a logic run inside of the return statement will make processing time a bit slower so in place of that last block of code, we can do:

const findRight = hasPathSum(root.right, remainder)
const findLeft = hasPathSum(root.left, remainder)


return findRight || findLeft

/** --------------------------------------------- OR ------------------------------------------------ */

