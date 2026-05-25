/**
 * @param {number[]} nums
 * @return {number[]}
 */
var concatWithReverse = function(nums) {
    let length=nums.length;
    for(let i=length-1;i>=0;i--)
        nums.push(nums[i]);
    return nums;
};