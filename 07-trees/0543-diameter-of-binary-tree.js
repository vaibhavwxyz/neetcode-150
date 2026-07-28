/**
 * 543. Diameter of Binary Tree — Easy
 * https://leetcode.com/problems/diameter-of-binary-tree/
 *
 * Approach:
 * Time:  O()
 * Space: O()
 */

// TreeNode: { val, left, right }
const toTree = (a) => {
  if (!a.length || a[0] === null) return null;
  const root = { val: a[0], left: null, right: null };
  const q = [root];
  let i = 1;
  while (q.length && i < a.length) {
    const node = q.shift();
    if (a[i] !== null) q.push((node.left = { val: a[i], left: null, right: null }));
    i++;
    if (i < a.length && a[i] !== null) q.push((node.right = { val: a[i], left: null, right: null }));
    i++;
  }
  return root;
};

function diameterOfBinaryTree(root) {
  // TODO
}

// --- tests ---
console.log(diameterOfBinaryTree(toTree([1, 2, 3, 4, 5]))); // 3
console.log(diameterOfBinaryTree(toTree([1, 2]))); // 1
