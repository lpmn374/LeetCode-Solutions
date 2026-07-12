/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findMissingElements = function(nums) {
    let set=new Set(), result=[], minVal=nums[0], maxVal=minVal;
    for(let i=0;i<nums.length;i++){
        set.add(nums[i]);
        if(nums[i]<minVal) minVal=nums[i];
        if(nums[i]>maxVal) maxVal=nums[i]; 
    }
    for(let i=minVal;i<maxVal;i++)
        if(!set.has(i)) result.push(i);
    return result;
};