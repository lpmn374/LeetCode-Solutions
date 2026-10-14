/**
 * @param {number} num
 * @param {number} sum
 * @return {string}
 */
var maxSumOfSquares = function(num, sum) {
    if(sum>num*9) return "";
    let highest=sum>=9?9:sum, result="";
    while(num>0){
        result+=String(highest);
        sum-=highest;
        highest=sum>=9?9:sum;
        num--;
    }
    return result;
};