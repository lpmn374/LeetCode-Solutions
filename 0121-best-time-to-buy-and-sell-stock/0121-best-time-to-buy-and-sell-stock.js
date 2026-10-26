/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let n=prices.length, currentMax=0, finalMax=0;
    for(let i=1;i<n;i++){
        currentMax=Math.max(0, currentMax+=prices[i]-prices[i-1]);
        finalMax=Math.max(currentMax, finalMax);
    }
    return finalMax;
};
