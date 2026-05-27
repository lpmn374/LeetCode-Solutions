/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
    let result=[], left=0, right=0;
    for(let i=0;i<nums.length;i++){
        result.push(left);
        left+=nums[i];
    }
    for(let i=nums.length-1;i>=0;i--){
        result[i]=Math.abs(result[i]-right);
        right+=nums[i];
    }
    return result;
};