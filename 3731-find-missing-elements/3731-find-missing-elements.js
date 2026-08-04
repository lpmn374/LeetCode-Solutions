/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findMissingElements = function(nums) {
    nums.sort((a,b)=>a-b);
    let n=nums.length, num=nums[0], result=[], index=0;
    for(let i=nums[0];i<nums[n-1];i++)
        if(nums[index]===i) index++;
        else result.push(i);
    return result;
}; 