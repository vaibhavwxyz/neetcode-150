/**
 * 98. Validate Binary Search Tree — Medium
 * https://leetcode.com/problems/validate-binary-search-tree/
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

function isValidBST(root) {
  // TODO
}

// --- tests ---
console.log(isValidBST(toTree([2, 1, 3]))); // true
console.log(isValidBST(toTree([5, 1, 4, null, null, 3, 6]))); // false
