/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let left=0, right=n, result=[];
    for(let i=0;i<n;i++){
        result.push(nums[left+i]);
        result.push(nums[right+i]);
    }
    return result;
};