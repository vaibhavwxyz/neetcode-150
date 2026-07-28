/**
 * 355. Design Twitter — Medium
 * https://leetcode.com/problems/design-twitter/
 *
 * Approach:
 * Time:  O()
 * Space: O()
 */

class Twitter {
  constructor() {
    // TODO
  }

  postTweet(userId, tweetId) {
    // TODO
  }

  getNewsFeed(userId) {
    // TODO
  }

  follow(followerId, followeeId) {
    // TODO
  }

  unfollow(followerId, followeeId) {
    // TODO
  }
}

// --- tests ---
const tw = new Twitter();
tw.postTweet(1, 5);
console.log(tw.getNewsFeed(1)); // [5]
tw.follow(1, 2);
tw.postTweet(2, 6);
console.log(tw.getNewsFeed(1)); // [6, 5]
tw.unfollow(1, 2);
console.log(tw.getNewsFeed(1)); // [5]
