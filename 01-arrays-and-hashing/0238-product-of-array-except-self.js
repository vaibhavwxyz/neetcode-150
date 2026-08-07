/**
 * 238. Product of Array Except Self — Medium
 * https://leetcode.com/problems/product-of-array-except-self/
 *
 * Approach:
 * Time:  O()
 * Space: O()
 */

function productExceptSelf(nums) {
  const n = nums.length;
  const result = new Array(n);

  let prefix = 1;
  for (let i = 0; i < n; i++) {
    result[i] = prefix;
    prefix *= nums[i];
  }

  let suffix = 1;
  for (let i = n - 1; i >= 0; i--) {
    result[i] *= suffix;
    suffix *= nums[i];
  }

  return result;
}

// --- tests ---
console.log(productExceptSelf([1, 2, 3, 4])); // [24, 12, 8, 6]
console.log(productExceptSelf([-1, 1, 0, -3, 3])); // [0, 0, 9, 0, 0]
