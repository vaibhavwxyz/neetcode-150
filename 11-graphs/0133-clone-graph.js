/**
 * 133. Clone Graph — Medium
 * https://leetcode.com/problems/clone-graph/
 *
 * Approach:
 * Time:  O()
 * Space: O()
 */

// Node: { val, neighbors }  —  adj[i] lists the neighbours of node i+1
const toGraph = (adj) => {
  const nodes = adj.map((_, i) => ({ val: i + 1, neighbors: [] }));
  adj.forEach((nbrs, i) => { nodes[i].neighbors = nbrs.map((v) => nodes[v - 1]); });
  return nodes[0] ?? null;
};
const fromGraph = (start) => {
  const out = [];
  const seen = new Set();
  const walk = (n) => {
    if (!n || seen.has(n)) return;
    seen.add(n);
    out[n.val - 1] = n.neighbors.map((x) => x.val);
    n.neighbors.forEach(walk);
  };
  walk(start);
  return out;
};

function cloneGraph(node) {
  // TODO
}

// --- tests ---
console.log(fromGraph(cloneGraph(toGraph([[2, 4], [1, 3], [2, 4], [1, 3]]))));
// [[2,4], [1,3], [2,4], [1,3]]
console.log(fromGraph(cloneGraph(toGraph([[]])))); // [[]]
console.log(cloneGraph(toGraph([]))); // null
