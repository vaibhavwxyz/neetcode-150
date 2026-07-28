/**
 * 155. Min Stack — Medium
 * https://leetcode.com/problems/min-stack/
 *
 * Approach:
 * Time:  O()
 * Space: O()
 */

class MinStack {
  constructor() {
    // TODO
  }

  push(val) {
    // TODO
  }

  pop() {
    // TODO
  }

  top() {
    // TODO
  }

  getMin() {
    // TODO
  }
}

// --- tests ---
const st = new MinStack();
st.push(-2);
st.push(0);
st.push(-3);
console.log(st.getMin()); // -3
st.pop();
console.log(st.top()); // 0
console.log(st.getMin()); // -2
