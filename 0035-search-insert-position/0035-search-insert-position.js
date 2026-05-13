/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if (nums.length === 0) return 0;
    let left=0, right=nums.length-1, mid=0;
    while(left<=right){
        mid=left+Math.floor((right-left)/2);
        if (nums[mid]===target) return mid;
        if (nums[mid]<target) left=mid+1;
        else right=mid-1;
    }
    return left;
};