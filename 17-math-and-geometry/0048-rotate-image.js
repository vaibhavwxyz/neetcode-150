/**
 * 48. Rotate Image — Medium
 * https://leetcode.com/problems/rotate-image/
 *
 * Approach:
 * Time:  O()
 * Space: O()
 */

function rotate(matrix) {
  // TODO
}

// --- tests ---
const m1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
rotate(m1);
console.log(m1); // [[7, 4, 1], [8, 5, 2], [9, 6, 3]]

const m2 = [[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]];
rotate(m2);
console.log(m2); // [[15, 13, 2, 5], [14, 3, 4, 1], [12, 6, 8, 9], [16, 7, 10, 11]]
