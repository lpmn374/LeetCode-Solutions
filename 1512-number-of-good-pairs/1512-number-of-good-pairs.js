/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let count=0, newArray=[];
    for (let x of nums){
        count+= (newArray[x] || 0);
        newArray[x] = (newArray[x] || 0) + 1;
    }
    return count;
};