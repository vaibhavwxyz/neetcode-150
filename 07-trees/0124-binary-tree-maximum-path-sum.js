/**
 * 124. Binary Tree Maximum Path Sum — Hard
 * https://leetcode.com/problems/binary-tree-maximum-path-sum/
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

function maxPathSum(root) {
  // TODO
}

// --- tests ---
console.log(maxPathSum(toTree([1, 2, 3]))); // 6
console.log(maxPathSum(toTree([-10, 9, 20, null, null, 15, 7]))); // 42
