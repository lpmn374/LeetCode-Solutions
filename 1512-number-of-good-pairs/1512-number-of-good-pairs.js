/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    const myMap = new Map();
    for(let i=0;i<nums.length;i++)
        if(myMap.has(nums[i])) myMap.set(nums[i], myMap.get(nums[i])+1);
        else myMap.set(nums[i],1);
    return Array.from(myMap.values()).reduce((count,x)=> x>1?count+=x*(x-1)/2:count ,0);
};