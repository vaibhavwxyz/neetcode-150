/**
 * 79. Word Search — Medium
 * https://leetcode.com/problems/word-search/
 *
 * Approach:
 * Time:  O()
 * Space: O()
 */

function exist(board, word) {
  // TODO
}

// --- tests ---
const grid = [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]];
console.log(exist(grid, "ABCCED")); // true
console.log(exist(grid, "SEE")); // true
console.log(exist(grid, "ABCB")); // false
