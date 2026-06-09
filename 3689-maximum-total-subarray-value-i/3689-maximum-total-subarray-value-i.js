/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxTotalValue = function(nums, k) {
    let currentMin=nums[0], currentMax=nums[0];
    for(let i=1;i<nums.length;i++){
        if (nums[i]<currentMin) currentMin=nums[i];
        if (nums[i]>currentMax) currentMax=nums[i];
    }
    return (currentMax-currentMin)*k;    
};