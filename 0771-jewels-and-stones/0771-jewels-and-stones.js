/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let mySet=new Set(), count=0;
    for(let i=0;i<jewels.length;i++)
        mySet.add(jewels[i]);
    for(let i=0;i<stones.length;i++)
        if (mySet.has(stones[i])) count++;
    return count;
};