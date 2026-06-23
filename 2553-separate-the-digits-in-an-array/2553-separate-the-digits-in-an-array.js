/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function(nums) {
    let result=[];
    for(let i=0;i<nums.length;i++){
        let tmp=nums[i], count=-1, digit=0;
        while(tmp>0){
            count++;
            tmp=Math.floor(tmp/10);
        }
        while(count>=0){
            digit=Math.floor(nums[i]/(10**count));
            result.push(digit);
            nums[i]-=digit*(10**count);
            count--;
        }
    }
    return result;
};