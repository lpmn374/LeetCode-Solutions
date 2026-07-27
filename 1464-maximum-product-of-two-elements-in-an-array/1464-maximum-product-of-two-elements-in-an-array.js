/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let n=nums.length;
    for(let i=0;i<n;i++)
        nums[i]--;
    nums.sort((a,b)=>a-b);
    return nums[0]*nums[1]>nums[n-1]*nums[n-2]?nums[0]*nums[1]:nums[n-1]*nums[n-2];
};