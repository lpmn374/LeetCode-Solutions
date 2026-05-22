/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let result=new Array(nums.length), left=0, right=nums.length-1, i=nums.length-1;
    while(left<=right){
        if(nums[left]**2 > nums[right]**2){
            result[i]=nums[left]**2;
            left++;
        }
        else{
            result[i]=nums[right]**2;
            right--;
        }
        i--;
    }
    return result;
};