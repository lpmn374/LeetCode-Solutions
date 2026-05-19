/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    nums.sort((a,b)=>a-b);
    let time;
    while(true){
        time=Math.floor(nums.length/2);
        if(nums[0]===nums[time] || nums[time]===nums[nums.length-1])
            return nums[time];
        else
            nums.pop();
    }
};