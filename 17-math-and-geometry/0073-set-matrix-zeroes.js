/**
 * 73. Set Matrix Zeroes — Medium
 * https://leetcode.com/problems/set-matrix-zeroes/
 *
 * Approach:
 * Time:  O()
 * Space: O()
 */

function setZeroes(matrix) {
  // TODO
}

// --- tests ---
const g1 = [[1, 1, 1], [1, 0, 1], [1, 1, 1]];
setZeroes(g1);
console.log(g1); // [[1, 0, 1], [0, 0, 0], [1, 0, 1]]

const g2 = [[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]];
setZeroes(g2);
console.log(g2); // [[0, 0, 0, 0], [0, 4, 5, 0], [0, 3, 1, 0]]
