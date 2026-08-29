/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumIndicesWithKSetBits = function(nums, k) {
    let sum=0, x;
    for(let i=0;i<nums.length;i++){
        x=i.toString(2).split('1').length-1;
        if (x==k) sum+=nums[i];
    }
    return sum;
};