/**
 * 271. Encode and Decode Strings — Medium
 * https://leetcode.com/problems/encode-and-decode-strings/
 *
 * Approach:
 * Time:  O()
 * Space: O()
 */

function encode(strs) {
  let result = "";
  for (const str of strs) {
    result += str.length + "#" + str;
  }
  return result;
}

function decode(str) {
  const result = [];
  let i = 0;

  while (i < s.length) {
    let j = i;
    while (s[j] !== "#") {
      j++;
    }
    const length = parseInt(s.slice(i, j), 10);
    const str = s.slice(j + 1, j + 1 + length);
    result.push(str);
    i = j + 1 + length;
  }

  return result;
}

// --- tests ---
console.log(decode(encode(["neet", "code", "love", "you"])));
// ["neet", "code", "love", "you"]
console.log(decode(encode(["we", "say", ":", "yes"])));
// ["we", "say", ":", "yes"]
console.log(decode(encode([]))); // []
