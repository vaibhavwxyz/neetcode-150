/**
 * 2. Add Two Numbers — Medium
 * https://leetcode.com/problems/add-two-numbers/
 *
 * Approach:
 * Time:  O()
 * Space: O()
 */

// ListNode: { val, next }
const toList = (a) => a.reduceRight((next, val) => ({ val, next }), null);

const fromList = (h) => { const out = []; while (h) { out.push(h.val); h = h.next; } return out; };

function addTwoNumbers(l1, l2) {
  // TODO
}

// --- tests ---
console.log(fromList(addTwoNumbers(toList([2, 4, 3]), toList([5, 6, 4])))); // [7, 0, 8]
console.log(fromList(addTwoNumbers(toList([0]), toList([0])))); // [0]
console.log(fromList(addTwoNumbers(toList([9, 9, 9, 9, 9, 9, 9]), toList([9, 9, 9, 9]))));
// [8, 9, 9, 9, 0, 0, 0, 1]
