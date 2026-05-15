/**
 * @param {number[]} nums
 * @return {number[]}
 */
var transformArray = function(nums) {
    let even=0, odd=0, result=[];
    for (let x of nums)
        x%2===0?even++:odd++;
    for (let i=0;i<nums.length;i++)
        even>0?result.push(0) && even--:result.push(1) && odd--;
    return result;
};