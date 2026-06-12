/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
var arithmeticTriplets = function(nums, diff) {
    let myMap=new Map(), count=0;
    for(let i=0;i<nums.length;i++)
        myMap.set(nums[i],1);
    for(let i=0;i<nums.length-2;i++)
        if(myMap.has(nums[i]+diff) && myMap.has(nums[i]+2*diff)) count++;
    return count;
};