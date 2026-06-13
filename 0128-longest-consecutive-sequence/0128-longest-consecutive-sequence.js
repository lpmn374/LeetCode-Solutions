/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const mySet= new Set(nums);
    let longest=0;
    for(let x of mySet){
        if (mySet.has(x-1)) continue;
        let currentLength=1;
        while(mySet.has(x+1)){
            currentLength++;
            x++;
        }
        longest=Math.max(longest, currentLength);
    }
    return longest;
};