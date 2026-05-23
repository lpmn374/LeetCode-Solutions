/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const myMap= new Map();
    for(let i=0;i<=k && i<nums.length;i++){
        myMap.set(nums[i],(myMap.get(nums[i])||0)+1);
        if(myMap.get(nums[i])>1) 
            return true;
    }
    for(let j=k+1;j<nums.length;j++){
        myMap.set(nums[j-k-1],myMap.get(nums[j-k-1])-1);
        myMap.set(nums[j],(myMap.get(nums[j])||0)+1);
        if(myMap.get(nums[j])>1) 
            return true;
    }
    return false;
};