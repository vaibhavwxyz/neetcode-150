/**
 * 199. Binary Tree Right Side View — Medium
 * https://leetcode.com/problems/binary-tree-right-side-view/
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

function rightSideView(root) {
  // TODO
}

// --- tests ---
console.log(rightSideView(toTree([1, 2, 3, null, 5, null, 4]))); // [1, 3, 4]
console.log(rightSideView(toTree([1, null, 3]))); // [1, 3]
console.log(rightSideView(toTree([]))); // []
