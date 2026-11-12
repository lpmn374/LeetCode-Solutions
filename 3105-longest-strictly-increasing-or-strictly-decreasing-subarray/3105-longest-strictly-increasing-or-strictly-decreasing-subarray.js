/**
 * @param {number[]} nums
 * @return {number}
 */
var longestMonotonicSubarray = function(nums) {
    let max=1, increase=1, decrease=1;
    for(let i=1;i<nums.length;i++){
        if(nums[i]>nums[i-1]){
            increase++;
            decrease=1;
        }
        else if(nums[i]<nums[i-1]){
            increase=1;
            decrease++;
        }
        else{
            increase=1;
            decrease=1;
        }
        max=Math.max(max, increase, decrease);
    }
    return max;
};