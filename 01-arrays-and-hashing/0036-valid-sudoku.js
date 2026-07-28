/**
 * 36. Valid Sudoku — Medium
 * https://leetcode.com/problems/valid-sudoku/
 *
 * Approach:
 * Time:  O()
 * Space: O()
 */

function isValidSudoku(board) {
  // TODO
}

// --- tests ---
const board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];
console.log(isValidSudoku(board)); // true

// same board with the top-left 5 changed to 8 -> clashes with the 8 already at
// [3][0] in column 0, and with the 8 at [2][2] in the top-left box
const bad = board.map((row) => [...row]);
bad[0][0] = "8";
console.log(isValidSudoku(bad)); // false
