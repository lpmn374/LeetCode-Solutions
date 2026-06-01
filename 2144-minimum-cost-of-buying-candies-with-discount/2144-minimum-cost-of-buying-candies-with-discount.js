/**
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function(cost) {
    let i=cost.length-1, sum=0;
    cost.sort((a,b)=>a-b);
    while(i>=0){
        if(i==0) sum+=cost[i];
        else sum+=cost[i]+cost[i-1];
        i-=3;
    }
    return sum;
};