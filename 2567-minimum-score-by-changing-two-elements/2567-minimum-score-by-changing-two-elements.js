/**
 * @param {number[]} nums
 * @return {number}
 */
var minimizeSum = function(nums) {
    let n=nums.length;
    if(n<4) return 0;
    let k=2, right=n-1, left=0;
    nums.sort((a,b)=>a-b);
    return Math.min(nums[n-1]-nums[2], nums[n-3]-nums[0], nums[n-2]-nums[1])
};

