/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    const myMap = new Map();
    let sum=0,maxSum=0;
    for(let x of nums)
        myMap.set(x,(myMap.get(x)||0)+1);
    for(let x of nums){
        sum=myMap.get(x)+myMap.get(x-1);
        if (sum>maxSum) maxSum=sum;
    }
    return maxSum;
};