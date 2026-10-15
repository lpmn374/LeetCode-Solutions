/**
 * @param {number[]} nums
 * @return {number}
 */
var sumCounts = function(nums) {
    let sum=0;
    for(let i=0;i<nums.length;i++){
        let mySet=new Set();
        for(let j=i;j<nums.length;j++){
            mySet.add(nums[j]);
            sum+=mySet.size**2;
        }
    }
    return sum;
};