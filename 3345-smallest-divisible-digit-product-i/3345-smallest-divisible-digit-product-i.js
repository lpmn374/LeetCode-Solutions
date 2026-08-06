/**
 * @param {number} n
 * @param {number} t
 * @return {number}
 */
var smallestNumber = function(n, t) {
    function isTrue (num, t){
        let product=1;
        while(num>0){
            product*=num%10;
            if (product===0) return true;
            num=Math.floor(num/10);
        }
        return product%t===0?true:false;
    }
    while(!isTrue(n,t)) n++;
    return n;
};