/**
 * 210. Course Schedule II — Medium
 * https://leetcode.com/problems/course-schedule-ii/
 *
 * Approach:
 * Time:  O()
 * Space: O()
 */

function findOrder(numCourses, prerequisites) {
  // TODO
}

// --- tests ---
console.log(findOrder(2, [[1, 0]])); // [0, 1]
console.log(findOrder(4, [[1, 0], [2, 0], [3, 1], [3, 2]])); // [0, 1, 2, 3]  (order may vary)
console.log(findOrder(1, [])); // [0]
