/**
 * @param {number} n
 * @return {number}
 */
var mirrorDistance = function(n) {
    let tmp=n, reverse=0;
    while(tmp>0){
        reverse= reverse*10 + (tmp%10);
        tmp=Math.floor(tmp/10);
    }
    return Math.abs(n-reverse);
};