/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    const hashTable = new Map();
    let maxRight=nums2[nums2.length-1], currentRight=nums2[nums2.length-1];
    hashTable.set(nums2[nums2.length-1],-1);
    for(let i=nums2.length-2;i>=0;i--){
        if (nums2[i]>maxRight) hashTable.set(nums2[i],-1);
        else if (nums2[i]<currentRight)
            hashTable.set(nums2[i],currentRight);
        else{
            while(!hashTable.has(nums2[i])){
                if (hashTable.get(currentRight)===-1 || !hashTable.has(currentRight))
                    hashTable.set(nums2[i],-1);
                else if (nums2[i]<hashTable.get(currentRight))
                    hashTable.set(nums2[i], hashTable.get(currentRight));
                currentRight= hashTable.get(currentRight);
            }
        }
        currentRight=nums2[i];
        if (maxRight<currentRight) maxRight=currentRight;
    }
    for(let i=0;i<nums1.length;i++)
        nums1[i]=hashTable.get(nums1[i]);
    return nums1;
};