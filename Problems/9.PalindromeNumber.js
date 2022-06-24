/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  var text = '' + x;
  var left = 0;
  var right = text.length - 1;
  while (left < right) {
    if (text[left] !== text[right]) return false;
    left++;
    right--;
  }
  return true;
};

/* 121
To have a palidone let's checkfor left and right 
the right side should be the Length-1
while left<right side 
the left should be equal to the right or return false ie it's not a palidrone
then continue increasing the left to meet the right ie left++
and  continue decreasing the right side to meet the left side ie right--
return true after while loop.
*/

/*
Complexity:

Time complexity : O(log(n)).
Space complexity : O(1).
*/

/*
Problem
Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

Example 1:

Input: 121
Output: true
Example 2:

Input: -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
Follow up:

Coud you solve it without converting the integer to a string?
*/

/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = (num) => {
  if (num < 0) return false;
  var result = 0;
  while (num !== 0) {
    //Because 0 in a mult or div will yeald nothing
    result = result * 10 + (num % 10); // result = 404 x 10 => 4040 + (0)
    num = Math.floor(num / 10); //num = Math.floor(404/10) => 40.4  ===> 4 out 40 in
  }
  return result === num;
};

/*
Complexity:

Time complexity : O(log(n)).
Space complexity : O(1).
*/

/*
To have a palidone let's checkfor left and right 


*/

const isPalindrone = (textOrNumber) => {
  //if text Go ahead but if number it needs to be converted into a string
  let text = '' + textOrNumber; //or String(textOrNumber)
  let left = 0;
  let right = text.length - 1;
  while (left < right) {
    if (text[left] !== text[right]) return false;
    left++;
    right--;
  }
  return true;
};
isPalindrone(5688);
