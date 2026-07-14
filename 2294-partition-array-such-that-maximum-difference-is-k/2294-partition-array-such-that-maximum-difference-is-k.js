/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var partitionArray = function(nums, k) {
    let n=nums.length;
    if(n===0) return 0;
    nums.sort((a,b)=>a-b);
    let count=0, start=0;
    count++;
    for (let i = 1; i < n; i++)
        if (nums[i] - nums[start] > k) {
            count++;
            start = i; 
        }
    return count;
};