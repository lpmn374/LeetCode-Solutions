/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function(nums) {
    const myMap = new Map();
    let result=[];
    for(let x of nums)
        (myMap.has(x)?myMap.set(x, myMap.get(x)+1):myMap.set(x,1));
    for(let [key, value] of myMap)
        if(value===2) result.push(key);
    return result;
};