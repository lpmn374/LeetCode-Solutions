/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let result=new ListNode(0), current=result, carry=0, sum=0;
    while(l1 || l2 || carry>0){
        if(l1 && l2){
            sum=l1.val+l2.val+carry;
            l1=l1.next;
            l2=l2.next;
        }
        else if (!l1 && l2){
            sum=l2.val+carry;
            l2=l2.next;
        }
        else if (!l2 && l1){
            sum=l1.val+carry;
            l1=l1.next;
        }
        else sum=carry;
        carry=Math.floor(sum/10);
        current.next=new ListNode(sum%10);
        current=current.next;
    }
    return result.next;
};