/**
 * @param {number[]} piles
 * @return {number}
 */
var maxCoins = function(piles) {
    piles.sort((a,b)=>a-b);
    let total=0, count=0, i=piles.length-2;
    while(count<piles.length/3){
        total+=piles[i];
        count++;
        i-=2;
    }
    return total;
};