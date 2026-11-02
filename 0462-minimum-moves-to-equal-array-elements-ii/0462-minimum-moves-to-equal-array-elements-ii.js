/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function(nums) {
    nums.sort((a,b)=>a-b);
    let n=nums.length, median=n%2===0?(nums[n/2 - 1]+nums[n/2])/2:nums[Math.floor(n/2)], result=0;
    for(let i=0;i<nums.length;i++)
        result+=Math.abs(nums[i]-median);
    return result;
};