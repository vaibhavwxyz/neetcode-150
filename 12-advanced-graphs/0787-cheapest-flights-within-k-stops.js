/**
 * 787. Cheapest Flights Within K Stops — Medium
 * https://leetcode.com/problems/cheapest-flights-within-k-stops/
 *
 * Approach:
 * Time:  O()
 * Space: O()
 */

function findCheapestPrice(n, flights, src, dst, k) {
  // TODO
}

// --- tests ---
console.log(findCheapestPrice(4, [[0, 1, 100], [1, 2, 100], [2, 0, 100], [1, 3, 600], [2, 3, 200]], 0, 3, 1)); // 700
console.log(findCheapestPrice(3, [[0, 1, 100], [1, 2, 100], [0, 2, 500]], 0, 2, 1)); // 200
console.log(findCheapestPrice(3, [[0, 1, 100], [1, 2, 100], [0, 2, 500]], 0, 2, 0)); // 500
