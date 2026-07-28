/**
 * 100. Same Tree — Easy
 * https://leetcode.com/problems/same-tree/
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

function isSameTree(p, q) {
  // TODO
}

// --- tests ---
console.log(isSameTree(toTree([1, 2, 3]), toTree([1, 2, 3]))); // true
console.log(isSameTree(toTree([1, 2]), toTree([1, null, 2]))); // false
console.log(isSameTree(toTree([1, 2, 1]), toTree([1, 1, 2]))); // false
