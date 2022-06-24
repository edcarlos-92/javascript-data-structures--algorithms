const getDrome = (left, right, string) => {
  while (left >= 0 && right < string.length) {
    if (string[left] !== string[right]) break;
    left--;
    right++;
  }
  return [left + 1, right]; //babad
};

const longestPalindrome = (string) => {
  let max = [0, 1];

  for (let i = 0; i < string.length; i++) {
    let even = getDrome(i - 1, i, string);
    let odd = getDrome(i - 1, i + 1, string);
    let currentMax = odd[1] - odd[1] - even[0] ? odd : even;
    max = max[1] - max[0] > currentMax[1] - currentMax[0] ? max : currentMax;
  }
  return string.slice(max[0], max[1]);
};

/*
Complexity:
Time complexity : O(n^2).
Space complexity : O(1).
*/

/*
Problem
Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example 1:

Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.
Example 2:

Input: "cbbd"
Output: "bb"
*/

/**
 * @param {string} s
 * @return {string}
 */
let longestPalindrome_ = function (s) {
  let start = 0;
  let end = 0;
  let num = 0;
  for (let i = 0; i < s.length; i++) {
    num = Math.max(insideOut(s, i, i), insideOut(s, i, i + 1));
    if (num > end - start) {
      start = i - Math.floor((num - 1) / 2);
      end = i + Math.floor(num / 2);
    }
  }
  return s.slice(start, end + 1);
};

let insideOut = function (s, left, right) {
  let l = left;
  let r = right;
  while (l >= 0 && r < s.length && s[l] === s[r]) {
    l--;
    r++;
  }
  return r - l - 1;
};

/*
Complexity:
Time complexity : O(n^2).
Space complexity : O(1).
*/
