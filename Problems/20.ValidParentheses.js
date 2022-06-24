/**
 * @param {string} s
 * @return {boolean}
 */
 const isValid = (s)=> {
    const stack = [];
    let i =0;
    let parens = '() {} []';
    while(i<s.length){
        stack.push(s[i]);
        i++;
        let open = stack[stack.length - 2];
        let closed = stack[stack.length - 1];
        let potentialParens = open + closed;
        if(parens.includes(potentialParens)){
            stack.pop();
            stack.pop();
        }
    }
    return stack.length === 0;
};

/*
  Complexity:
  
  Time complexity : O(n).
  Space complexity : O(n).
*/


 var isValid_ = function(s) {
    var stack = [];
    //var len = s.length;
    var map = {
      '(': ')',
      '[': ']',
      '{': '}'
    };
    for (var i = 0; i < s.length; i++) {
      if (stack.length > 0 && map[stack[stack.length - 1]] === s[i]) {
        stack.pop();
      } else {
        stack.push(s[i]);
      }
    }
    return stack.length === 0;
  };



/*
Problem
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.

Example 1:

Input: "()"
Output: true
Example 2:

Input: "()[]{}"
Output: true
Example 3:

Input: "(]"
Output: false
Example 4:

Input: "([)]"
Output: false
Example 5:

Input: "{[]}"
Output: true

*/