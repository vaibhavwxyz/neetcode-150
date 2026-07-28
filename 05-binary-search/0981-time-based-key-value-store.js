/**
 * 981. Time Based Key-Value Store — Medium
 * https://leetcode.com/problems/time-based-key-value-store/
 *
 * Approach:
 * Time:  O()
 * Space: O()
 */

class TimeMap {
  constructor() {
    // TODO
  }

  set(key, value, timestamp) {
    // TODO
  }

  get(key, timestamp) {
    // TODO
  }
}

// --- tests ---
const tm = new TimeMap();
tm.set("foo", "bar", 1);
console.log(tm.get("foo", 1)); // "bar"
console.log(tm.get("foo", 3)); // "bar"
tm.set("foo", "bar2", 4);
console.log(tm.get("foo", 4)); // "bar2"
console.log(tm.get("foo", 5)); // "bar2"
console.log(tm.get("foo", 0)); // ""
