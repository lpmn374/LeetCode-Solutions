/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function(nums, k) {
    let n=nums.length, count=0, counts=new Array(100).fill(0);
    for(let i=0;i<n;i++)
        counts[nums[i]-1]++;
    for(let i=0;i<100;i++)
        if (i+k < 100) count+= counts[i]*counts[i+k];
    return count;
};