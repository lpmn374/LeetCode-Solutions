/**
 * @param {string} s
 * @return {number}
 */
class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}
var minLength = function(s) {
    let start = new Node(), current = start, length=0;
    for(let i=0;i<s.length;i++){
        current.next=new Node(s[i]);
        current=current.next;
    }
    current=start;
    while(current.next!==null && current.next.next!==null)
        if ((current.next.data==='A'&&current.next.next.data==='B')||(current.next.data==='C'&&current.next.next.data==='D')){
            current.next=current.next.next.next;
            current=start;
        }
        else current=current.next;
    current=start;
    while(current.next!=null){
        length++;
        current=current.next;
    }
    return length;
};

