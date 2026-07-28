/**
 * 212. Word Search II — Hard
 * https://leetcode.com/problems/word-search-ii/
 *
 * Approach:
 * Time:  O()
 * Space: O()
 */

function findWords(board, words) {
  // TODO
}

// --- tests ---
console.log(findWords(
  [["o", "a", "a", "n"], ["e", "t", "a", "e"], ["i", "h", "k", "r"], ["i", "f", "l", "v"]],
  ["oath", "pea", "eat", "rain"],
)); // ["oath", "eat"]  (order may vary)
console.log(findWords([["a", "b"], ["c", "d"]], ["abcb"])); // []
