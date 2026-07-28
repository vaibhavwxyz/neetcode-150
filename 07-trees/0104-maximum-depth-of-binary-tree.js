/**
 * 104. Maximum Depth of Binary Tree — Easy
 * https://leetcode.com/problems/maximum-depth-of-binary-tree/
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

function maxDepth(root) {
  // TODO
}

// --- tests ---
console.log(maxDepth(toTree([3, 9, 20, null, null, 15, 7]))); // 3
console.log(maxDepth(toTree([1, null, 2]))); // 2
console.log(maxDepth(toTree([]))); // 0
