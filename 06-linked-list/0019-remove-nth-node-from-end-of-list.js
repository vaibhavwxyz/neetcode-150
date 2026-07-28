/**
 * 19. Remove Nth Node From End of List — Medium
 * https://leetcode.com/problems/remove-nth-node-from-end-of-list/
 *
 * Approach:
 * Time:  O()
 * Space: O()
 */

// ListNode: { val, next }
const toList = (a) => a.reduceRight((next, val) => ({ val, next }), null);

const fromList = (h) => { const out = []; while (h) { out.push(h.val); h = h.next; } return out; };

function removeNthFromEnd(head, n) {
  // TODO
}

// --- tests ---
console.log(fromList(removeNthFromEnd(toList([1, 2, 3, 4, 5]), 2))); // [1, 2, 3, 5]
console.log(fromList(removeNthFromEnd(toList([1]), 1))); // []
console.log(fromList(removeNthFromEnd(toList([1, 2]), 1))); // [1]
