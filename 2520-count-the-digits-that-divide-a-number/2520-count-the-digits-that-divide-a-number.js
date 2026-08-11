/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
    let count=0, val=num;
    while(val>0){
        if (num%(val%10)===0) count++;
        val=Math.floor(val/10);
    }
    return count;
};