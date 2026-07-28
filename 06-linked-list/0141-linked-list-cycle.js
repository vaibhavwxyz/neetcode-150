/**
 * 141. Linked List Cycle — Easy
 * https://leetcode.com/problems/linked-list-cycle/
 *
 * Approach:
 * Time:  O()
 * Space: O()
 */

// ListNode: { val, next }
const toList = (a) => a.reduceRight((next, val) => ({ val, next }), null);

const withCycle = (a, pos) => {
  const head = toList(a);
  if (pos < 0) return head;
  let tail = head;
  while (tail.next) tail = tail.next;
  let cyc = head;
  for (let i = 0; i < pos; i++) cyc = cyc.next;
  tail.next = cyc;
  return head;
};

function hasCycle(head) {
  // TODO
}

// --- tests ---
console.log(hasCycle(withCycle([3, 2, 0, -4], 1))); // true
console.log(hasCycle(withCycle([1, 2], 0))); // true
console.log(hasCycle(withCycle([1], -1))); // false
