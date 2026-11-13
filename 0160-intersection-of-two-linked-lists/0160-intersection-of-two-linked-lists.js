/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let currentA=headA, currentB=headB;
    while(currentA !== currentB){
        currentA=currentA?currentA.next:headB;
        currentB=currentB?currentB.next:headA;
    }
    return currentA;
};