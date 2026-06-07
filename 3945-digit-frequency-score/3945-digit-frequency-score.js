/**
 * @param {number} n
 * @return {number}
 */
var digitFrequencyScore = function(n) {
    let sum=0;
    n=n.toString();
    for(let i=0;i<n.length;i++)
        sum+=Number(n[i]);
    return sum;
};