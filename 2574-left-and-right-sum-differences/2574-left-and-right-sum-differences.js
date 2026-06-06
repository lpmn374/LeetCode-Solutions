/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
    let arr=[0], rightSum=0;
    for(let i=0;i<nums.length-1;i++)
        arr.push(arr[i]+nums[i]);
    for(let i=arr.length-1;i>=0;i--){
        arr[i]=Math.abs(arr[i]-rightSum);
        rightSum+=nums[i];
    }
    return arr;
};