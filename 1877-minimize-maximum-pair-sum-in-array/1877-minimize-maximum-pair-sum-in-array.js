/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function(nums) {
    nums.sort((a,b)=>a-b);
    let left=0, right=nums.length-1, max=0;
    while(left<right){
        let currentMax=nums[left]+nums[right];
        max=Math.max(max, currentMax);
        left++;
        right--;
    }
    return max;
};