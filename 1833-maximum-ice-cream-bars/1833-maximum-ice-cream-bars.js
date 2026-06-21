/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function(costs, coins) {
    let max=costs[0], min=costs[0];
    for(let i=1;i<costs.length;i++){
        if(costs[i]>max) max=costs[i];
        if(costs[i]<min) min=costs[i];
    }
    let arr=new Array(max-min+1).fill(0);
    for (let c of costs) 
        arr[c - min]++;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        let price = i + min; 
        let quantity = arr[i]; 
        if (quantity > 0) {
            let canAfford = Math.floor(coins / price);
            let take = Math.min(quantity, canAfford);
            count += take;
            coins -= take * price;
            if (take < quantity) break;
        }
    }
    return count;
};