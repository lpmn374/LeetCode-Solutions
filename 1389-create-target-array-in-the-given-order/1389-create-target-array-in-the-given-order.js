/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
    let numLen=nums.length,result=new Array(numLen);
    for(let i=0;i<numLen;i++){
        for(let j=i+1;j<numLen;j++)
            if(index[j]<=index[i]) index[i]++;
        result[index[i]]=nums[i];
    }
    return result;
};