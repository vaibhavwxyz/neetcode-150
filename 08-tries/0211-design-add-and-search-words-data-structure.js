/**
 * 211. Design Add and Search Words Data Structure — Medium
 * https://leetcode.com/problems/design-add-and-search-words-data-structure/
 *
 * Approach:
 * Time:  O()
 * Space: O()
 */

class WordDictionary {
  constructor() {
    // TODO
  }

  addWord(word) {
    // TODO
  }

  search(word) {
    // TODO
  }
}

// --- tests ---
const wd = new WordDictionary();
wd.addWord("bad");
wd.addWord("dad");
wd.addWord("mad");
console.log(wd.search("pad")); // false
console.log(wd.search("bad")); // true
console.log(wd.search(".ad")); // true
console.log(wd.search("b..")); // true
