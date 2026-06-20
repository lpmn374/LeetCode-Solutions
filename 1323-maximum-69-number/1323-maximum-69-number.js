/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    let count=0, tmp=num, index=-1;
    while(tmp>0){
        if (tmp%10===6) index=count;
        count++;
        tmp=Math.floor(tmp/10);
    }
    return index===-1?num:num+3*10**index;
};