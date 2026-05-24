/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let maxLength=0, left=0;
    for(let right=0;right<nums.length;right++){
        if(nums[right]===0)
            k--;
        while(k<0){
            if(nums[left]===0)
                k++;
            left++;
        }
        if(maxLength<right-left+1) maxLength=right-left+1;
    }
    return maxLength;
};