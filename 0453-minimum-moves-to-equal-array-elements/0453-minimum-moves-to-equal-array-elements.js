/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    let min=Infinity, result=0;
    for(let i=0;i<nums.length;i++)
        if(nums[i]<min) min=nums[i];
    for(let i=0;i<nums.length;i++)
        result+=nums[i]-min;
    return result;
};