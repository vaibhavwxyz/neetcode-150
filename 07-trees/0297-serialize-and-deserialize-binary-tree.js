/**
 * 297. Serialize and Deserialize Binary Tree — Hard
 * https://leetcode.com/problems/serialize-and-deserialize-binary-tree/
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

function serialize(root) {
  // TODO
}

function deserialize(data) {
  // TODO
}

// --- tests ---
console.log(fromTree(deserialize(serialize(toTree([1, 2, 3, null, null, 4, 5])))));
// [1, 2, 3, null, null, 4, 5]
console.log(fromTree(deserialize(serialize(toTree([]))))); // []
