/**
 * 242. Valid Anagram — Easy
 * https://leetcode.com/problems/valid-anagram/
 *
 * Approach:
 * Time:  O()
 * Space: O()
 */

function isAnagram(s, t) {
  var sorted_s = s.split("").sort().join("");
  var sorted_t = t.split("").sort().join("");
  return sorted_s === sorted_t;
}

// --- tests ---
console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat", "car")); // false
