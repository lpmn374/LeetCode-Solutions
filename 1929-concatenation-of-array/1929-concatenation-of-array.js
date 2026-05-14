/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    let originalLength=nums.length;
    for (let i=0;i<originalLength;i++)
        nums.push(nums[i]);
    return nums;
};