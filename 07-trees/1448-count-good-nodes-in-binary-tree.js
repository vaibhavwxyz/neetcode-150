/**
 * 1448. Count Good Nodes in Binary Tree — Medium
 * https://leetcode.com/problems/count-good-nodes-in-binary-tree/
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

function goodNodes(root) {
  // TODO
}

// --- tests ---
console.log(goodNodes(toTree([3, 1, 4, 3, null, 1, 5]))); // 4
console.log(goodNodes(toTree([3, 3, null, 4, 2]))); // 3
console.log(goodNodes(toTree([1]))); // 1
