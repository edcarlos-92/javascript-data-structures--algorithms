function ListNode(val) {
  this.val = val;
  this.next = null;
}

var addTwoNumbers = function (l1, l2) {
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

let l1 = [2, 4, 3];
let l2 = [5, 6, 4];
console.log(addTwoNumbers(l1, l2));

// console.log(addTwoNumbers(2, 5));
// console.log(addTwoNumbers(4, 6));
// console.log(addTwoNumbers(3, 4));
