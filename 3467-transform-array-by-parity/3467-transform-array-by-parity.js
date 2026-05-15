/**
 * @param {number[]} nums
 * @return {number[]}
 */
var transformArray = function(nums) {
    let j=0;
    for (let x of nums)
        if(x%2===0) nums[j++]=0;
    while(j<nums.length)
        nums[j++]=1;
    return nums;
};