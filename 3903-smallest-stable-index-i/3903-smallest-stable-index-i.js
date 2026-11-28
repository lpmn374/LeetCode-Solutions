/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var firstStableIndex = function(nums, k) {
    let n=nums.length, minArray=new Array(n), maxValue=-Infinity;
    minArray[n-1]=nums[n-1];
    for(let i=n-2;i>=0;i--)
        if(nums[i]<minArray[i+1]) minArray[i]=nums[i];
        else minArray[i]=minArray[i+1]; 
    for(let i=0;i<n;i++){
        if(nums[i]>maxValue) maxValue=nums[i];
        if(maxValue-minArray[i]<=k) return i;
    }
    return -1;
};
