/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums=nums.sort((a,b)=>a-b);
    let closest=Infinity;
    for(let i=0;i<nums.length-2;i++){
        if(i>0 && nums[i]===nums[i-1]) continue;
        let left=i+1, right=nums.length-1;
        while(left<right){
            let current=nums[i]+nums[left]+nums[right];
            if (current===target) return target;
            if(Math.abs(current-target)<Math.abs(closest-target))
                closest=current;
            else if(current<target) left++;
            else right--;
        }
    }
    return closest;
};