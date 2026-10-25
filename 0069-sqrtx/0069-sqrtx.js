/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let result=0;
    while(result*result<x)
        result++;
    return result*result<=x?result:result-1;
};