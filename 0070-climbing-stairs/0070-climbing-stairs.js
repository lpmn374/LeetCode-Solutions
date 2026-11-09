/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n<1) return 0;
    let prev=1, count=0;
    for(let i=0;i<=n;i++){
        count+=prev;
        prev=count-prev;
    }
    return count;
};