/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let e=0, d=0;
    for(let i=0;i<nums.length;i++){
        e+=nums[i];
        while(nums[i]>0){
            d+=nums[i]%10;
            nums[i]=Math.floor(nums[i]/10);
        }
    }
    return Math.abs(e-d);
};