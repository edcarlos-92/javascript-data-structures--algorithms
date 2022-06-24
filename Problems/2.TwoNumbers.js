/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

const addTwoNumbers = () => {
  // convert from listnode to pinter and a container for each number
  let point1 = l1;
  let point2 = l2;
  let num1 = 0;
  let num2 = 0;
  let carry = 0;
  result = new ListNode(0);
  current = result;
  while (point1 || point2) {
    num1 = point1 ? point1.val : 0;
    num2 = point2 ? point2.val : 0;
    if (num1 + num2 + carry > 9) {
      current.next = new ListNode(num1 + num2 + carry - 10);
      current = current.next;
      carry = 1;
    } else {
      current.next = new ListNode(num1 + num2 + carry);
      current = current.next;
      carry = 0;
    }
    if (point1) point1 = point1.next;
    if (point2) point2 = point2.next;
  }

  if (carry) current.next = new ListNode(carry);
  return result.next;
};

/*
  let l1 = [2, 4, 3];
  let l2 = [5, 6, 4];
  addTwoNumbers(l1, l2);
*/
//console.log(addTwoNumbers(243, 564));

/*
Complexity:
Time complexity : O(max(m,n)).
Space complexity : O(max(m,n)).
*/

/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example 243,564

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
*/

var addTwoNumbers1 = function (l1, l2) {
  let carry = 0;
  let result = new ListNode(0);
  let dummy = result;
  while (l1 !== null || l2 !== null || carry !== 0) {
    let l1Val = l1 ? l1.val : 0;
    let l2Val = l2 ? l2.val : 0;
    let nextDigit = (l1Val + l2Val + carry) % 10;
    result.next = new ListNode(nextDigit);
    result = result.next;
    carry = Math.floor((l1Val + l2Val + carry) / 10);
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }
  return dummy.next;
};

var addTwoNumbers2 = function (l1, l2) {
  let carry = 0;
  let sum = 0;
  let head = new ListNode(0);
  let now = head;
  let a = l1;
  let b = l2;
  while (a !== null || b !== null) {
    sum = (a ? a.val : 0) + (b ? b.val : 0) + carry;
    carry = Math.floor(sum / 10);
    now.next = new ListNode(sum % 10);
    now = now.next;
    a = a ? a.next : null;
    b = b ? b.next : null;
  }
  if (carry) now.next = new ListNode(carry);
  return head.next;
};
