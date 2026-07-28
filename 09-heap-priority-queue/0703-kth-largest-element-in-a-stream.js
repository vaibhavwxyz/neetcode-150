/**
 * 703. Kth Largest Element in a Stream — Easy
 * https://leetcode.com/problems/kth-largest-element-in-a-stream/
 *
 * Approach:
 * Time:  O()
 * Space: O()
 */

class KthLargest {
  constructor(k, nums) {
    // TODO
  }

  add(val) {
    // TODO
  }
}

// --- tests ---
const kth = new KthLargest(3, [4, 5, 8, 2]);
console.log(kth.add(3)); // 4
console.log(kth.add(5)); // 5
console.log(kth.add(10)); // 5
console.log(kth.add(9)); // 8
console.log(kth.add(4)); // 8
