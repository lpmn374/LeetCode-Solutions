/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function(head) {
    if(head===null || head.next===null) return null;
    let current=head, length=0;
    while (current!==null){
        length++;
        current=current.next;
    }
    let deleteAt=Math.floor(length/2);
    current=head;
    for(let i=0;i<deleteAt-1;i++)
        current=current.next;
    current.next=current.next.next;
    return head;
};