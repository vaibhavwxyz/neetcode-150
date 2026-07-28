/**
 * 286. Walls and Gates — Medium
 * https://leetcode.com/problems/walls-and-gates/
 *
 * Approach:
 * Time:  O()
 * Space: O()
 */

function wallsAndGates(rooms) {
  // TODO
}

// --- tests ---
const INF = 2147483647;
const rooms = [
  [INF, -1, 0, INF],
  [INF, INF, INF, -1],
  [INF, -1, INF, -1],
  [0, -1, INF, INF],
];
wallsAndGates(rooms);
console.log(rooms);
// [[3,-1,0,1], [2,2,1,-1], [1,-1,2,-1], [0,-1,3,4]]
