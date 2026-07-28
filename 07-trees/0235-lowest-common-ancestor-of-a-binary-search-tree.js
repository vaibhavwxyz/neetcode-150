/**
 * 235. Lowest Common Ancestor of a BST — Medium
 * https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/
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

const find = (n, val) => (n === null ? null : n.val === val ? n : find(n.left, val) ?? find(n.right, val));

function lowestCommonAncestor(root, p, q) {
  // TODO
}

// --- tests ---
const bst = toTree([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]);
console.log(lowestCommonAncestor(bst, find(bst, 2), find(bst, 8))?.val); // 6
console.log(lowestCommonAncestor(bst, find(bst, 2), find(bst, 4))?.val); // 2
