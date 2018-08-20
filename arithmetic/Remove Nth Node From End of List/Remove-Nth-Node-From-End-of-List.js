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
var removeNthFromEnd = function(head, n) {
    let newHead = new ListNode()
    newHead.next = head
    let firstPointer = newHead
    let secondPointer = newHead
    for (let i = 0; i <= n; i++) {
        firstPointer = firstPointer.next
    }
    while (firstPointer) {
        firstPointer = firstPointer.next
        secondPointer = secondPointer.next
    }
    secondPointer.next = secondPointer.next.next
    return newHead.next
};