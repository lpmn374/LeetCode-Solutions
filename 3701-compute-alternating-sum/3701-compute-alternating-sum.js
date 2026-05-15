/**
 * @param {number[]} nums
 * @return {number}
 */
var alternatingSum = function(nums) {
    return nums.reduce((sum,x,index)=> index%2===0?sum+x:sum-x,0);
};