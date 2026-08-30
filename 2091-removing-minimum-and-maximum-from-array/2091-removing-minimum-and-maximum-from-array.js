/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDeletions = function(nums) {
    let min=nums[0], minIndex=0, max=min, maxIndex=0, n=nums.length;
    for(let i=0;i<n;i++){
        if(nums[i]>max){
            maxIndex=i;
            max=nums[i];
        }
        if(nums[i]<min){
            minIndex=i;
            min=nums[i];
        }
    }
    let left=0, right=0;
    if(maxIndex>minIndex){
        left=minIndex;
        right=maxIndex;
    }
    else{
        right=minIndex;
        left=maxIndex;
    }
    return Math.min(right+1, n-left, left+1 + n-right);
};