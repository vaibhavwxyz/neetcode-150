/**
 * 23. Merge K Sorted Lists — Hard
 * https://leetcode.com/problems/merge-k-sorted-lists/
 *
 * Approach:
 * Time:  O()
 * Space: O()
 */

// ListNode: { val, next }
const toList = (a) => a.reduceRight((next, val) => ({ val, next }), null);

const fromList = (h) => { const out = []; while (h) { out.push(h.val); h = h.next; } return out; };

function mergeKLists(lists) {
  // TODO
}

// --- tests ---
console.log(fromList(mergeKLists([[1, 4, 5], [1, 3, 4], [2, 6]].map(toList))));
// [1, 1, 2, 3, 4, 4, 5, 6]
console.log(fromList(mergeKLists([]))); // []
console.log(fromList(mergeKLists([[]].map(toList)))); // []
