/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverage = function(nums) {
    let minAverage=Infinity, left=0, right=nums.length-1;
    nums.sort((a,b)=>a-b);
    while(left<right){
        let current=(nums[left]+nums[right])/2;
        if (current<minAverage) minAverage=current;
        left++;
        right--;
    }
    return minAverage;
};