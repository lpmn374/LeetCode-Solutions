/**
 * @param {number[]} nums
 * @param {number} digit
 * @return {number}
 */
var countDigitOccurrences = function(nums, digit) {
    let count=0;
    for(let i=0;i<nums.length;i++)
        while(nums[i]>0){
            if(nums[i]%10===digit) count++;
            nums[i]=Math.floor(nums[i]/10);
        }
    return count;
};