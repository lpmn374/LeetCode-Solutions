/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function(nums1, nums2) {
    let length=Math.max(nums1.length, nums2.length), delete1=0, delete2=0, i=0;
    while (i+delete1>=0){
        if(!nums1[i+delete1] || !nums2[i+delete2]) return -1;
        if(nums1[i+delete1]===nums2[i+delete2]) return nums1[i+delete1];
        else if (nums1[i+delete1]<nums2[i+delete2]) delete2--;
        else delete1--;
        i++;
    }
    return -1;
};