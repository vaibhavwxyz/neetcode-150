/**
 * 25. Reverse Nodes in K-Group — Hard
 * https://leetcode.com/problems/reverse-nodes-in-k-group/
 *
 * Approach:
 * Time:  O()
 * Space: O()
 */

// ListNode: { val, next }
const toList = (a) => a.reduceRight((next, val) => ({ val, next }), null);

const fromList = (h) => { const out = []; while (h) { out.push(h.val); h = h.next; } return out; };

function reverseKGroup(head, k) {
  // TODO
}

// --- tests ---
console.log(fromList(reverseKGroup(toList([1, 2, 3, 4, 5]), 2))); // [2, 1, 4, 3, 5]
console.log(fromList(reverseKGroup(toList([1, 2, 3, 4, 5]), 3))); // [3, 2, 1, 4, 5]
