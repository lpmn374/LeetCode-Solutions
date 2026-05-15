/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function(nums) {
    let result=[0], current_subset=[];
    backtrack(0, current_subset, nums, result);
    return result[0];
};
function backtrack(start, current_subset, nums, result){
    result[0]+=current_subset.reduce((result,x)=>result^x,0);
    for (let i=start;i<nums.length;i++){
        current_subset.push(nums[i]);
        backtrack(i + 1, current_subset, nums, result);
        current_subset.pop();
    }
}
