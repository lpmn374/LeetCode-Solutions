/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var missingMultiple = function(nums, k) {
    let mySet=new Set(nums), turn=1;
    while(true){
        if (!mySet.has(k*turn)) return k*turn;
        turn++;
    }
};