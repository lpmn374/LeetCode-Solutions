/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    let min=Infinity, max=-Infinity;
    for(let i=0;i<nums.length;i++){
        if(nums[i]>max) max=nums[i];
        if(nums[i]<min) min=nums[i];
    }
    if (max%min===0) return min;
    else{
        let l=1;
        while(l!==0){
            l=max%min;
            max=min;
            min=l;
        }
        return max;
    }
};