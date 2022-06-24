/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */


const removeNthFromEnd = (head,n)=>{//1->2->3->4->5, and n = 2.
    let dummyHead = new ListNode(0);//start everthing from the head
    dummyHead.next = head;//Now get the next node
    let resultHead = dummyHead;
    let count = 0;
    let tail = head;
     
    while(count < n){
        count++
        tail = tail.next;
    }

    let removeNode = head;
    let prev = dummyHead;

    while(tail){
        tail = tail.next;
        removeNode= removeNode.next;
        prev= prev.next;
    }

    prev.next = removeNode.next;
    return resultHead.next;
}
























  
  /*
  
  Complexity:

Time complexity : O(n).
Space complexity : O(1).
  
  */


/*
Given a linked list, remove the n-th node from the end of list and return its head.

Example:

Given linked list: 1->2->3->4->5, and n = 2.

After removing the second node from the end, the linked list becomes 1->2->3->5.
Note:

Given n will always be valid.

Follow up:

Could you do this in one pass?
*/



var removeNthFromEnd_ = function(head, n) {
    var h = new ListNode(0);
    var ll = h;
    var rr = h;
  
    h.next = head;
  
    for (var i = 0; i < n + 1; i++) {
      rr = rr.next;
    }
  
    while (rr !== null) {
      ll = ll.next;
      rr= rr.next;
    }
  
    ll.next = ll.next.next;
  
    return h.next;
  };
