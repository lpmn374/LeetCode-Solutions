/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var findIntersectionValues = function(nums1, nums2) {
    let set1=new Set(nums1), set2=new Set(nums2), sum1=0, sum2=0, n1Len=nums1.length, n2Len=nums2.length;
    for(let i=0;i<n1Len;i++)
        if (set2.has(nums1[i])) sum1++;
    for(let i=0;i<n2Len;i++)
        if (set1.has(nums2[i])) sum2++;
    return [sum1,sum2];
};