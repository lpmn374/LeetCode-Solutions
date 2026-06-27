/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    let n=nums.length, pos=0, neg=1, result=[];
    for(let i=0;i<n;i++)
        if(nums[i]>0){
            result[pos]=nums[i];
            pos+=2;
        }
        else{
            result[neg]=nums[i];
            neg+=2;
        }
    return result;
};