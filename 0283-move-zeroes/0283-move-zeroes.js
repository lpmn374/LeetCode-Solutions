/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    if (nums.length===1) return nums;
    let pointer1=0, pointer2=0;
    while(pointer2<nums.length){
        while(nums[pointer1]!==0 && pointer1<nums.length) pointer1++;
        if (pointer2<pointer1) pointer2=pointer1;
        while(nums[pointer2]===0 && pointer2<nums.length) pointer2++;
        if (pointer1<pointer2 && pointer1<nums.length && pointer2<nums.length){
            let tmp=nums[pointer1];
            nums[pointer1]=nums[pointer2];
            nums[pointer2]=tmp;
        }
        pointer1++;
        pointer2++;
    }
    return nums;
};