/**
 * @param {number[]} nums
 * @return {number}
 */
var countPartitions = function(nums) {
    let left=0, right=0, count=0;
    for(let i=1;i<nums.length;i++)
        right+=nums[i];
    for(let i=0;i<nums.length-1;i++){
        left+=nums[i];
        if((left-right)%2===0) count++;
        right-=nums[i+1];
    }
    return count;
};