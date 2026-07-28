/**
 * 230. Kth Smallest Element in a BST — Medium
 * https://leetcode.com/problems/kth-smallest-element-in-a-bst/
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

function kthSmallest(root, k) {
  // TODO
}

// --- tests ---
console.log(kthSmallest(toTree([3, 1, 4, null, 2]), 1)); // 1
console.log(kthSmallest(toTree([5, 3, 6, 2, 4, null, null, 1]), 3)); // 3
