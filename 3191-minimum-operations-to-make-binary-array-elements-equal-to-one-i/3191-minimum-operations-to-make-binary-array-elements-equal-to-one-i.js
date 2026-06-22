/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    let count=0;
    for(let i=0;i<nums.length;i++)
        if(nums[i]===0 && i+2<nums.length){
            nums[i]=1;
            nums[i+1]===1?nums[i+1]=0:nums[i+1]=1;
            nums[i+2]===1?nums[i+2]=0:nums[i+2]=1;
            count++;
        }
        else if (nums[i]===0 && i+2>=nums.length) return -1;
    return count;
};