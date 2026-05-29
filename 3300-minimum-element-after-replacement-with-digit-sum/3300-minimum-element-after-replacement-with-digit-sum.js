/**
 * @param {number[]} nums
 * @return {number}
 */
var minElement = function(nums) {
    let min, current=0;
    while(nums[0]>0){
        current+=nums[0]%10;
        nums[0]=Math.floor(nums[0]/10);
    }
    min=current;
    for(let i=1;i<nums.length;i++){
        let current=0;
        while(nums[i]>0){
            current+=nums[i]%10;
            nums[i]=Math.floor(nums[i]/10);
        }
        if (current<min) min=current;
    }
    return min;
};