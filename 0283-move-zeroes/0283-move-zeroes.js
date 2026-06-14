/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    if (nums.length===1) return nums;
    let pointer=0;
    for(let i=1;i<nums.length;i++){
        if(nums[i]!==0 && nums[pointer]===0 && i!==pointer){
            let tmp=nums[i];
            nums[i]=nums[pointer];
            nums[pointer]=tmp;
            pointer++;
        }
        if(nums[i]===0 && nums[pointer]!==0) pointer=i;
    }
    return nums;
};