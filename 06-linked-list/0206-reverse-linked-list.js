/**
 * 206. Reverse Linked List — Easy
 * https://leetcode.com/problems/reverse-linked-list/
 *
 * Approach:
 * Time:  O()
 * Space: O()
 */

// ListNode: { val, next }
const toList = (a) => a.reduceRight((next, val) => ({ val, next }), null);

const fromList = (h) => { const out = []; while (h) { out.push(h.val); h = h.next; } return out; };

function reverseList(head) {
  // TODO
}

// --- tests ---
console.log(fromList(reverseList(toList([1, 2, 3, 4, 5])))); // [5, 4, 3, 2, 1]
console.log(fromList(reverseList(toList([1, 2])))); // [2, 1]
console.log(fromList(reverseList(toList([])))); // []
