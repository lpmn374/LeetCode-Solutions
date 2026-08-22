/**
 * @param {number} n
 * @return {boolean}
 */
var checkDivisibility = function(n) {
    let sum=0, product=1, num, tmp=n;
    while(tmp>0){
        num=tmp%10;
        sum+=num;
        product*=num;
        tmp=Math.floor(tmp/10);
    }
    return n%(sum+product)===0;
};