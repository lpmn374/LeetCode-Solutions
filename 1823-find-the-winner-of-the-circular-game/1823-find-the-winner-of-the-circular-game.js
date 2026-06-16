/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function(n, k) {
    let list= [];
    for(let i=1;i<=n;i++)
        list.push(i);
    let start=0;
    while(list.length>1){
        start=(start+k-1)%list.length;
        list.splice(start,1);
    }
    return list[0];
};