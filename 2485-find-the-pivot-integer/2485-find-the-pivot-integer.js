/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function(n) {
    let rightSum=0, leftSum=0;
    for(let i=1;i<=n;i++)
        rightSum+=i;
    for(let i=1;i<=n;i++){
        leftSum+=i;
        rightSum-=i-1;
        if(leftSum===rightSum) return i;
    }
    return -1;
};