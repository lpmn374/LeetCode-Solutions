/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let result= new Array(nums.length), rightProduct=1;
    result[0]=1;
    for(let i=1;i<nums.length;i++)
        result[i]=result[i-1]*nums[i-1];
    for(let j=nums.length-1;j>=0;j--){
        result[j]*=rightProduct;
        rightProduct*=nums[j]
    }
    return result;
};