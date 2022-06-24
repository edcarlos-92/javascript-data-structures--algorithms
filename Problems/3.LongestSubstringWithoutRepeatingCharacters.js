const lengthOfLongestSubstring = (string) => {
  let hash = {}; //where to hold temp record for checking frquency
  let max = 0; //the current maximum
  let start = 0; //start counting from 0
  for (let i = 0; i < string.length; i++) {
    //if hash hash exist
    if (hash[string[i]] !== undefined) {
      start = Math.max(start, hash[string[i]] + 1); //find the maximum
    }
    hash[string[i]] = i;
    max = Math.max(max, i - start + 1);
  }
  return max;
};
/*
Given a string, find the length of the longest substring without repeating characters.

Examples:

Given "abcabcbb", the answer is "abc", which the length is 3.

Given "bbbbb", the answer is "b", with the length of 1.

Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/
