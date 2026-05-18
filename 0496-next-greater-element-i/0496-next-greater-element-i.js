/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    const hashTable = new Map();
    let result = [], maxRight=nums2[nums2.length-1], currentRight=nums2[nums2.length-1];
    hashTable.set(nums2[nums2.length-1],-1);
    for(let i=nums2.length-2;i>=0;i--){
        if (nums2[i]>maxRight) hashTable.set(nums2[i],-1);
        else if (nums2[i]<currentRight)
            hashTable.set(nums2[i],currentRight);
        else{
            let potentialTarget=currentRight;
            while(!hashTable.has(nums2[i])){
                if (hashTable.get(potentialTarget)===-1 || !hashTable.has(potentialTarget))
                    hashTable.set(nums2[i],-1);
                else if (nums2[i]<hashTable.get(potentialTarget))
                    hashTable.set(nums2[i], hashTable.get(potentialTarget));
                potentialTarget= hashTable.get(potentialTarget);
            }
        }
        currentRight=nums2[i];
        if (maxRight<currentRight) maxRight=currentRight;
    }
        
    for(let x of nums1)
        result.push(hashTable.get(x));
    return result;
};