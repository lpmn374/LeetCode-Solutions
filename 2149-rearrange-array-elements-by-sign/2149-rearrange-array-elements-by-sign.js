/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    let n=nums.length, pos=0, neg=0, result=[];
    while (nums[pos]<0) pos++;
    while (nums[neg]>0) neg++;
    while(result.length<n){
        if (pos!==-1){
            result.push(nums[pos]);
            pos++;
        }
        if (neg!==-1){
            result.push(nums[neg]);
            neg++;
        }
        while (nums[pos]<0 && pos<n) pos++;
        while (nums[neg]>0 && neg<n) neg++;
        if (pos===n) pos=-1;
        if (neg===n) neg=-1;
    }
    return result;
};