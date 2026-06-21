/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function(costs, coins) {
    let count=0, i=0;
    costs.sort((a,b)=>a-b);
    while(coins>0){
        if (coins>=costs[i]){
            count++;
            coins-=costs[i];
            i++;
        }
        else break;
    }
    return count;
};