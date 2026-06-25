/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countMajoritySubarrays = function(nums, target) {
    let result=0;
    for(let i=0;i<nums.length;i++){
        let count=0;
        for(let right=i;right<nums.length;right++){
            if(nums[right]===target) count++;
            if (count>(right-i+1)/2)
                result++;
        }
    }
    return result;
};