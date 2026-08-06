/**
 * 347. Top K Frequent Elements — Medium
 * https://leetcode.com/problems/top-k-frequent-elements/
 *
 * Approach:
 * Time:  O()
 * Space: O()
 */

function topKFrequent(nums, k) {
  const freq = new Map();
  for (const num of nums) {
    freq.set(num, (freq.get(num) || 0) + 1);
  }

  const buckets = Array.from({ length: nums.length + 1 }, () => []);
  for (const [num, count] of freq) {
    buckets[count].push(num);
  }

  const result = [];
  for (
    let count = buckets.length - 1;
    count > 0 && result.length < k;
    count--
  ) {
    for (const num of buckets[count]) {
      result.push(num);
      if (result.length === k) break;
    }
  }

  return result;
}

// --- tests ---
console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2)); // [1, 2]  (order may vary)
console.log(topKFrequent([1], 1)); // [1]
