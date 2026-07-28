/**
 * 21. Merge Two Sorted Lists — Easy
 * https://leetcode.com/problems/merge-two-sorted-lists/
 *
 * Approach:
 * Time:  O()
 * Space: O()
 */

// ListNode: { val, next }
const toList = (a) => a.reduceRight((next, val) => ({ val, next }), null);

const fromList = (h) => { const out = []; while (h) { out.push(h.val); h = h.next; } return out; };

function mergeTwoLists(list1, list2) {
  // TODO
}

// --- tests ---
console.log(fromList(mergeTwoLists(toList([1, 2, 4]), toList([1, 3, 4])))); // [1, 1, 2, 3, 4, 4]
console.log(fromList(mergeTwoLists(toList([]), toList([])))); // []
console.log(fromList(mergeTwoLists(toList([]), toList([0])))); // [0]
