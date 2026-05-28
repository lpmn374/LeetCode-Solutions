/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let max=candies[0];
    for(let x of candies)
        if(x>max) max=x;
    for(let i=0;i<candies.length;i++)
        if(candies[i]+extraCandies >=max) candies[i]=true;
        else candies[i]=false;
    return candies;
};