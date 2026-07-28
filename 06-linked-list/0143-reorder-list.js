/**
 * 143. Reorder List — Medium
 * https://leetcode.com/problems/reorder-list/
 *
 * Approach:
 * Time:  O()
 * Space: O()
 */

// ListNode: { val, next }
const toList = (a) => a.reduceRight((next, val) => ({ val, next }), null);

const fromList = (h) => { const out = []; while (h) { out.push(h.val); h = h.next; } return out; };

function reorderList(head) {
  // TODO
}

// --- tests ---
const a = toList([1, 2, 3, 4]);
reorderList(a);
console.log(fromList(a)); // [1, 4, 2, 3]

const b = toList([1, 2, 3, 4, 5]);
reorderList(b);
console.log(fromList(b)); // [1, 5, 2, 4, 3]
