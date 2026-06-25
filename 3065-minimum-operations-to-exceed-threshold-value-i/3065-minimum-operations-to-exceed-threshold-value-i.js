/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    let count=0, n=nums.length;
    for(let i=0;i<n;i++)
        if(nums[i]<k) count++;
    return count;
};