/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    let flag=0;
    for(let i=0;i<nums.length-1;i++){
        if(nums[i]>nums[i+1]) 
            if(flag==0)
                flag=1;
            else if (flag==-1)
                return false;
        if(nums[i]<nums[i+1]) 
            if(flag==0)
                flag=-1;
            else if (flag==1)
                return false;
    }
    return true;
};