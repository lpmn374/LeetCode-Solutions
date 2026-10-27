/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let mySet=new Set();
    for(let i=0;i<nums.length;i++)
        if(!mySet.has(nums[i])) mySet.add(nums[i]);
        else mySet.delete(nums[i]);
    const result=mySet.values().next().value;
    return result;
};