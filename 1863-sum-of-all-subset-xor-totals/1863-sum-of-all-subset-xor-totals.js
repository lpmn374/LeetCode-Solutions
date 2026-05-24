/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function(nums) {
    let current=[], result=0;
    function backtracking(start, current){
        result+=current.reduce((acc,cur)=>acc^cur,0);
        for(let i=start;i<nums.length;i++){
                current.push(nums[i]);
                backtracking(i+1, current);
                current.pop();
        }
    }
    backtracking(0,[]);
    return result;
};