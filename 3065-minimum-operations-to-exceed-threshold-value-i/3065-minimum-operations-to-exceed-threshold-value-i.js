/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    nums=nums.sort((a,b)=>a-b), i=0;
    while(nums[i]<k) i++;
    return i;
};