/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let k=1, n=nums.length;
    if (n===0) return 0;
    for(let i=1;i<n;i++){
        if(nums[i]!==nums[i-1]){
            nums[k]=nums[i];
            k++;
        }
    }
    return k;
}