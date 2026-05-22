/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    if(nums.length<=k) return nums.reduce((acc,cur)=>acc+cur,0)/k;
    let sum=0;
    for(let i=0;i<k;i++)
        sum+=nums[i];
    let maxSum=sum;
    for(let j=k;j<=nums.length-1;j++){
        sum+= nums[j] - nums[j-k];
        if (sum>maxSum) maxSum=sum;
    }
    return maxSum/k;
};