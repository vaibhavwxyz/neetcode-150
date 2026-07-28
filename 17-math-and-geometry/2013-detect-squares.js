/**
 * 2013. Detect Squares — Medium
 * https://leetcode.com/problems/detect-squares/
 *
 * Approach:
 * Time:  O()
 * Space: O()
 */

class DetectSquares {
  constructor() {
    // TODO
  }

  add(point) {
    // TODO
  }

  count(point) {
    // TODO
  }
}

// --- tests ---
const ds = new DetectSquares();
ds.add([3, 10]);
ds.add([11, 2]);
ds.add([3, 2]);
console.log(ds.count([11, 10])); // 1
console.log(ds.count([14, 8])); // 0
ds.add([11, 2]);
console.log(ds.count([11, 10])); // 2
