/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    const myMap = new Map();
    let count=0;
    for(let i=0;i<nums.length;i++)
        if(myMap.has(nums[i])) myMap.set(nums[i], myMap.get(nums[i])+1);
        else myMap.set(nums[i],1);
    for(const value of myMap.values())
        if (value>1) count+= value*(value-1)/2;
    return count;
};