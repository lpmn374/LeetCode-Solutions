/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAlternatingSum = function(nums) {
    for(let i=0;i<nums.length;i++)
        if(nums[i]<0) nums[i]*=-1;
    nums.sort((a,b)=>a-b);
    let left=0, right=nums.length-1, sum=0;
    while(left<=right){
        sum+=nums[right]**2;
        if(right!==left) sum-=nums[left++]**2;
        right--;
    }
    return sum;
};