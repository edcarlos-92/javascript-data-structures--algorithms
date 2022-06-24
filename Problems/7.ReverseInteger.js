const reverse = (x) => {
  let isNegative = false;
  //if(x < 0) return -1 * reverse(x);
  if (x < 0) {
    isNegative = true;
    x = -1 * x;
  }
  //const solution = (x + '').split('').reverse().join('');
  const solution = String(x).split('').reverse().join('');
  // return (solution > 2**31 - 1) ? 0 : solution;
  if (isNegative) return solution > 2 ** 31 - 1 ? 0 : `-${solution}`;
  if (!isNegative) return solution > 2 ** 31 - 1 ? 0 : solution;
};

/**
 * @param {number} x
 * @return {number}
 */
var reverse_ = function (x) {
  var INT_MAX = 2147483647;
  var INT_MIN = -INT_MAX - 1;
  var res = 0;
  var num = x;
  while (num !== 0) {
    res = res * 10 + (num % 10);
    num = num > 0 ? Math.floor(num / 10) : Math.ceil(num / 10);
    if (res > INT_MAX || res < INT_MIN) return 0;
  }
  return res;
};

/*
Complexity:

Time complexity : O(log(n)).
Space complexity : O(n).
*/

/*
Problem
Given a 32-bit signed integer, reverse digits of an integer.

Example 1:

Input: 123
Output: 321
Example 2:

Input: -123
Output: -321
Example 3:

Input: 120
Output: 21
Note: Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231, 231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
*/
