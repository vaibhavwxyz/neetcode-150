/**
 * 208. Implement Trie (Prefix Tree) — Medium
 * https://leetcode.com/problems/implement-trie-prefix-tree/
 *
 * Approach:
 * Time:  O()
 * Space: O()
 */

class Trie {
  constructor() {
    // TODO
  }

  insert(word) {
    // TODO
  }

  search(word) {
    // TODO
  }

  startsWith(prefix) {
    // TODO
  }
}

// --- tests ---
const trie = new Trie();
trie.insert("apple");
console.log(trie.search("apple")); // true
console.log(trie.search("app")); // false
console.log(trie.startsWith("app")); // true
trie.insert("app");
console.log(trie.search("app")); // true
