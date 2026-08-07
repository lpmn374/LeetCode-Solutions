/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function(n) {
    let sum=0, tmp=0;
    while(n>1){
        tmp=Math.floor(n/2);
        sum+=tmp;
        n-=tmp;
    }
    return sum;
};