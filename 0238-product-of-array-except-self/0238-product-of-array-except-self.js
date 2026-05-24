/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let rightProduct=1, leftProduct=1, result=new Array();
    for(let i=0;i<nums.length;i++){
        result.push(leftProduct);
        leftProduct*=nums[i];
    }
    for(let i=nums.length-1;i>=0;i--){
        result[i]*=rightProduct;
        rightProduct*=nums[i];
    }
    return result;
};