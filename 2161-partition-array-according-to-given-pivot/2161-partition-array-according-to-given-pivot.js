/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function(nums, pivot) {
    let before=[], between=[], after=[];
    for(let x of nums)
        x<pivot?before.push(x):x===pivot?between.push(x):after.push(x);
    //return [...before, ...between, ...after];
    return before.concat(between,after);
};