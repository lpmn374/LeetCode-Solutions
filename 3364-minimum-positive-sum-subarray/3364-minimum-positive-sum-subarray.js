/**
 * @param {number[]} nums
 * @param {number} l
 * @param {number} r
 * @return {number}
 */
var minimumSumSubarray = function(nums, l, r) {
    let n=nums.length, sum=0, result=Infinity;
    for(let i=0;i<n;i++){
        sum=0;
        for(let j=i;j<n;j++){
            sum+=nums[j];
            if(sum>0 && j-i+1 >= l && j-i+1 <= r) result=Math.min(result,sum);
        }
    }
    return result===Infinity?-1:result;
};