/**
 * 105. Construct Binary Tree from Preorder and Inorder Traversal — Medium
 * https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
 *
 * Approach:
 * Time:  O()
 * Space: O()
 */

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

function buildTree(preorder, inorder) {
  // TODO
}

// --- tests ---
console.log(fromTree(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7])));
// [3, 9, 20, null, null, 15, 7]
console.log(fromTree(buildTree([-1], [-1]))); // [-1]
