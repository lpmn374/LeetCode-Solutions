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
var insertGreatestCommonDivisors = function(head) {
    function gcd(a, b) {
        if (b === 0) return a;
        if (a === 0) return b;
        let num1, num2;
        while (b !== 0 && a !== 0) {
            num1 = a % b; 
            num2 = b % a; 
            if (num1 === 0) return b;
            if (num2 === 0) return a;
            a = b;
            b = num1;
    }
    return a !== 0 ? a : b;
}
    let current=head;
    while(current.next!==null){
        let node = new ListNode(gcd(current.val,current.next.val), current.next);
        current.next=node;
        current=node.next;
    }
    return head;
};