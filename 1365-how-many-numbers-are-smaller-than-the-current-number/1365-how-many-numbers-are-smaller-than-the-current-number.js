/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let tmp=[...nums], myMap=new Map();
    nums.sort((a,b)=> a-b);
    for(let i=0; i<nums.length; i++)
        if(!myMap.has(nums[i])) myMap.set(nums[i],i);
    for(let i=0; i<tmp.length; i++)
        tmp[i]=myMap.get(tmp[i]);
    return tmp;
};