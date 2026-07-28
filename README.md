# NeetCode 150

My solutions to the [NeetCode 150](https://neetcode.io/practice) — 150 problems across 18 topics,
solved in **JavaScript**. One commit per problem, one folder per topic.

**Progress: 0 / 150**

```
Easy   0 / 28
Medium 0 / 101
Hard   0 / 21
```

## Layout

```
neetcode/
├── 01-arrays-and-hashing/                       # 9 problems
├── 02-two-pointers/                             # 5 problems
├── 03-sliding-window/                           # 6 problems
├── 04-stack/                                    # 7 problems
├── 05-binary-search/                            # 7 problems
├── 06-linked-list/                              # 11 problems
├── 07-trees/                                    # 15 problems
├── 08-tries/                                    # 3 problems
├── 09-heap-priority-queue/                      # 7 problems
├── 10-backtracking/                             # 9 problems
├── 11-graphs/                                   # 13 problems
├── 12-advanced-graphs/                          # 6 problems
├── 13-1d-dynamic-programming/                   # 12 problems
├── 14-2d-dynamic-programming/                   # 11 problems
├── 15-greedy/                                   # 8 problems
├── 16-intervals/                                # 6 problems
├── 17-math-and-geometry/                        # 8 problems
└── 18-bit-manipulation/                         # 7 problems
```

Each solution file is named `<zero-padded LeetCode number>-<slug>.js`, e.g.
`01-arrays-and-hashing/0001-two-sum.js`.

## Solution file layout

Every file is self-contained and runnable — hit Run in the IDE (Code Runner) and the test
cases print straight to the output pane. No imports, no exports, no test runner.

```js
/**
 * 1. Two Sum — Easy
 * https://leetcode.com/problems/two-sum/
 *
 * Approach: one-pass hash map of value -> index.
 * Time:  O(n)
 * Space: O(n)
 */

function twoSum(nums, target) {
  // TODO
}

// --- tests ---
console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSum([3, 2, 4], 6)); // [1, 2]
console.log(twoSum([3, 3], 6)); // [0, 1]
```

Fill in the function body and the `Approach` / `Time` / `Space` lines. The trailing comment on
each `console.log` is the expected output — a few are marked `(order may vary)` where the
problem accepts any ordering.

Problems whose input is a linked list, binary tree, graph, or random-pointer list get small
`toList` / `fromList`, `toTree` / `fromTree`, `toGraph` / `fromGraph` converters inlined at the
top of the file, so tests read as plain arrays:

```js
console.log(fromList(reverseList(toList([1, 2, 3, 4, 5])))); // [5, 4, 3, 2, 1]
console.log(maxDepth(toTree([3, 9, 20, null, null, 15, 7]))); // 3
```

Design problems (LRU Cache, Trie, MedianFinder, …) come as a class skeleton with a call
sequence from the LeetCode example.

## Problems

`🔒` marks a LeetCode Premium problem — the free equivalent is on [neetcode.io](https://neetcode.io/practice).

### 1. Arrays & Hashing (9)

| ✓ | # | Problem | Difficulty | Solution |
| :-: | --: | --- | --- | --- |
| ⬜ | 217 | [Contains Duplicate](https://leetcode.com/problems/contains-duplicate/) | 🟢 Easy | `01-arrays-and-hashing/0217-contains-duplicate.js` |
| ⬜ | 242 | [Valid Anagram](https://leetcode.com/problems/valid-anagram/) | 🟢 Easy | `01-arrays-and-hashing/0242-valid-anagram.js` |
| ⬜ | 1 | [Two Sum](https://leetcode.com/problems/two-sum/) | 🟢 Easy | `01-arrays-and-hashing/0001-two-sum.js` |
| ⬜ | 49 | [Group Anagrams](https://leetcode.com/problems/group-anagrams/) | 🟡 Medium | `01-arrays-and-hashing/0049-group-anagrams.js` |
| ⬜ | 347 | [Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/) | 🟡 Medium | `01-arrays-and-hashing/0347-top-k-frequent-elements.js` |
| ⬜ | 271 | [Encode and Decode Strings](https://leetcode.com/problems/encode-and-decode-strings/) 🔒 | 🟡 Medium | `01-arrays-and-hashing/0271-encode-and-decode-strings.js` |
| ⬜ | 238 | [Product of Array Except Self](https://leetcode.com/problems/product-of-array-except-self/) | 🟡 Medium | `01-arrays-and-hashing/0238-product-of-array-except-self.js` |
| ⬜ | 36 | [Valid Sudoku](https://leetcode.com/problems/valid-sudoku/) | 🟡 Medium | `01-arrays-and-hashing/0036-valid-sudoku.js` |
| ⬜ | 128 | [Longest Consecutive Sequence](https://leetcode.com/problems/longest-consecutive-sequence/) | 🟡 Medium | `01-arrays-and-hashing/0128-longest-consecutive-sequence.js` |

### 2. Two Pointers (5)

| ✓ | # | Problem | Difficulty | Solution |
| :-: | --: | --- | --- | --- |
| ⬜ | 125 | [Valid Palindrome](https://leetcode.com/problems/valid-palindrome/) | 🟢 Easy | `02-two-pointers/0125-valid-palindrome.js` |
| ⬜ | 167 | [Two Sum II - Input Array Is Sorted](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/) | 🟡 Medium | `02-two-pointers/0167-two-sum-ii-input-array-is-sorted.js` |
| ⬜ | 15 | [3Sum](https://leetcode.com/problems/3sum/) | 🟡 Medium | `02-two-pointers/0015-3sum.js` |
| ⬜ | 11 | [Container With Most Water](https://leetcode.com/problems/container-with-most-water/) | 🟡 Medium | `02-two-pointers/0011-container-with-most-water.js` |
| ⬜ | 42 | [Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water/) | 🔴 Hard | `02-two-pointers/0042-trapping-rain-water.js` |

### 3. Sliding Window (6)

| ✓ | # | Problem | Difficulty | Solution |
| :-: | --: | --- | --- | --- |
| ⬜ | 121 | [Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/) | 🟢 Easy | `03-sliding-window/0121-best-time-to-buy-and-sell-stock.js` |
| ⬜ | 3 | [Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/) | 🟡 Medium | `03-sliding-window/0003-longest-substring-without-repeating-characters.js` |
| ⬜ | 424 | [Longest Repeating Character Replacement](https://leetcode.com/problems/longest-repeating-character-replacement/) | 🟡 Medium | `03-sliding-window/0424-longest-repeating-character-replacement.js` |
| ⬜ | 567 | [Permutation in String](https://leetcode.com/problems/permutation-in-string/) | 🟡 Medium | `03-sliding-window/0567-permutation-in-string.js` |
| ⬜ | 76 | [Minimum Window Substring](https://leetcode.com/problems/minimum-window-substring/) | 🔴 Hard | `03-sliding-window/0076-minimum-window-substring.js` |
| ⬜ | 239 | [Sliding Window Maximum](https://leetcode.com/problems/sliding-window-maximum/) | 🔴 Hard | `03-sliding-window/0239-sliding-window-maximum.js` |

### 4. Stack (7)

| ✓ | # | Problem | Difficulty | Solution |
| :-: | --: | --- | --- | --- |
| ⬜ | 20 | [Valid Parentheses](https://leetcode.com/problems/valid-parentheses/) | 🟢 Easy | `04-stack/0020-valid-parentheses.js` |
| ⬜ | 155 | [Min Stack](https://leetcode.com/problems/min-stack/) | 🟡 Medium | `04-stack/0155-min-stack.js` |
| ⬜ | 150 | [Evaluate Reverse Polish Notation](https://leetcode.com/problems/evaluate-reverse-polish-notation/) | 🟡 Medium | `04-stack/0150-evaluate-reverse-polish-notation.js` |
| ⬜ | 22 | [Generate Parentheses](https://leetcode.com/problems/generate-parentheses/) | 🟡 Medium | `04-stack/0022-generate-parentheses.js` |
| ⬜ | 739 | [Daily Temperatures](https://leetcode.com/problems/daily-temperatures/) | 🟡 Medium | `04-stack/0739-daily-temperatures.js` |
| ⬜ | 853 | [Car Fleet](https://leetcode.com/problems/car-fleet/) | 🟡 Medium | `04-stack/0853-car-fleet.js` |
| ⬜ | 84 | [Largest Rectangle in Histogram](https://leetcode.com/problems/largest-rectangle-in-histogram/) | 🔴 Hard | `04-stack/0084-largest-rectangle-in-histogram.js` |

### 5. Binary Search (7)

| ✓ | # | Problem | Difficulty | Solution |
| :-: | --: | --- | --- | --- |
| ⬜ | 704 | [Binary Search](https://leetcode.com/problems/binary-search/) | 🟢 Easy | `05-binary-search/0704-binary-search.js` |
| ⬜ | 74 | [Search a 2D Matrix](https://leetcode.com/problems/search-a-2d-matrix/) | 🟡 Medium | `05-binary-search/0074-search-a-2d-matrix.js` |
| ⬜ | 875 | [Koko Eating Bananas](https://leetcode.com/problems/koko-eating-bananas/) | 🟡 Medium | `05-binary-search/0875-koko-eating-bananas.js` |
| ⬜ | 153 | [Find Minimum in Rotated Sorted Array](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/) | 🟡 Medium | `05-binary-search/0153-find-minimum-in-rotated-sorted-array.js` |
| ⬜ | 33 | [Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/) | 🟡 Medium | `05-binary-search/0033-search-in-rotated-sorted-array.js` |
| ⬜ | 981 | [Time Based Key-Value Store](https://leetcode.com/problems/time-based-key-value-store/) | 🟡 Medium | `05-binary-search/0981-time-based-key-value-store.js` |
| ⬜ | 4 | [Median of Two Sorted Arrays](https://leetcode.com/problems/median-of-two-sorted-arrays/) | 🔴 Hard | `05-binary-search/0004-median-of-two-sorted-arrays.js` |

### 6. Linked List (11)

| ✓ | # | Problem | Difficulty | Solution |
| :-: | --: | --- | --- | --- |
| ⬜ | 206 | [Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/) | 🟢 Easy | `06-linked-list/0206-reverse-linked-list.js` |
| ⬜ | 21 | [Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/) | 🟢 Easy | `06-linked-list/0021-merge-two-sorted-lists.js` |
| ⬜ | 143 | [Reorder List](https://leetcode.com/problems/reorder-list/) | 🟡 Medium | `06-linked-list/0143-reorder-list.js` |
| ⬜ | 19 | [Remove Nth Node From End of List](https://leetcode.com/problems/remove-nth-node-from-end-of-list/) | 🟡 Medium | `06-linked-list/0019-remove-nth-node-from-end-of-list.js` |
| ⬜ | 138 | [Copy List With Random Pointer](https://leetcode.com/problems/copy-list-with-random-pointer/) | 🟡 Medium | `06-linked-list/0138-copy-list-with-random-pointer.js` |
| ⬜ | 2 | [Add Two Numbers](https://leetcode.com/problems/add-two-numbers/) | 🟡 Medium | `06-linked-list/0002-add-two-numbers.js` |
| ⬜ | 141 | [Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/) | 🟢 Easy | `06-linked-list/0141-linked-list-cycle.js` |
| ⬜ | 287 | [Find the Duplicate Number](https://leetcode.com/problems/find-the-duplicate-number/) | 🟡 Medium | `06-linked-list/0287-find-the-duplicate-number.js` |
| ⬜ | 146 | [LRU Cache](https://leetcode.com/problems/lru-cache/) | 🟡 Medium | `06-linked-list/0146-lru-cache.js` |
| ⬜ | 23 | [Merge K Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists/) | 🔴 Hard | `06-linked-list/0023-merge-k-sorted-lists.js` |
| ⬜ | 25 | [Reverse Nodes in K-Group](https://leetcode.com/problems/reverse-nodes-in-k-group/) | 🔴 Hard | `06-linked-list/0025-reverse-nodes-in-k-group.js` |

### 7. Trees (15)

| ✓ | # | Problem | Difficulty | Solution |
| :-: | --: | --- | --- | --- |
| ⬜ | 226 | [Invert Binary Tree](https://leetcode.com/problems/invert-binary-tree/) | 🟢 Easy | `07-trees/0226-invert-binary-tree.js` |
| ⬜ | 104 | [Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/) | 🟢 Easy | `07-trees/0104-maximum-depth-of-binary-tree.js` |
| ⬜ | 543 | [Diameter of Binary Tree](https://leetcode.com/problems/diameter-of-binary-tree/) | 🟢 Easy | `07-trees/0543-diameter-of-binary-tree.js` |
| ⬜ | 110 | [Balanced Binary Tree](https://leetcode.com/problems/balanced-binary-tree/) | 🟢 Easy | `07-trees/0110-balanced-binary-tree.js` |
| ⬜ | 100 | [Same Tree](https://leetcode.com/problems/same-tree/) | 🟢 Easy | `07-trees/0100-same-tree.js` |
| ⬜ | 572 | [Subtree of Another Tree](https://leetcode.com/problems/subtree-of-another-tree/) | 🟢 Easy | `07-trees/0572-subtree-of-another-tree.js` |
| ⬜ | 235 | [Lowest Common Ancestor of a BST](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/) | 🟡 Medium | `07-trees/0235-lowest-common-ancestor-of-a-binary-search-tree.js` |
| ⬜ | 102 | [Binary Tree Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/) | 🟡 Medium | `07-trees/0102-binary-tree-level-order-traversal.js` |
| ⬜ | 199 | [Binary Tree Right Side View](https://leetcode.com/problems/binary-tree-right-side-view/) | 🟡 Medium | `07-trees/0199-binary-tree-right-side-view.js` |
| ⬜ | 1448 | [Count Good Nodes in Binary Tree](https://leetcode.com/problems/count-good-nodes-in-binary-tree/) | 🟡 Medium | `07-trees/1448-count-good-nodes-in-binary-tree.js` |
| ⬜ | 98 | [Validate Binary Search Tree](https://leetcode.com/problems/validate-binary-search-tree/) | 🟡 Medium | `07-trees/0098-validate-binary-search-tree.js` |
| ⬜ | 230 | [Kth Smallest Element in a BST](https://leetcode.com/problems/kth-smallest-element-in-a-bst/) | 🟡 Medium | `07-trees/0230-kth-smallest-element-in-a-bst.js` |
| ⬜ | 105 | [Construct Binary Tree from Preorder and Inorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/) | 🟡 Medium | `07-trees/0105-construct-binary-tree-from-preorder-and-inorder-traversal.js` |
| ⬜ | 124 | [Binary Tree Maximum Path Sum](https://leetcode.com/problems/binary-tree-maximum-path-sum/) | 🔴 Hard | `07-trees/0124-binary-tree-maximum-path-sum.js` |
| ⬜ | 297 | [Serialize and Deserialize Binary Tree](https://leetcode.com/problems/serialize-and-deserialize-binary-tree/) | 🔴 Hard | `07-trees/0297-serialize-and-deserialize-binary-tree.js` |

### 8. Tries (3)

| ✓ | # | Problem | Difficulty | Solution |
| :-: | --: | --- | --- | --- |
| ⬜ | 208 | [Implement Trie (Prefix Tree)](https://leetcode.com/problems/implement-trie-prefix-tree/) | 🟡 Medium | `08-tries/0208-implement-trie-prefix-tree.js` |
| ⬜ | 211 | [Design Add and Search Words Data Structure](https://leetcode.com/problems/design-add-and-search-words-data-structure/) | 🟡 Medium | `08-tries/0211-design-add-and-search-words-data-structure.js` |
| ⬜ | 212 | [Word Search II](https://leetcode.com/problems/word-search-ii/) | 🔴 Hard | `08-tries/0212-word-search-ii.js` |

### 9. Heap / Priority Queue (7)

| ✓ | # | Problem | Difficulty | Solution |
| :-: | --: | --- | --- | --- |
| ⬜ | 703 | [Kth Largest Element in a Stream](https://leetcode.com/problems/kth-largest-element-in-a-stream/) | 🟢 Easy | `09-heap-priority-queue/0703-kth-largest-element-in-a-stream.js` |
| ⬜ | 1046 | [Last Stone Weight](https://leetcode.com/problems/last-stone-weight/) | 🟢 Easy | `09-heap-priority-queue/1046-last-stone-weight.js` |
| ⬜ | 973 | [K Closest Points to Origin](https://leetcode.com/problems/k-closest-points-to-origin/) | 🟡 Medium | `09-heap-priority-queue/0973-k-closest-points-to-origin.js` |
| ⬜ | 215 | [Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array/) | 🟡 Medium | `09-heap-priority-queue/0215-kth-largest-element-in-an-array.js` |
| ⬜ | 621 | [Task Scheduler](https://leetcode.com/problems/task-scheduler/) | 🟡 Medium | `09-heap-priority-queue/0621-task-scheduler.js` |
| ⬜ | 355 | [Design Twitter](https://leetcode.com/problems/design-twitter/) | 🟡 Medium | `09-heap-priority-queue/0355-design-twitter.js` |
| ⬜ | 295 | [Find Median from Data Stream](https://leetcode.com/problems/find-median-from-data-stream/) | 🔴 Hard | `09-heap-priority-queue/0295-find-median-from-data-stream.js` |

### 10. Backtracking (9)

| ✓ | # | Problem | Difficulty | Solution |
| :-: | --: | --- | --- | --- |
| ⬜ | 78 | [Subsets](https://leetcode.com/problems/subsets/) | 🟡 Medium | `10-backtracking/0078-subsets.js` |
| ⬜ | 39 | [Combination Sum](https://leetcode.com/problems/combination-sum/) | 🟡 Medium | `10-backtracking/0039-combination-sum.js` |
| ⬜ | 46 | [Permutations](https://leetcode.com/problems/permutations/) | 🟡 Medium | `10-backtracking/0046-permutations.js` |
| ⬜ | 90 | [Subsets II](https://leetcode.com/problems/subsets-ii/) | 🟡 Medium | `10-backtracking/0090-subsets-ii.js` |
| ⬜ | 40 | [Combination Sum II](https://leetcode.com/problems/combination-sum-ii/) | 🟡 Medium | `10-backtracking/0040-combination-sum-ii.js` |
| ⬜ | 79 | [Word Search](https://leetcode.com/problems/word-search/) | 🟡 Medium | `10-backtracking/0079-word-search.js` |
| ⬜ | 131 | [Palindrome Partitioning](https://leetcode.com/problems/palindrome-partitioning/) | 🟡 Medium | `10-backtracking/0131-palindrome-partitioning.js` |
| ⬜ | 17 | [Letter Combinations of a Phone Number](https://leetcode.com/problems/letter-combinations-of-a-phone-number/) | 🟡 Medium | `10-backtracking/0017-letter-combinations-of-a-phone-number.js` |
| ⬜ | 51 | [N-Queens](https://leetcode.com/problems/n-queens/) | 🔴 Hard | `10-backtracking/0051-n-queens.js` |

### 11. Graphs (13)

| ✓ | # | Problem | Difficulty | Solution |
| :-: | --: | --- | --- | --- |
| ⬜ | 200 | [Number of Islands](https://leetcode.com/problems/number-of-islands/) | 🟡 Medium | `11-graphs/0200-number-of-islands.js` |
| ⬜ | 695 | [Max Area of Island](https://leetcode.com/problems/max-area-of-island/) | 🟡 Medium | `11-graphs/0695-max-area-of-island.js` |
| ⬜ | 133 | [Clone Graph](https://leetcode.com/problems/clone-graph/) | 🟡 Medium | `11-graphs/0133-clone-graph.js` |
| ⬜ | 286 | [Walls and Gates](https://leetcode.com/problems/walls-and-gates/) 🔒 | 🟡 Medium | `11-graphs/0286-walls-and-gates.js` |
| ⬜ | 994 | [Rotting Oranges](https://leetcode.com/problems/rotting-oranges/) | 🟡 Medium | `11-graphs/0994-rotting-oranges.js` |
| ⬜ | 417 | [Pacific Atlantic Water Flow](https://leetcode.com/problems/pacific-atlantic-water-flow/) | 🟡 Medium | `11-graphs/0417-pacific-atlantic-water-flow.js` |
| ⬜ | 130 | [Surrounded Regions](https://leetcode.com/problems/surrounded-regions/) | 🟡 Medium | `11-graphs/0130-surrounded-regions.js` |
| ⬜ | 207 | [Course Schedule](https://leetcode.com/problems/course-schedule/) | 🟡 Medium | `11-graphs/0207-course-schedule.js` |
| ⬜ | 210 | [Course Schedule II](https://leetcode.com/problems/course-schedule-ii/) | 🟡 Medium | `11-graphs/0210-course-schedule-ii.js` |
| ⬜ | 261 | [Graph Valid Tree](https://leetcode.com/problems/graph-valid-tree/) 🔒 | 🟡 Medium | `11-graphs/0261-graph-valid-tree.js` |
| ⬜ | 323 | [Number of Connected Components in an Undirected Graph](https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/) 🔒 | 🟡 Medium | `11-graphs/0323-number-of-connected-components-in-an-undirected-graph.js` |
| ⬜ | 684 | [Redundant Connection](https://leetcode.com/problems/redundant-connection/) | 🟡 Medium | `11-graphs/0684-redundant-connection.js` |
| ⬜ | 127 | [Word Ladder](https://leetcode.com/problems/word-ladder/) | 🔴 Hard | `11-graphs/0127-word-ladder.js` |

### 12. Advanced Graphs (6)

| ✓ | # | Problem | Difficulty | Solution |
| :-: | --: | --- | --- | --- |
| ⬜ | 332 | [Reconstruct Itinerary](https://leetcode.com/problems/reconstruct-itinerary/) | 🔴 Hard | `12-advanced-graphs/0332-reconstruct-itinerary.js` |
| ⬜ | 1584 | [Min Cost to Connect All Points](https://leetcode.com/problems/min-cost-to-connect-all-points/) | 🟡 Medium | `12-advanced-graphs/1584-min-cost-to-connect-all-points.js` |
| ⬜ | 743 | [Network Delay Time](https://leetcode.com/problems/network-delay-time/) | 🟡 Medium | `12-advanced-graphs/0743-network-delay-time.js` |
| ⬜ | 778 | [Swim in Rising Water](https://leetcode.com/problems/swim-in-rising-water/) | 🔴 Hard | `12-advanced-graphs/0778-swim-in-rising-water.js` |
| ⬜ | 269 | [Alien Dictionary](https://leetcode.com/problems/alien-dictionary/) 🔒 | 🔴 Hard | `12-advanced-graphs/0269-alien-dictionary.js` |
| ⬜ | 787 | [Cheapest Flights Within K Stops](https://leetcode.com/problems/cheapest-flights-within-k-stops/) | 🟡 Medium | `12-advanced-graphs/0787-cheapest-flights-within-k-stops.js` |

### 13. 1-D Dynamic Programming (12)

| ✓ | # | Problem | Difficulty | Solution |
| :-: | --: | --- | --- | --- |
| ⬜ | 70 | [Climbing Stairs](https://leetcode.com/problems/climbing-stairs/) | 🟢 Easy | `13-1d-dynamic-programming/0070-climbing-stairs.js` |
| ⬜ | 746 | [Min Cost Climbing Stairs](https://leetcode.com/problems/min-cost-climbing-stairs/) | 🟢 Easy | `13-1d-dynamic-programming/0746-min-cost-climbing-stairs.js` |
| ⬜ | 198 | [House Robber](https://leetcode.com/problems/house-robber/) | 🟡 Medium | `13-1d-dynamic-programming/0198-house-robber.js` |
| ⬜ | 213 | [House Robber II](https://leetcode.com/problems/house-robber-ii/) | 🟡 Medium | `13-1d-dynamic-programming/0213-house-robber-ii.js` |
| ⬜ | 5 | [Longest Palindromic Substring](https://leetcode.com/problems/longest-palindromic-substring/) | 🟡 Medium | `13-1d-dynamic-programming/0005-longest-palindromic-substring.js` |
| ⬜ | 647 | [Palindromic Substrings](https://leetcode.com/problems/palindromic-substrings/) | 🟡 Medium | `13-1d-dynamic-programming/0647-palindromic-substrings.js` |
| ⬜ | 91 | [Decode Ways](https://leetcode.com/problems/decode-ways/) | 🟡 Medium | `13-1d-dynamic-programming/0091-decode-ways.js` |
| ⬜ | 322 | [Coin Change](https://leetcode.com/problems/coin-change/) | 🟡 Medium | `13-1d-dynamic-programming/0322-coin-change.js` |
| ⬜ | 152 | [Maximum Product Subarray](https://leetcode.com/problems/maximum-product-subarray/) | 🟡 Medium | `13-1d-dynamic-programming/0152-maximum-product-subarray.js` |
| ⬜ | 139 | [Word Break](https://leetcode.com/problems/word-break/) | 🟡 Medium | `13-1d-dynamic-programming/0139-word-break.js` |
| ⬜ | 300 | [Longest Increasing Subsequence](https://leetcode.com/problems/longest-increasing-subsequence/) | 🟡 Medium | `13-1d-dynamic-programming/0300-longest-increasing-subsequence.js` |
| ⬜ | 416 | [Partition Equal Subset Sum](https://leetcode.com/problems/partition-equal-subset-sum/) | 🟡 Medium | `13-1d-dynamic-programming/0416-partition-equal-subset-sum.js` |

### 14. 2-D Dynamic Programming (11)

| ✓ | # | Problem | Difficulty | Solution |
| :-: | --: | --- | --- | --- |
| ⬜ | 62 | [Unique Paths](https://leetcode.com/problems/unique-paths/) | 🟡 Medium | `14-2d-dynamic-programming/0062-unique-paths.js` |
| ⬜ | 1143 | [Longest Common Subsequence](https://leetcode.com/problems/longest-common-subsequence/) | 🟡 Medium | `14-2d-dynamic-programming/1143-longest-common-subsequence.js` |
| ⬜ | 309 | [Best Time to Buy and Sell Stock With Cooldown](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/) | 🟡 Medium | `14-2d-dynamic-programming/0309-best-time-to-buy-and-sell-stock-with-cooldown.js` |
| ⬜ | 518 | [Coin Change II](https://leetcode.com/problems/coin-change-ii/) | 🟡 Medium | `14-2d-dynamic-programming/0518-coin-change-ii.js` |
| ⬜ | 494 | [Target Sum](https://leetcode.com/problems/target-sum/) | 🟡 Medium | `14-2d-dynamic-programming/0494-target-sum.js` |
| ⬜ | 97 | [Interleaving String](https://leetcode.com/problems/interleaving-string/) | 🟡 Medium | `14-2d-dynamic-programming/0097-interleaving-string.js` |
| ⬜ | 329 | [Longest Increasing Path in a Matrix](https://leetcode.com/problems/longest-increasing-path-in-a-matrix/) | 🔴 Hard | `14-2d-dynamic-programming/0329-longest-increasing-path-in-a-matrix.js` |
| ⬜ | 115 | [Distinct Subsequences](https://leetcode.com/problems/distinct-subsequences/) | 🔴 Hard | `14-2d-dynamic-programming/0115-distinct-subsequences.js` |
| ⬜ | 72 | [Edit Distance](https://leetcode.com/problems/edit-distance/) | 🟡 Medium | `14-2d-dynamic-programming/0072-edit-distance.js` |
| ⬜ | 312 | [Burst Balloons](https://leetcode.com/problems/burst-balloons/) | 🔴 Hard | `14-2d-dynamic-programming/0312-burst-balloons.js` |
| ⬜ | 10 | [Regular Expression Matching](https://leetcode.com/problems/regular-expression-matching/) | 🔴 Hard | `14-2d-dynamic-programming/0010-regular-expression-matching.js` |

### 15. Greedy (8)

| ✓ | # | Problem | Difficulty | Solution |
| :-: | --: | --- | --- | --- |
| ⬜ | 53 | [Maximum Subarray](https://leetcode.com/problems/maximum-subarray/) | 🟡 Medium | `15-greedy/0053-maximum-subarray.js` |
| ⬜ | 55 | [Jump Game](https://leetcode.com/problems/jump-game/) | 🟡 Medium | `15-greedy/0055-jump-game.js` |
| ⬜ | 45 | [Jump Game II](https://leetcode.com/problems/jump-game-ii/) | 🟡 Medium | `15-greedy/0045-jump-game-ii.js` |
| ⬜ | 134 | [Gas Station](https://leetcode.com/problems/gas-station/) | 🟡 Medium | `15-greedy/0134-gas-station.js` |
| ⬜ | 846 | [Hand of Straights](https://leetcode.com/problems/hand-of-straights/) | 🟡 Medium | `15-greedy/0846-hand-of-straights.js` |
| ⬜ | 1899 | [Merge Triplets to Form Target Triplet](https://leetcode.com/problems/merge-triplets-to-form-target-triplet/) | 🟡 Medium | `15-greedy/1899-merge-triplets-to-form-target-triplet.js` |
| ⬜ | 763 | [Partition Labels](https://leetcode.com/problems/partition-labels/) | 🟡 Medium | `15-greedy/0763-partition-labels.js` |
| ⬜ | 678 | [Valid Parenthesis String](https://leetcode.com/problems/valid-parenthesis-string/) | 🟡 Medium | `15-greedy/0678-valid-parenthesis-string.js` |

### 16. Intervals (6)

| ✓ | # | Problem | Difficulty | Solution |
| :-: | --: | --- | --- | --- |
| ⬜ | 57 | [Insert Interval](https://leetcode.com/problems/insert-interval/) | 🟡 Medium | `16-intervals/0057-insert-interval.js` |
| ⬜ | 56 | [Merge Intervals](https://leetcode.com/problems/merge-intervals/) | 🟡 Medium | `16-intervals/0056-merge-intervals.js` |
| ⬜ | 435 | [Non-overlapping Intervals](https://leetcode.com/problems/non-overlapping-intervals/) | 🟡 Medium | `16-intervals/0435-non-overlapping-intervals.js` |
| ⬜ | 252 | [Meeting Rooms](https://leetcode.com/problems/meeting-rooms/) 🔒 | 🟢 Easy | `16-intervals/0252-meeting-rooms.js` |
| ⬜ | 253 | [Meeting Rooms II](https://leetcode.com/problems/meeting-rooms-ii/) 🔒 | 🟡 Medium | `16-intervals/0253-meeting-rooms-ii.js` |
| ⬜ | 1851 | [Minimum Interval to Include Each Query](https://leetcode.com/problems/minimum-interval-to-include-each-query/) | 🔴 Hard | `16-intervals/1851-minimum-interval-to-include-each-query.js` |

### 17. Math & Geometry (8)

| ✓ | # | Problem | Difficulty | Solution |
| :-: | --: | --- | --- | --- |
| ⬜ | 48 | [Rotate Image](https://leetcode.com/problems/rotate-image/) | 🟡 Medium | `17-math-and-geometry/0048-rotate-image.js` |
| ⬜ | 54 | [Spiral Matrix](https://leetcode.com/problems/spiral-matrix/) | 🟡 Medium | `17-math-and-geometry/0054-spiral-matrix.js` |
| ⬜ | 73 | [Set Matrix Zeroes](https://leetcode.com/problems/set-matrix-zeroes/) | 🟡 Medium | `17-math-and-geometry/0073-set-matrix-zeroes.js` |
| ⬜ | 202 | [Happy Number](https://leetcode.com/problems/happy-number/) | 🟢 Easy | `17-math-and-geometry/0202-happy-number.js` |
| ⬜ | 66 | [Plus One](https://leetcode.com/problems/plus-one/) | 🟢 Easy | `17-math-and-geometry/0066-plus-one.js` |
| ⬜ | 50 | [Pow(x, n)](https://leetcode.com/problems/powx-n/) | 🟡 Medium | `17-math-and-geometry/0050-powx-n.js` |
| ⬜ | 43 | [Multiply Strings](https://leetcode.com/problems/multiply-strings/) | 🟡 Medium | `17-math-and-geometry/0043-multiply-strings.js` |
| ⬜ | 2013 | [Detect Squares](https://leetcode.com/problems/detect-squares/) | 🟡 Medium | `17-math-and-geometry/2013-detect-squares.js` |

### 18. Bit Manipulation (7)

| ✓ | # | Problem | Difficulty | Solution |
| :-: | --: | --- | --- | --- |
| ⬜ | 136 | [Single Number](https://leetcode.com/problems/single-number/) | 🟢 Easy | `18-bit-manipulation/0136-single-number.js` |
| ⬜ | 191 | [Number of 1 Bits](https://leetcode.com/problems/number-of-1-bits/) | 🟢 Easy | `18-bit-manipulation/0191-number-of-1-bits.js` |
| ⬜ | 338 | [Counting Bits](https://leetcode.com/problems/counting-bits/) | 🟢 Easy | `18-bit-manipulation/0338-counting-bits.js` |
| ⬜ | 190 | [Reverse Bits](https://leetcode.com/problems/reverse-bits/) | 🟢 Easy | `18-bit-manipulation/0190-reverse-bits.js` |
| ⬜ | 268 | [Missing Number](https://leetcode.com/problems/missing-number/) | 🟢 Easy | `18-bit-manipulation/0268-missing-number.js` |
| ⬜ | 371 | [Sum of Two Integers](https://leetcode.com/problems/sum-of-two-integers/) | 🟡 Medium | `18-bit-manipulation/0371-sum-of-two-integers.js` |
| ⬜ | 7 | [Reverse Integer](https://leetcode.com/problems/reverse-integer/) | 🟡 Medium | `18-bit-manipulation/0007-reverse-integer.js` |

---

## Workflow

```sh
# solve, then commit one problem at a time
git add 01-arrays-and-hashing/0001-two-sum.js README.md
git commit -m "Two Sum (1) — hash map, O(n)"
git push
```

Tick the box in this README (and the topic README) as you go: `| ⬜ |` → `| [x] |`.
