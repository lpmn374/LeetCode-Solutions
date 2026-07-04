/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var findIntersectionValues = function(nums1, nums2) {
    let myNum1=new Map(), myNum2=new Map(), sum1=0, sum2=0, n1Len=nums1.length, n2Len=nums2.length;
    for(let i=0;i<n1Len;i++)
        myNum1.set(nums1[i], (myNum1.get(nums1[i])||0)+1);
    for(let i=0;i<n2Len;i++)
        myNum2.set(nums2[i], (myNum2.get(nums2[i])||0)+1);
    for(let [x,y] of myNum1)
        if(myNum2.has(x)) sum1+=y;
    for(let [x,y] of myNum2)
        if(myNum1.has(x)) sum2+=y; 
    return [sum1,sum2];
};