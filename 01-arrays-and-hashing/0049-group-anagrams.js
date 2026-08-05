/**
 * 49. Group Anagrams — Medium
 * https://leetcode.com/problems/group-anagrams/
 *
 * Approach:
 * Time:  O()
 * Space: O()
 */

function groupAnagrams(strs) {
  const groups = new Map();

  for (const str of strs) {
    const key = str.split("").sort().join("");
    if (!groups.has(key)) {
      groups.set(key, []);
    }
    groups.get(key).push(str);
  }

  return Array.from(groups.values());
}

// --- tests ---
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// [["eat","tea","ate"], ["tan","nat"], ["bat"]]  (order may vary)
console.log(groupAnagrams([""])); // [[""]]
console.log(groupAnagrams(["a"])); // [["a"]]
