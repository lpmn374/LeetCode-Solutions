/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    return nums.reduce((sum, x) => sum + (x%3 > 0), 0);
};