/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let left=0, right=nums.length -1;
    while(nums[left]>=nums[right] && left<right)
        left++;
    return nums[left];
};