/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    return quickSelect(nums, 0, nums.length-1, nums.length-k);
};
function swap(nums, i, j){
    let temp=nums[i];
    nums[i]=nums[j];
    nums[j]=temp;
}
function partition(nums, left, right){
    let randomIndex= left + Math.floor(Math.random()*(right-left+1));
    swap(nums, randomIndex, right);
    let pivot=nums[right], pivotIndex=left;
    for (let i=left;i<right; i++)
        if(nums[i]<pivot){
            swap(nums, i, pivotIndex);
            pivotIndex++;
        }
    swap(nums, pivotIndex, right);
    return pivotIndex;
}
function quickSelect(nums, left, right, k){
    if(left===right) return nums[left];
    const pivotIndex= partition(nums, left, right);
    if (k===pivotIndex)
        return nums[k];
    else if (k<pivotIndex)
        return quickSelect(nums, left, pivotIndex-1, k);
    else return quickSelect(nums, pivotIndex+1, right, k);
}