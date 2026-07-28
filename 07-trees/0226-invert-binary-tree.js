/**
 * 226. Invert Binary Tree — Easy
 * https://leetcode.com/problems/invert-binary-tree/
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

const fromTree = (root) => {
  const out = [];
  const q = [root];
  while (q.length) {
    const n = q.shift();
    if (!n) { out.push(null); continue; }
    out.push(n.val);
    q.push(n.left, n.right);
  }
  while (out.length && out[out.length - 1] === null) out.pop();
  return out;
};

function invertTree(root) {
  // TODO
}

// --- tests ---
console.log(fromTree(invertTree(toTree([4, 2, 7, 1, 3, 6, 9])))); // [4, 7, 2, 9, 6, 3, 1]
console.log(fromTree(invertTree(toTree([2, 1, 3])))); // [2, 3, 1]
console.log(fromTree(invertTree(toTree([])))); // []
