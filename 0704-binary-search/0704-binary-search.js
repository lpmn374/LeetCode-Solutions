/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let length = nums.length;
    if (length === 0) return -1;
    let left = 0, right = length - 1, mid = 0;
    while (left <= right){
        mid = Math.floor(left + (right-left)/2);
        if (nums[mid] === target) return mid;
        if (nums[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
};