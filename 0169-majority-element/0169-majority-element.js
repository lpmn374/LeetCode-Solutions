/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const hashMap = new Map();
    for(let x of nums)
        hashMap.set(x, (hashMap.get(x)||0)+1);
    for(let [key, value] of hashMap)
        if(value>Math.floor(nums.length/2)) return key;
};