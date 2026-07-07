/**
 * @param {number} n
 * @return {number}
 */
var sumAndMultiply = function(n) {
    let sum=0, num=Number(n.toString().split(0).join('')), tmpNum=num;
    while(tmpNum>0){
        sum+=tmpNum%10;
        tmpNum=Math.floor(tmpNum/10);
    }
    return num*sum;
};