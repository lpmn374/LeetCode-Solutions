/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    let result=[], n=nums.length, max=nums[0];
    for(let i=0;i<n;i++)
        max=Math.max(max,nums[i]);
    for(let i=0;i<n;i++){
        if (nums[i]===max){
            result.push(-1);
            continue;
        }
        let j=(i+1)%n;
        while(j!==i){
            if(nums[j]>nums[i]){
                result.push(nums[j]);
                break;
            }
            j=(j+1)%n;
        }
    }
    return result;
};