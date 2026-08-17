/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let left=0,right=nums.length-1,count=0;
    while(left<=right){
        while(nums[right]===val){
            nums[right]='_';
            count++;
            right--;
        }
        while(nums[left]===val && nums[right]!==val){
            nums[left]=nums[right];
            nums[right]='_';
            count++;
            left++;
            right--;
        }
        if(nums[left]!==val) left++;
    }
    return nums.length-count;
};