/**
 * 217. Contains Duplicate — Easy
 * https://leetcode.com/problems/contains-duplicate/
 *
 * Approach:
 * Time:  O()
 * Space: O()
 */

function containsDuplicate(nums) {
  return new Set(nums).size !== nums.length;
}

// --- tests ---
console.log(containsDuplicate([1, 2, 3, 1])); // true
console.log(containsDuplicate([1, 2, 3, 4])); // false
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // true
