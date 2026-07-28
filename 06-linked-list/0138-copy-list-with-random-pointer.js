/**
 * 138. Copy List With Random Pointer — Medium
 * https://leetcode.com/problems/copy-list-with-random-pointer/
 *
 * Approach:
 * Time:  O()
 * Space: O()
 */

// Node: { val, next, random }  —  pairs are [val, randomIndex | null]
const toRandomList = (pairs) => {
  const nodes = pairs.map(([val]) => ({ val, next: null, random: null }));
  pairs.forEach(([, r], i) => {
    nodes[i].next = nodes[i + 1] ?? null;
    nodes[i].random = r === null ? null : nodes[r];
  });
  return nodes[0] ?? null;
};
const fromRandomList = (head) => {
  const idx = new Map();
  let n = head;
  for (let i = 0; n; n = n.next) idx.set(n, i++);
  const out = [];
  for (n = head; n; n = n.next) out.push([n.val, n.random === null ? null : idx.get(n.random)]);
  return out;
};

function copyRandomList(head) {
  // TODO
}

// --- tests ---
console.log(fromRandomList(copyRandomList(toRandomList([[7, null], [13, 0], [11, 4], [10, 2], [1, 0]]))));
// [[7,null], [13,0], [11,4], [10,2], [1,0]]
console.log(fromRandomList(copyRandomList(toRandomList([[1, 1], [2, 1]])))); // [[1,1], [2,1]]
console.log(fromRandomList(copyRandomList(toRandomList([])))); // []
