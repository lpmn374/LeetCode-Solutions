/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    let result=0, max=-Infinity;
    for(let i=0;i<nums.length;i++)
        if(nums[i]>max) max=nums[i];
    for(let i=0;i<nums.length;i++)
        result+=max-nums[i];
    return result;
};