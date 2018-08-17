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
var addTwoNumbers = function(l1, l2) {
    let ret = new ListNode(0)
    let curr = ret
    let flag = 0
    while(l1 || l2 ) {
        val = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + flag
        curr.next = new ListNode(val % 10)
        flag = parseInt(val / 10)
        curr = curr.next
        l1 = l1 ? l1.next : null
        l2 = l2 ? l2.next : null
    }
    if (flag) {
        curr.next = new ListNode(1)
    }
    return ret.next
}