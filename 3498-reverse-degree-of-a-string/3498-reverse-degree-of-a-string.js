/**
 * @param {string} s
 * @return {number}
 */
var reverseDegree = function(s) {
    let n=s.length, a='a'.charCodeAt(0), sum=0;
    for(let i=0;i<n;i++)
        sum+=(26-(s.charCodeAt(i)-a))*(i+1);
    return sum;
};