/**
 * @param {number[]} nums
 * @return {number}
 */
var subarraySum = function(nums) {
    let result=0;
    const sum = (start, i, nums) => {
        let total=0;
        for(let j=start; j<=i;j++)
            total+=nums[j];
        return total;
    };
    for(let i=0;i<nums.length;i++){
        start=Math.max(0, i-nums[i]);
        result+=sum(start,i, nums);
    }
    return result;
};