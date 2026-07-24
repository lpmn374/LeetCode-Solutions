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
var mergeNodes = function(head) {
    let sum=0, result=[];
    head=head.next;
    while(head!==null){
        if (head.val!==0) sum+=head.val;
        else {
            result.push(sum);
            sum=0;
        }
        head=head.next;
    }
    let dummy=new ListNode(0), current=dummy;
    for(let x of result){
        current.next=new ListNode(x);
        current=current.next;
    }
    return dummy.next;
};