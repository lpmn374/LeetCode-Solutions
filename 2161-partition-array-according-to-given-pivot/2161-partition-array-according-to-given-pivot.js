/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function(nums, pivot) {
    let length=nums.length, left=0, right=length-1, result=[];
    for(let i=0, j=length-1;i<length;i++,j--){
        if (nums[i]<pivot)
            result[left++]=nums[i];
        if (nums[j]>pivot)
            result[right--]=nums[j];
    }
    while (left<=right)
        result[left++]=pivot;
    return result;
};